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

namespace conference\View;

use phpws2\Template;
use conference\Resource\PaymentResource;

class PaymentView extends AbstractView
{

    protected $factory;

    public function __construct()
    {
        $this->factory = new \conference\Factory\PaymentFactory;
    }

    public function paymentError()
    {
        $template = new Template;
        $template->setModuleTemplate('conference', 'Payment/Error.html');
        return $template->get();
    }

    public function alreadyCompleted()
    {
        return 'already completed';
    }

    public function complete(int $paymentId)
    {
        $payment = $this->factory->load($paymentId, false);
        if (empty($payment)) {
            return $this->paymentNotFound();
        }

        if (!$payment->completed) {
            return $this->paymentIncomplete($payment);
        }

        if (!\conference\Factory\VisitorFactory::checkVisitor($payment->visitorId)) {
            return $this->genericSuccess();
        }

        $vars = $this->templateInfo($payment);
        $vars['payerName'] = $payment->payerName;
        $vars['cardType'] = $payment->cardType;
        $vars['transactionId'] = $payment->transactionId;
        $vars['receipt'] = $payment->receipt;
        $template = new Template($vars);
        $template->setModuleTemplate('conference', 'Payment/Success.html');
        return $template->get();
    }

    private function templateInfo(PaymentResource $payment)
    {
        $registrationFactory = new \conference\Factory\RegistrationFactory();
        $registration = $registrationFactory->load($payment->registrationId);
        $sessionFactory = new \conference\Factory\SessionFactory();
        $session = $sessionFactory->load($registration->sessionId);
        $conferenceFactory = new \conference\Factory\ConferenceFactory;
        $conference = $conferenceFactory->load($session->conferenceId);

        $vars = $session->getStringVars();
        $vars['sessionId'] = $session->id;
        $vars['sessionTitle'] = $vars['title'];
        $vars['conferenceId'] = $conference->id;
        $vars['conferenceTitle'] = $conference->title;
        $vars['amount'] = number_format($payment->amount, 2, '.', '');
        if ($payment->supplementId) {
            $vars['totalPaid'] = number_format($registration->amountPaid, 2,
                    '.', '');
        }
        return $vars;
    }

    public function paymentNotFound()
    {
        $template = new Template();
        $template->setModuleTemplate('conference', 'Payment/NotFound.html');
        return $template->get();
    }

    public function paymentIncomplete(PaymentResource $payment)
    {
        $vars = $this->templateInfo($payment);
        $template = new Template($vars);
        $template->setModuleTemplate('conference', 'Payment/Incomplete.html');
        return $template->get();
    }

    public function cancel(int $paymentId)
    {
        $payment = $this->factory->load($paymentId);
        $template = new Template(['registrationId' => $payment->registrationId]);
        $template->setModuleTemplate('conference', 'Payment/Canceled.html');
        return $template->get();
    }

    public function genericSuccess()
    {
        $template = new Template();
        $template->setModuleTemplate('conference', 'Payment/GenericSuccess.html');
        return $template->get();
    }

    public function syncComplete(int $accountId)
    {
        $accountFactory = new \conference\Factory\AccountFactory();
        $account = $accountFactory->load($accountId);
        $template = new Template(['accountTitle' => $account->title]);
        $template->setModuleTemplate('conference', 'Payment/SyncComplete.html');
        return $template->get();
    }

    public function syncAccount(int $conferenceId)
    {
        $conferenceFactory = new \conference\Factory\ConferenceFactory();
        $accountFactory = new \conference\Factory\AccountFactory;
        $conference = $conferenceFactory->load($conferenceId);
        $account = $accountFactory->load($conference->accountId);
        $tpl = [];
        $tpl['conference'] = $conference->getStringVars();
        $tpl['accountTitle'] = $account->title;
        $template = new Template($tpl);
        $template->setModuleTemplate('conference', 'Payment/SyncAccount.html');
        return $template->get();
    }

}
