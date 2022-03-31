<?php

/**
 * MIT License
 * Copyright (c) 2019 Electronic Student Services @ Appalachian State University
 *
 * See LICENSE file in root directory for copyright and distribution permissions.
 *
 * @author Matthew McNaney <mcnaneym@appstate.edu>
 * @license https://opensource.org/licenses/MIT
 */

namespace conference\Controller\Visitor;

use Canopy\Request;
use conference\Controller\SubController;
use conference\Factory\StudentFactory;
use conference\Factory\SessionFactory;

class Student extends SubController
{

    /**
     * @var \conference\View\StudentView
     */
    protected $view;

    /**
     *
     * @var \conference\Factory\StudentFactory
     */
    protected $factory;

    protected function loadFactory()
    {
        $this->factory = new StudentFactory;
    }

    protected function loadView()
    {

    }

    protected function listJson(Request $request)
    {
        return ['listing' => $this->factory->listing()];
    }

    protected function matchJson(Request $request)
    {
        $conferenceId = $request->pullGetString('conferenceId');
        $message = '';
        $sessionVars = null;

        try {
            $student = $this->factory->getBannerStudent($request->pullGetInteger('matchBannerId'),
                $request->pullGetString('bannerUsername'));
            $reply = \conference\Factory\SettingsFactory::getEmailAddressOnly();
            if (!$student) {
                return ['message' => 'Student not found. Please check Banner user name and id number again.'];
            } else {
                $sessionFactory = new SessionFactory;
                $session = $sessionFactory->pullByEventDate($student->startDate,
                    $conferenceId);

                $futureSelect = \conference\Factory\SettingsFactory::getFutureSessionSelection();
                $futureSessions = (bool) $sessionFactory->listing(['canSignup' => true, 'todayOrLater' => true, 'conferenceId' => $conferenceId, 'activeOnly' => true, 'fields' => ['id'], 'limit' => 1]);

                if (empty($session)) {
                    $message = 'Student found but we could not match their orientation date.';
                    if ($futureSelect && $futureSessions) {
                        $message .= ' You may signup for a future session instead.';
                    }
                } elseif ($session->signupEnd < time()) {
                    $message = 'Student found but their matching orientation session is not available.';
                    if ($futureSelect && $futureSessions) {
                        $message .= ' You may signup for a future session instead.';
                    }
                } else {
                    $sessionVars = $session->getStringVars();
                }
                return ['student' => $student->getStringVars(), 'session' => $sessionVars, 'message' => $message, 'futureSessions' => $futureSessions];
            }
        } catch (\Exception $e) {
            if (CONFERENCE_SYSTEM_SETTINGS['friendlyErrors']) {
                \phpws2\Error::log($e);
                $message = 'Site error. Could not access student information.';
            } else {
                $message = $e->getMessage();
            }
        }
    }

    protected function viewJson()
    {
        $student = $this->factory->load($this->id);
        return $student->getStringVars();
    }

}
