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
use conference\Factory\SessionFactory as Factory;
use conference\Factory\RegistrationFactory;
use conference\Factory\VisitorFactory;
use conference\Factory\StudentFactory;
use conference\Factory\GuestFactory;
use conference\View\SessionView as View;

class Session extends SubController
{

    /**
     * @var conference\View\SessionView
     */
    protected $view;

    /**
     * @var conference\Factory\SessionFactory
     */
    protected $factory;

    protected function loadFactory()
    {
        $this->factory = new Factory;
    }

    protected function loadView()
    {
        $this->view = new View;
    }

    protected function changeJson(Request $request)
    {
        $registrationId = $request->pullGetInteger('registrationId');
        $registrationFactory = new RegistrationFactory();
        $registration = $registrationFactory->load($registrationId);
        if ($registration->visitorId != VisitorFactory::getCurrentId()) {
            throw \conference\Exception\VisitorIdMismatch;
        }

        return $this->factory->getChangeSessions($registration);
    }

    protected function signupHtml(Request $request)
    {
        if (\conference\Factory\SettingsFactory::getDisabled()) {
            return \conference\View\SettingsView::disabled();
        }
        $regFactory = new RegistrationFactory;
        $visitorId = VisitorFactory::getCurrentId();
        $studentId = $request->pullGetInteger('studentId');
        $registration = $regFactory->getByStudentId($visitorId, $studentId, $this->id);
        if (empty($registration)) {
            $registration = $regFactory->createRegistration($visitorId,
                    $this->id, $studentId);
        }

        return $this->view->signup($this->id, $registration->id, $studentId);
    }

    /**
     * Returns the current visitor registration for a session.
     * @param Request $request
     */
    protected function currentRegJson()
    {
        $visitorId = VisitorFactory::getCurrentId();
        if (empty($visitorId)) {
            throw new \Exception('No visitor logged in.');
        }

        $regFactory = new RegistrationFactory;

        $registration = $regFactory->getIncompleteRegistration($visitorId,
                $this->id, false);

        $guestFactory = new GuestFactory;
        $studentFactory = new StudentFactory;
        $response['student'] = $studentFactory->load($registration->studentId)->getStringVars();
        $response['guests'] = $guestFactory->listing(['registrationId' => $registration->id]);
        $response['registration'] = $registration->getStringVars();
        $visitorFactory = new VisitorFactory();
        $visitor = $visitorFactory->getCurrentObject();
        $response['visitor'] = $visitor->getInfo();
        $session = $this->factory->load($this->id);
        $response['signupAllowed'] = Factory::signupAllowed($session);

        $visitorInfoFactory = new \conference\Factory\VisitorInfoFactory;
        $response['visitorInfo'] = $visitorInfoFactory->visitorListing($registration->id);
        return $response;
    }

}
