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
        $bannerId = $request->pullGetInteger('checkBannerId');
        $bannerUsername = $request->pullGetString('bannerUsername');
        $studentFactory = new StudentFactory;
        $student = $studentFactory->getBannerStudent($bannerId, $bannerUsername);
        $sessionFactory = new SessionFactory();

        if (!$student) {
            return ['success' => false, 'message' => 'Could not find your student account. Please try again or ask for assistance.'];
        } else {
            $sessionId = LockedFactory::lockedSessionId();
            if (!$sessionId) {
                return ['success' => false, 'message' => 'Your student is not assigned to this orientation. Please see someone at the front desk.'];
            }
            $session = $sessionFactory->load($sessionId);
            if ($student->startDate != $session->eventDate) {
                return ['success' => false, 'message' => 'Your student is not assigned to this orientation. Please see someone at the front desk.'];
            } else {
                $bannerStudent = $studentFactory->importBannerAPIStudent($bannerId);
                if (empty($bannerStudent)) {
                    return ['success' => false, 'message' => 'Could not find your student account. Please try again or ask for assistance.'];
                }
                $hidden = ['days', 'campWarningSent', 'active'];
                return ['success' => true, 'student' => $student->getStringVars(), 'session' => $session->getStringVars(), 'parents' => $bannerStudent->parents];
            }
        }
    }

    protected function createVisitorPost(Request $request)
    {
        $studentId = $request->pullPostInteger('studentId');
        $email = $request->pullPostString('email');
        $visitorFactory = new VisitorFactory;
        $visitor = $visitorFactory->loadByEmail($email);
        if ($visitor) {
            $registrationFactory = new \conference\Factory\RegistrationFactory;
            $registration = $registrationFactory->getByStudentId($visitor->id,
                    $studentId);
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
        return ['found' => (bool) $visitor];
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
