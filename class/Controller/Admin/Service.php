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
use conference\Factory\ServiceFactory as Factory;
use conference\View\ServiceView as View;

class Service extends SubController
{

    /**
     * @var conference\Factory\ServiceFactory
     */
    protected $factory;

    /**
     * @var conference\View\ServiceView
     */
    protected $view;

    protected function loadView()
    {
        $this->view = new View;
    }

    protected function loadFactory()
    {
        $this->factory = new Factory;
    }

    protected function listHtml(Request $request)
    {
        return $this->view->serviceSettings($request);
    }

    protected function serviceVariablesJson(Request $request)
    {
        return ['serviceVariables' => $this->factory->getParameterList()];
    }

}
