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
use conference\Factory\RegistrationFactory;
use conference\View\RegistrationView;
use conference\Factory\VisitorFactory;
use conference\Factory\SessionFactory;
use conference\Factory\LockedFactory;
use conference\Exception\VisitorIdMismatch;
use conference\Factory\LogFactory;

class Registration extends SubController
{

    /**
     * @var \conference\View\RegistrationView
     */
    protected $view;

    /**
     *
     * @var \conference\Factory\RegistrationFactory
     */
    protected $factory;

    protected function loadFactory()
    {
        $this->factory = new RegistrationFactory;
    }

    protected function loadView()
    {
        $this->view = new RegistrationView;
    }

    /**
     * Updates an incomplete registration
     * @param Request $request
     * @throws VisitorIdMismatch
     */
    protected function put(Request $request)
    {
        $registration = $this->factory->load($this->id);
        if (!VisitorFactory::checkVisitor($registration->visitorId)) {
            throw new VisitorIdMismatch;
        }
        $visitor = VisitorFactory::getCurrentObject();
        if ($registration->completed) {
            throw new Exception('Cannot update a completed registration here.');
        }
        $this->factory->put($registration, $request);
        $this->factory->save($registration);
        $this->factory->updateIncompletePayment($registration, $visitor);
        if ($registration->guestCount === 0) {
            $guestFactory = new \conference\Factory\GuestFactory;
            $guestFactory->deleteByRegistrationId($registration->id);
        }
        return ['success' => true];
    }

    protected function changeSessionPatch(Request $request)
    {
        if (LockedFactory::isLocked()) {
            throw new \Exception('Cannot change session when using onsite locked system');
        }
        $registration = $this->factory->load($this->id);
        if (!VisitorFactory::checkVisitor($registration->visitorId)) {
            throw new VisitorIdMismatch;
        }

        $sessionFactory = new SessionFactory;
        $oldSession = $sessionFactory->load($registration->sessionId);
        if ($oldSession->signupEnd < time()) {
            LogFactory::log("Visitor #{$registration->visitorId} change sessions after their session had passed",
                    $oldSession);
            throw new \Exception('Sign up not allowed at this time.');
        }

        $session = $sessionFactory->load($request->pullPatchInteger('sessionId'));

        if ($registration->completed &&
                !SessionFactory::sameCost($oldSession, $session)) {
            throw new \Exception('Cannot change session on completed registration');
        }
        // Test they are allowed to change sessions.
        if (!SessionFactory::signupAllowed($session)) {
            LogFactory::log("Visitor #{$registration->visitorId} tried to switch to a session out of range",
                    $session);
            throw new \Exception('Sign up not allowed at this time.');
        }
        $this->factory->changeSession($registration, $session->id);
        return ['success' => 1];
    }

    protected function completeHtml()
    {
        $registration = $this->factory->load($this->id);
        if (!VisitorFactory::checkVisitor($registration->visitorId)) {
            throw new VisitorIdMismatch;
        }

        $visitor = VisitorFactory::getCurrentObject();
        if ($registration->completed) {
            \Canopy\Server::forward('conference/Visitor/Registration/' . $this->id);
        }
        $sessionFactory = new SessionFactory;
        $session = $sessionFactory->load($registration->sessionId);
        $paymentFactory = new \conference\Factory\PaymentFactory();
        $payment = $paymentFactory->getCurrentRegistrationPayment($registration);
        $conferenceFactory = new \conference\Factory\ConferenceFactory;
        $conference = $conferenceFactory->load($session->conferenceId);
        if (!$payment) {
            $accountFactory = new \conference\Factory\AccountFactory();
            if ($conference->accountId) {
                $account = $accountFactory->load($conference->accountId);
                $payment = $paymentFactory->createRegistrationPayment($registration,
                        $account, $visitor);
            } else {
                $payment = $paymentFactory->createPayOnSite($registration,
                        $visitor);
            }
        }

        if ($this->factory->paymentDue($registration)) {
            if (LockedFactory::isLocked()) {
                return $this->view->payToday($registration, $payment);
            } elseif ($conference->accountId && !LockedFactory::isLocked()) {
                return $this->view->paymentDue($registration, $payment);
            } else {
                return $this->view->payOnSite($registration, $payment);
            }
        } else {
            if ($registration->completed == 0 && $registration->totalCost == 0) {
                $this->factory->completeFree($registration);
            }
            return $this->view->view($this->id, VisitorFactory::getCurrentId());
        }
    }

    protected function viewHtml(Request $request)
    {
        if ($request->pullGetBoolean('print', true)) {
            $this->view->print($this->id, VisitorFactory::getCurrentId());
        } else {
            return $this->view->view($this->id, VisitorFactory::getCurrentId());
        }
    }

    protected function viewJson()
    {
        return $this->view->json($this->id, VisitorFactory::getCurrentId());
    }

}
