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

use conference\Factory\RegistrationFactory;
use conference\Factory\ConferenceFactory;
use conference\Factory\SessionFactory;
use conference\Factory\ServiceFactory;
use conference\Factory\AccountFactory;
use conference\Factory\VisitorFactory;
use conference\Factory\PaymentFactory;
use conference\Factory\LocationFactory;
use conference\Factory\GuestFactory;
use conference\Factory\SupplementFactory;
use conference\Resource\PaymentResource;
use conference\Resource\RegistrationResource as Resource;
use phpws2\Template;

class RegistrationView extends AbstractView
{

    public function modDirectory()
    {
        return PHPWS_SOURCE_DIR . 'mod/conference/AddOn/SessionMatch/';
    }

    public function serviceSettings()
    {
        return $this->scriptView('ServiceSettings');
    }

    public function __construct()
    {
        $this->factory = new RegistrationFactory;
    }

    public function paymentDue(Resource $registration, PaymentResource $payment)
    {
        $accountFactory = new AccountFactory;
        $visitorFactory = new VisitorFactory;

        $conference = $this->factory->getConference($registration);
        $session = $this->factory->getSession($registration);
        $account = $accountFactory->load($conference->accountId);
        $visitor = $visitorFactory->load($registration->visitorId);

        $vars['paid'] = $registration->amountPaid;
        $vars['totalCost'] = $registration->totalCost;
        $vars['studentId'] = $registration->studentId;
        $vars['amountDue'] = number_format($registration->amountDue(), 2, '.',
                '');
        $vars['sessionTitle'] = $session->title;
        $vars['sessionId'] = $session->id;
        $vars['accountUrl'] = $account->url;
        $vars['conferenceTitle'] = $conference->title;
        $vars['paymentInputs'] = ServiceFactory::getPaymentInputs($account,
                        $payment, $visitor);
        $template = new Template($vars);
        $template->setModuleTemplate('conference', 'Payment/Due.html');
        return $template->get();
    }

    public function payToday(Resource $registration, PaymentResource $payment)
    {
        $conference = $this->factory->getConference($registration);
        $session = $this->factory->getSession($registration);
        $vars = $session->getStringVars();
        $vars['conferenceTitle'] = $conference->title;
        $vars['amountDue'] = number_format($registration->amountDue(), 2, '.',
                '');
        $vars['sessionTitle'] = $session->title;
        $vars['sessionId'] = $session->id;
        $vars['studentId'] = $registration->studentId;

        $template = new Template($vars);
        $template->setModuleTemplate('conference', 'Payment/PayToday.html');
        return $template->get();
    }

    public function payOnSite(Resource $registration, PaymentResource $payment)
    {
        $conference = $this->factory->getConference($registration);
        $session = $this->factory->getSession($registration);
        $vars = $session->getStringVars();
        $vars['conferenceTitle'] = $conference->title;
        $vars['amountDue'] = number_format($registration->amountDue(), 2, '.',
                '');
        $vars['sessionTitle'] = $session->title;
        $vars['sessionId'] = $session->id;
        $vars['studentId'] = $registration->studentId;

        $template = new Template($vars);
        $template->setModuleTemplate('conference', 'Payment/OnSite.html');
        return $template->get();
    }

    /**
     * An HTML view of the current registration.
     * What is shown is controlled in the template itself. Check registrationVars for
     * what is sent.
     *
     * The 'supplementAllowed' tag will be false if signup has expired.
     * @param int $registrationId
     * @param int $visitorId
     * @param bool $buttons
     * @return string
     */
    public function view(int $registrationId, int $visitorId,
            bool $buttons = true): string
    {
        $registration = $this->factory->load($registrationId);
        if (!$visitorId || $registration->visitorId !== $visitorId) {
            return $this->registrationNotFound();
        }

        $tpl = $this->factory->registrationVars($registration);
        $tpl['buttons'] = $buttons;
        $contact = \conference\Factory\SettingsFactory::getContact();
        $tpl['contactEmail'] = $contact['contactEmail'];

        $template = new Template($tpl);
        $template->setModuleTemplate('conference', 'Registration/View.html');
        return $template->get();
    }

    public function print(int $registrationId, int $visitorId)
    {
        $content = $this->view($registrationId, $visitorId, false);
        echo \Layout::wrap($content, 'Registration Information', true);
        exit;
    }

    public function adminView(int $registrationId): string
    {
        $registration = $this->factory->load($registrationId);
        $tpl = $this->factory->registrationVars($registration);
        $template = new Template($tpl);
        $template->setModuleTemplate('conference', 'Registration/AdminView.html');
        return $template->get();
    }

    public function json(int $registrationId, int $visitorId = null)
    {
        $registration = $this->factory->load($registrationId);
        if (!$visitorId || $registration->visitorId !== $visitorId) {
            throw new ResourceNotFound($registrationId);
        }
        return $registration->getStringVars();
    }

    public function registrationNotFound()
    {
        http_response_code(500);
        $template = new Template;
        $template->setModuleTemplate('conference', 'Registration/NotFound.html');
        return $template->get();
    }

    /**
     * A visitor view of previous registrations
     * @param integer visitorId
     */
    public function listPreviousRegistrations(int $visitorId): string
    {
        $regFactory = new RegistrationFactory;
        $options['visitorId'] = $visitorId;
        $options['includeSession'] = true;
        $options['priorOnly'] = true;
        $registrations = $regFactory->listing($options);
        if (empty($registrations)) {
            return '';
        }
        $suppFactory = new SupplementFactory;
        if ($supplement = $suppFactory->loadByVisitorId($visitorId)) {
            foreach ($registrations as $key => $value) {
                if ($supplement->registrationId == $value['id']) {
                    $value['supplement'] = $supplement->getStringVars();
                }
            }
        }
        foreach ($registrations as &$reg) {
            $reg['allowSignup'] = !SessionFactory::signupPassed($reg['sessionId']);
        }
        $vars['registrations'] = $registrations;

        if (!empty($supplement)) {
            $vars['supplement'] = $supplement->getStringVars();
        }
        $template = new Template($vars);
        $template->setModuleTemplate('conference', 'Registration/Previous.html');
        return $template->get();
    }

}
