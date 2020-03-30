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
use conference\Factory\AccountFactory as Factory;
use conference\View\AccountView as View;


class Account extends SubController
{

    /**
     * @var conference\View\AccountView 
     */
    protected $view;

    /**
     * @var conference\Factory\AccountFactory
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

    protected function listJson(Request $request)
    {
        return ['listing' => $this->factory->listing()];
    }

    protected function post(Request $request)
    {
        $account = $this->factory->post($request);
        $this->factory->save($account);
        return ['success' => true];
    }

    protected function put(Request $request)
    {
        $account = $this->factory->put($this->id, $request);
        $this->factory->save($account);
        return ['success' => true];
    }

}
