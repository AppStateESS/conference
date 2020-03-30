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
        $filename = preg_replace('/\W/', '-', substr($session->title, 0, 20)) . '.csv';
        $this->view->downloadCSV($content, $filename);
    }

    protected function paymentsHtml(Request $request)
    {
        $session = $this->getSession($request);
        $content = $this->view->payments($session);
        $filename = preg_replace('/\W/', '-', substr($session->title, 0, 20)) . '.csv';
        $this->view->downloadCSV($content, $filename);
    }

    private function getSession(Request $request)
    {
        $sessionId = $request->pullGetInteger('sid');
        $sessionFactory = new \conference\Factory\SessionFactory;
        $session = $sessionFactory->load($sessionId);
        return $session;
    }

    protected function sessionsHtml(Request $request)
    {
        $conference = $this->getConference($request);
        $content = $this->view->sessions($conference);
        $filename = preg_replace('/\W/', '-', substr($conference->title, 0, 20)) . '.csv';
        $this->view->downloadCSV($content, $filename);
    }

    private function getConference(Request $request)
    {
        $conferenceId = $request->pullGetInteger('cid');
        $conferenceFactory = new \conference\Factory\ConferenceFactory;
        $conference = $conferenceFactory->load($conferenceId);
        return $conference;
    }

}
