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
use conference\Factory\LocationFactory as Factory;
use conference\View\LocationView as View;

class Location extends SubController
{
    /**
     * @var conference\View\LocationView 
     */
    protected $view;

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
        return ['listing' => $this->factory->listing($options)];
    }
    
    protected function post(Request $request)
    {
        $location = $this->factory->post($request);
        $this->factory->save($location);
        return ['success'=>true];
    }
    
    protected function put(Request $request)
    {
        $location = $this->factory->put($this->id, $request);
        $this->factory->save($location);
        return ['success'=>true];
    }
    
    protected function delete(Request $request)
    {
        $this->factory->delete($this->id);
        return ['success'=>true];
    }

}
