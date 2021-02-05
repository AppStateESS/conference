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
use phpws2\Template;
use conference\Factory\VisitorFactory;
use conference\Factory\RegistrationFactory;
use conference\Factory\SupplementFactory;
use conference\View\SessionView;
use conference\Factory\SettingsFactory;

class ConferenceView extends AbstractView
{

    /**
     * @var ConferenceFactory
     */
    protected $factory;

    public function __construct()
    {
        $this->factory = new ConferenceFactory;
    }

    public function adminListing()
    {
        return $this->scriptView('Conference');
    }

    private function noConferences()
    {

        $template = new \phpws2\Template;
        $template->setModuleTemplate('conference', 'Conference/NoConferences.html');
        return $template->get();
    }

    private function headerInfo(int $conferenceId)
    {
        $conference = $this->factory->load($conferenceId);
        $vars = $conference->getStringVars();

        $locationFactory = new \conference\Factory\LocationFactory();
        if ($conference->locationId) {
            $location = $locationFactory->load($conference->locationId);
            $vars['location'] = $location->getStringVars();
        } else {
            $vars['location'] = null;
        }
        return $vars;
    }

    public function userView(int $conferenceId)
    {
        $vars = $this->headerInfo($conferenceId);
        $sessionView = new SessionView();
        $vars['sessionList'] = $sessionView->signupListing($conferenceId);
        $template = new Template($vars);
        $template->setModuleTemplate('conference', 'Conference/View.html');
        return $template->get();
    }

    public function visitorView(int $conferenceId, int $visitorId)
    {
        $vars = $this->headerInfo($conferenceId);
        $registrationFactory = new RegistrationFactory;
        $supplementFactory = new SupplementFactory;
        $vars['supplement'] = null;
        $vars['registrations'] = $registrationListing = $registrationFactory->listing(['conferenceId' => $conferenceId, 'includeSession' => true, 'visitorId' => $visitorId]);

        if (count($registrationListing)) {
            $supplement = $supplementFactory->loadByVisitorId(VisitorFactory::getCurrentId());
            if ($supplement) {
                $vars['supplement'] = $supplement->getStringVars();
            }
        }
        if (SettingsFactory::getDisabled()) {
            $vars['form'] = \conference\View\SettingsView::disabled();
        } else {
            $vars['form'] = $this->scriptView('SessionMatchForm', ['conferenceId' => $conferenceId]);
        }
        $template = new Template($vars);
        $template->setModuleTemplate('conference', 'Conference/SessionMatch.html');
        return $template->get();
    }

    private function showConferences()
    {
        $conferenceId = SettingsFactory::getDefaultConference();
        if ($conferenceId) {
            if (VisitorFactory::isLoggedIn()) {
                return $this->visitorView($conferenceId, VisitorFactory::getCurrentId());
            } else {
                return $this->userView($conferenceId);
            }
        }
        $vars['select'] = null;
        if ($visitorId = VisitorFactory::getCurrentId()) {
            $registrationFactory = new RegistrationFactory();
            $registrations = $registrationFactory->getRegistrationsByVisitorId($visitorId, false);
            if (!empty($registrations)) {
                $vars['select'] = $this->selectRegistration($registrations);
            }
        }

        $options['activeOnly'] = true;
        $conferences = $this->factory->listing($options);
        $vars['conferences'] = $conferences;

        $template = new Template($vars);
        $template->setModuleTemplate('conference', 'Conference/FrontPage.html');
        return $template->get();
    }

    public function frontPage()
    {
        if (\conference\Factory\LockedFactory::isLocked()) {
            return $this->onsiteRegistration();
        } else {
            return $this->showConferences();
        }
    }

    private function onsiteRegistration()
    {
        if (SettingsFactory::isDisabled()) {
            return SettingsView::disabled();
        }
        VisitorFactory::clearCurrent();
        $sessionId = \conference\Factory\LockedFactory::lockedSessionId();
        return $this->scriptView('Onsite', ['sessionId' => $sessionId]);
    }

    public function selectRegistration(array $registrations)
    {
        $vars['registrations'] = $registrations;
        $template = new Template($vars);
        $template->setModuleTemplate('conference', 'Conference/Select.html');
        return $template->get();
    }

}
