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
use conference\Factory\LockedFactory;
use conference\Factory\StudentFactory;
use conference\Exception\NotLockedDown;
use conference\Factory\SessionFactory;
use conference\Factory\SettingsFactory;
use conference\Factory\OnsiteFactory;
use conference\Factory\VisitorFactory;

class Onsite extends SubController
{

    /**
     *
     * @var OnsiteFactory
     */
    protected $factory;

    public function __construct($role)
    {
        parent::__construct($role);
        if (!LockedFactory::isLocked()) {
            throw new NotLockedDown();
        }
    }

    public function loadFactory()
    {
        $this->factory = new OnsiteFactory;
    }

    public function loadView()
    {

    }

    protected function searchJson(Request $request)
    {
        $sessionFactory = new SessionFactory();
        $bannerId = $request->pullGetInteger('checkBannerId');
        $bannerUsername = $request->pullGetString('bannerUsername');

        $sessionId = LockedFactory::lockedSessionId();
        if ($sessionId) {
            $session = $sessionFactory->load($sessionId);
        } else {
            return ['success' => false, 'message' => 'There are a problem pulling the session.'];
        }

        $studentFactory = new StudentFactory;
        $student = $studentFactory->getBannerStudent($bannerId, $bannerUsername);

        if (!$student) {
            return ['success' => false, 'message' => 'Could not find your student account. Please try again or ask for assistance.'];
        } else {
            if ($student->startDate != $session->eventDate) {
                return ['success' => false, 'message' => 'Your student is not assigned to this orientation. Please see someone at the front desk.'];
            } else {
                return ['success' => true, 'student' => $student->getStringVars(), 'session' => $session->getStringVars()];
            }
        }
    }

    protected function createVisitorPost(Request $request)
    {
        $studentId = $request->pullPostInteger('studentId');
        $sessionId = $request->pullPostInteger('sessionId');
        $email = $request->pullPostString('email');
        $visitorFactory = new VisitorFactory;
        $visitor = $visitorFactory->loadByEmail($email);
        if ($visitor) {
            $registrationFactory = new \conference\Factory\RegistrationFactory;
            $registration = $registrationFactory->getByStudentId($visitor->id,
                    $studentId, $sessionId);
            $json['hasRegistration'] = $registration->getStringVars();
            $json['found'] = true;
        } else {
            $json['found'] = false;
            $visitor = $visitorFactory->build();
            $this->factory->createVisitor($visitor, $request);
            VisitorFactory::setCurrent($visitor);
        }
        $json['visitor'] = $visitor->getInfo();
        return $json;
    }

    protected function checkEmailJson(Request $request)
    {
        $email = $request->pullGetString('email');
        $visitorFactory = new VisitorFactory;
        $visitor = $visitorFactory->loadByEmail($email);
        $visitorValues = $visitor->getStringVars();
        unset($visitorValues['password']);
        return ['found' => (bool) $visitor, 'visitor' => $visitorValues];
    }

    protected function createQuickPost(Request $request)
    {
        $visitorFactory = new VisitorFactory;
        $visitor = $visitorFactory->build();
        $this->factory->createVisitor($visitor, $request);
        VisitorFactory::setCurrent($visitor);
        return ['visitor' => $visitor->getInfo()];
    }

}