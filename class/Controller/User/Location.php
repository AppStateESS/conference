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

namespace conference\Controller\User;

use Canopy\Request;
use conference\Controller\SubController;
use conference\Factory\LocationFactory;
use conference\View\LocationView;

class Location extends SubController
{

    /**
     * @var \conference\Factory\LocationFactory
     */
    protected $factory;

    /**
     * @var \conference\View\LocationView 
     */
    protected $view;

    protected function loadFactory()
    {
        $this->factory = new LocationFactory;
    }

    protected function loadView()
    {
        $this->view = new LocationView;
    }
    
    protected function viewHtml(Request $request)
    {
        return $this->view->view($this->factory->load($this->id));
    }

}
