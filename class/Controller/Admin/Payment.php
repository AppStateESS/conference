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
use conference\Factory\PaymentFactory as Factory;
use conference\View\PaymentView as View;

class Payment extends SubController
{

    /**
     * @var conference\View\PaymentView
     */
    protected $view;

    /**
     * @var conference\Factory\PaymentFactory
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

    protected function viewJson(Request $request)
    {
        $payment = $this->factory->load($this->id);
        return $payment->getStringVars();
    }

    protected function listHtml(Request $request)
    {
        return $this->view->scriptView('Payment',
                        ['registrationId' => $request->pullGetInteger('registrationId')]);
    }

    protected function syncAccountPatch(Request $request)
    {
        $this->factory->syncAccount($this->id,
                $request->pullPatchInteger('accountId'));
    }

    protected function statusJson(Request $request)
    {
        $registrationId = $request->pullGetInteger('registrationId');
        $registrationFactory = new \conference\Factory\RegistrationFactory();
        $registration = $registrationFactory->load($registrationId);
        $incomplete = $this->factory->getCurrentRegistrationPayment($registration);
        if ($incomplete) {
            $currentPayment = $incomplete->getStringVars();
        } else {
            $currentPayment = null;
        }
        $options['registrationId'] = $registrationId;
        $options['completedOnly'] = true;
        return ['completed' => $this->factory->listing($options), 'currentPayment' => $currentPayment];
    }

    protected function paidPut(Request $request)
    {
        $this->factory->adminPaid($this->id, $request);
        return ['success' => true];
    }

    protected function syncAccountHtml(Request $request)
    {
        return $this->view->syncAccount($request->pullGetInteger('conferenceId'));
    }

    protected function syncCompleteHtml(Request $request)
    {
        return $this->view->syncComplete($request->pullGetInteger('accountId'));
    }

    protected function syncAccountPost(Request $request)
    {
        $conferenceId = $request->pullPostInteger('conferenceId');
        $conferenceFactory = new \conference\Factory\ConferenceFactory();
        $conference = $conferenceFactory->load($conferenceId);
        $accountId = $conference->accountId;
        if ($accountId === 0) {
            return '<p>This conference had a zero account id. Stopping.</p>';
        }
        $this->factory->syncPaymentsToConferenceAccount($conference);
        \Canopy\Server::forward('conference/Admin/Payment/syncComplete?accountId=' . $accountId);
    }

}
