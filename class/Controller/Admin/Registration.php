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

namespace conference\Controller\Admin;

use Canopy\Request;
use conference\Controller\SubController;
use conference\Factory\RegistrationFactory as Factory;
use conference\View\RegistrationView as View;

class Registration extends SubController
{

    /**
     * @var conference\View\RegistrationView
     */
    protected $view;

    /**
     * @var conference\Factory\RegistrationFactory
     */
    protected $factory;

    protected function loadView()
    {
        $this->view = new View;
    }

    protected function loadFactory()
    {
        $this->factory = new Factory;
    }

    public function visitorHtml(Request $request)
    {
        return $this->view->scriptView('RegistrationHistory',
                        ['visitorId' => $request->pullGetString('visitorId')]);
    }

    protected function visitorJson(Request $request)
    {
        $visitorFactory = new \conference\Factory\VisitorFactory;
        $visitor = $visitorFactory->load($request->pullGetInteger('visitorId'));
        $options = $this->factory->listingOptions($request);
        $options['visitorId'] = $visitor->id;
        $options['includeSession'] = true;
        $visitorLimited['id'] = $visitor->id;
        $visitorLimited['firstName'] = $visitor->firstName;
        $visitorLimited['lastName'] = $visitor->lastName;
        $visitorLimited['email'] = $visitor->email;
        $visitorLimited['phone'] = $visitor->phone;
        return ['listing' => $this->factory->listing($options), 'visitor' => $visitorLimited];
    }

    protected function listHtml(Request $request)
    {
        return $this->view->scriptView('Registration',
                        ['sessionId' => $request->pullGetInteger('sessionId')]);
    }

    protected function listJson(Request $request)
    {
        $sessionId = $request->pullGetInteger('sessionId');
        $options = $this->factory->listingOptions($request);
        $options = $options + ['sessionId' => $sessionId, 'studentName' => true, 'visitorName' => true, 'search' => $request->pullGetString('search',
                    true), 'useLimit' => true];

        return $this->factory->listing($options);
    }

    protected function detailsJson(Request $request)
    {
        $registration = $this->factory->load($this->id);
        return $this->factory->registrationVars($registration);
    }

    protected function viewHtml(Request $request)
    {
        return $this->view->adminView($this->id);
    }

    protected function viewJson(Request $request)
    {
        $registration = $this->factory->load($this->id);
        return $registration->getStringVars();
    }

    protected function resetJson(Request $request)
    {
        $registration = $this->factory->load($request->pullGetInteger('id'));
        $this->factory->processTotalCost($registration);
        $this->factory->save($registration);
        $paymentFactory = new \conference\Factory\PaymentFactory();
        $paymentFactory->updateAmountDue($registration);

        return $registration->getStringVars();
    }

    protected function unpaidJson(Request $request)
    {
        $options['sessionId'] = $request->pullGetInteger('sessionId');
        $options['visitorName'] = true;
        $options['sortBy'] = 'lastName';
        $options['incompleteOnly'] = true;
        $options['studentName'] = true;
        $options['search'] = $request->pullGetString('search', true);
        return ['listing' => $this->factory->listing($options)];
    }

    protected function countJson(Request $request)
    {
        $sessionId = $request->pullGetInteger('sessionId');
        return ['count' => $this->factory->count($sessionId)];
    }

    protected function arrivedPatch()
    {
        $this->factory->arrived($this->id);
    }

    protected function unarrivedPatch()
    {
        $this->factory->unarrived($this->id);
    }

    protected function cancelPatch()
    {
        $registration = $this->factory->load($this->id);
        if ($registration->completed) {
            throw new \Exception('Cannot cancel registration without refund.');
        }
        $this->factory->cancel($registration);
        $this->factory->save($registration);
        return ['success' => 1];
    }

    protected function changeSessionPatch(Request $request)
    {
        $sessionId = $request->pullPatchInteger('sessionId');
        $registration = $this->factory->load($this->id);
        if ($registration->sessionId != $sessionId) {
            $this->factory->changeSession($registration, $sessionId);
        }

        return ['success' => true];
    }

}
