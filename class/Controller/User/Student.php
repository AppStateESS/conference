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

namespace conference\Controller\User;

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

    protected function bannerSearchJson(Request $request)
    {
        $bannerId = $request->pullGetInteger('matchBannerId', true);
        $username = $request->pullGetString('bannerUsername', true);
        if (empty($bannerId) || empty($username)) {
            return ['success' => false, 'code' => 'missing'];
        }
        $student = $this->factory->importBannerAPIStudent($bannerId);

        if (empty($student) || $student->bannerUsername != $username) {
            return ['success' => false, 'code' => 'notfound'];
        }
        if (empty($student->parents)) {
            return ['success' => false, 'code' => 'noparents'];
        }
        return ['success' => true, 'parents' => $student->parents];
    }

    protected function matchJson(Request $request)
    {
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

                if (empty($session)) {
                    $message = 'Student found but we could not match their orientation date.';
                } elseif ($session->signupEnd < time()) {
                    $message = 'Student found but their matching orientation session is not available.';
                } else {
                    $sessionVars = $session->getStringVars();
                }
                return ['student' => $student->getStringVars(), 'session' => $sessionVars, 'message' => $message];
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

}
