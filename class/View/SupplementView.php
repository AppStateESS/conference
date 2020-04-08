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

use conference\Factory\ConferenceFactory;
use conference\Factory\SessionFactory;
use conference\Factory\AccountFactory;
use conference\Factory\ServiceFactory;
use conference\Factory\VisitorFactory;
use conference\Factory\PaymentFactory;
use conference\Factory\RegistrationFactory;
use conference\Resource\SupplementResource;
use phpws2\Template;

class SupplementView extends AbstractView
{

    public function paymentDue(SupplementResource $supplement)
    {
        $conferenceFactory = new ConferenceFactory;
        $sessionFactory = new SessionFactory;
        $accountFactory = new AccountFactory;
        $visitorFactory = new VisitorFactory;
        $paymentFactory = new PaymentFactory;
        $registrationFactory = new RegistrationFactory;

        $registration = $registrationFactory->load($supplement->registrationId);
        $conference = $conferenceFactory->load($registration->conferenceId);
        $session = $sessionFactory->load($registration->sessionId);
        $account = $accountFactory->load($conference->accountId);
        $visitor = $visitorFactory->load($registration->visitorId);
        $payment = $paymentFactory->getSupplement($supplement);
        $vars = $supplement->getStringVars();
        $vars['sessionTitle'] = $session->title;
        $vars['accountUrl'] = $account->url;
        $vars['conferenceTitle'] = $conference->title;
        $vars['paymentInputs'] = ServiceFactory::getPaymentInputs($account,
                        $payment, $visitor);
        $template = new Template($vars);
        $template->setModuleTemplate('conference', 'Payment/SupplementDue.html');
        return $template->get();
    }

    public function notFound()
    {
        $template = new Template();
        $template->setModuleTemplate('conference', 'Supplement/notFound.html');
        return $template->get();
    }

    public function addForm(int $registrationId)
    {
        $registrationFactory = new RegistrationFactory;
        $registration = $registrationFactory->load($registrationId);
        $vars = $registrationFactory->registrationVars($registration,
                ['session', 'visitor']);
        $mealService = $vars['session']['mealService'];
        $mealCost = $vars['session']['mealCost'];
        $guestCost = $vars['session']['guestCost'];
        $vars['script'] = $this->scriptView('SupplementAdmin',
                ['registrationId' => $registrationId,
                    'mealCost' => $mealCost,
                    'guestCost' => $guestCost,
                    'mealService' => $mealService]);
        $template = new Template($vars);
        $template->setModuleTemplate('conference',
                'Supplement/AdminSupplement.html');
        return $template->get();
    }

    public function completed(SupplementResource $supplement)
    {
        $conferenceFactory = new ConferenceFactory;
        $sessionFactory = new SessionFactory;
        $registrationFactory = new RegistrationFactory;
        $registration = $registrationFactory->load($supplement->registrationId);
        $conference = $conferenceFactory->load($registration->conferenceId);
        $session = $sessionFactory->load($registration->sessionId);
        $vars['conferenceTitle'] = $conference->title;
        $vars['sessionTitle'] = $session->title;
        $vars['registrationId'] = $registration->id;

        $template = new Template($vars);
        $template->setModuleTemplate('conference', 'Supplement/Completed.html');
        return $template->get();
    }

}
