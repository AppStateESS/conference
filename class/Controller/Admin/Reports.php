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

use conference\Controller\SubController;
use conference\Factory\ReportFactory;
use conference\View\ReportView;
use Canopy\Request;

class Reports extends SubController
{

    protected function loadFactory()
    {
        $this->factory = new ReportFactory;
    }

    protected function loadView()
    {
        $this->view = new ReportView;
    }

    protected function listHtml()
    {
        return $this->view->scriptView('Reports');
    }

    protected function registrationsHtml(Request $request)
    {
        $session = $this->getSession($request);
        $content = $this->view->registrations($session);
        $filename = $this->getFileName($session, 'registrations');
        $this->view->downloadCSV($content, $filename);
    }

    protected function refundsHtml(Request $request)
    {
        $session = $this->getSession($request);
        $content = $this->view->refunds($session);
        $filename = $this->getFileName($session, 'refunds');
        $this->view->downloadCSV($content, $filename);
    }

    private function getFileName(\conference\Resource\SessionResource $session,
            $type)
    {
        $sessionVars = $session->getStringVars();
        $filename = $type . ' report -' . preg_replace('/\W/', '-',
                        substr($session->title, 0, 25)) . ' - ' . $sessionVars['eventDateFormat'] . '.csv';
        return $filename;
    }

    protected function paymentsHtml(Request $request)
    {
        $session = $this->getSession($request);
        $content = $this->view->payments($session);
        $filename = $this->getFileName($session, 'payments');
        $this->view->downloadCSV($content, $filename);
    }

    protected function emailsHtml(Request $request)
    {
        $session = $this->getSession($request);
        $content = $this->view->emails($session);
        $filename = $this->getFileName($session, 'emails');
        $this->view->downloadCSV($content, $filename);
    }

    private function getSession(Request $request)
    {
        $sessionId = $request->pullGetInteger('sid');
        $sessionFactory = new \conference\Factory\SessionFactory;
        $session = $sessionFactory->load($sessionId);
        return $session;
    }

    protected function allEmailsHtml(Request $request)
    {
        $conference = $this->getConference($request);
        $content = $this->view->allEmails($conference);
        $filename = $conference->title . ' - All Emails.csv';
        $this->view->downloadCSV($content, $filename);
    }

    protected function sessionsHtml(Request $request)
    {
        $conference = $this->getConference($request);
        $content = $this->view->sessions($conference);
        $filename = 'conference sessions report - ' . preg_replace('/\W/', '-',
                        substr($conference->title, 0, 20)) . '.csv';
        $this->view->downloadCSV($content, $filename);
    }

    /**
     *
     * @param Request $request
     * @return conference\Resource\ConferenceResource
     */
    private function getConference(Request $request)
    {
        $conferenceId = $request->pullGetInteger('cid');
        $conferenceFactory = new \conference\Factory\ConferenceFactory;
        $conference = $conferenceFactory->load($conferenceId);
        return $conference;
    }

}
