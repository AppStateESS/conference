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
use conference\Factory\ConferenceFactory as Factory;
use conference\View\ConferenceView as View;

class Conference extends SubController
{

    /**
     * @var conference\View\ConferenceView
     */
    protected $view;

    /**
     * @var conference\Factory\ConferenceFactory
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

    protected function listHtml(Request $request)
    {
        return $this->view->adminListing();
    }

    protected function listJson(Request $request)
    {
        $options = $this->factory->listingOptions($request);
        $options['includeDeleted'] = $request->pullGetBoolean('includeDeleted', true);
        return ['listing' => $this->factory->listing($options)];
    }

    protected function viewJson(Request $request)
    {
        $conference = $this->factory->load($this->id);
        return $conference->getStringVars();
    }

    protected function post(Request $request)
    {
        $conference = $this->factory->post($request);
        $this->factory->save($conference);
        return ['success' => true, 'id' => $conference->id];
    }

    protected function put(Request $request)
    {
        $conference = $this->factory->put($this->id, $request);
        $this->factory->save($conference);
        return ['success' => true, 'id' => $this->id];
    }

    protected function delete(Request $request)
    {
        $this->factory->delete($this->id);
        return ['success' => true];
    }

}
