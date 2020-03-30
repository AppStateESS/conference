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
use conference\Factory\SessionFactory as Factory;
use conference\Factory\RegistrationFactory;
use conference\View\SessionView as View;

class Session extends SubController
{

    /**
     * @var conference\View\SessionView
     */
    protected $view;

    /**
     * @var conference\Factory\SessionFactory
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
        $session = $this->factory->load($this->id);
        return $session->getStringVars();
    }

    protected function listHtml(Request $request)
    {
        return $this->view->adminListing($request->pullGetInteger('conferenceId'));
    }

    protected function listJson(Request $request)
    {
        $options = $this->factory->listingOptions($request);
        $options['conferenceId'] = $request->pullGetInteger('conferenceId');
        $options['registrationCount'] = true;
        return ['listing' => $this->factory->listing($options)];
    }

    protected function post(Request $request)
    {
        $session = $this->factory->post($request);
        $this->factory->save($session);
        return ['success' => true];
    }

    protected function put(Request $request)
    {
        $session = $this->factory->put($this->id, $request);
        $this->factory->save($session);
        return ['success' => true];
    }

    protected function delete(Request $request)
    {
        $this->factory->delete($this->id);
        return ['success' => true];
    }

    protected function patch(Request $request)
    {
        $session = $this->factory->patch($this->id,
                $request->pullPatchString('varname'),
                $request->pullPatchString('value'));
        $this->factory->save($session);
        return ['success' => true];
    }

    protected function availableJson(Request $request)
    {
        $registrationId = $request->pullGetInteger('registrationId');
        $registrationFactory = new RegistrationFactory();
        $registration = $registrationFactory->load($registrationId);

        return ['listing' => $this->factory->getChangeSessions($registration)];
    }

    protected function signinHtml(Request $request)
    {
        $session = $this->factory->load($this->id);
        return $this->view->signin($session);
    }

    protected function copyPost(Request $request)
    {
        $sessionId = $request->pullPostInteger('id');
        $session = $this->factory->load($sessionId);
        $session->id = 0;
        $session->title = $session->title . ' - copy';
        $this->factory->save($session);
        return ['success' => true];
    }

}
