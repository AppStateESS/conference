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
use conference\Factory\SettingsFactory;
use conference\View\SettingsView as View;
use Canopy\Request;

class Settings extends SubController
{

    /**
     * @var conference\View\SettingsView
     */
    protected $view;

    /**
     * @var conference\Factory\SettingsFactory
     */
    protected $factory;

    protected function loadView()
    {
        $this->view = new View;
    }

    protected function loadFactory()
    {

    }

    protected function listHtml()
    {
        return $this->view->scriptView('Settings');
    }

    protected function contactJson()
    {
        return SettingsFactory::getContact();
    }

    protected function contactPost(Request $request)
    {
        $contactName = $request->pullPostString('contactName');
        $contactEmail = $request->pullPostString('contactEmail');

        SettingsFactory::saveContact($contactName, $contactEmail);
        return ['success' => true];
    }

    protected function defaultConferenceJson()
    {
        return ['defaultConference' => SettingsFactory::getDefaultConference()];
    }

    protected function defaultConferencePost(Request $request)
    {
        SettingsFactory::setDefaultConference($request->pullPostInteger('defaultConference'));
        return ['success' => 1];
    }

    protected function upcomingSessionsJson()
    {
        $sessionFactory = new \conference\Factory\SessionFactory();
        $options['activeOnly'] = true;
        $options['todayOrLater'] = true;
        $options['sortBy'] = 'eventDate';
        $options['sortByDir'] = 'asc';
        $options['fields'] = ['id', 'title', 'eventDate'];
        $listing = $sessionFactory->listing($options);
        return ['listing' => $listing];
    }

}
