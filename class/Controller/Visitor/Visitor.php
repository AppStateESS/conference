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

namespace conference\Controller\Visitor;

use Canopy\Request;
use Canopy\Server;
use conference\Controller\SubController;
use conference\Factory\VisitorFactory;
use conference\View\VisitorView;

class Visitor extends \conference\Controller\User\Visitor
{

    protected function loadView()
    {
        $this->view = new VisitorView;
    }

    protected function loadFactory()
    {
        $this->factory = new VisitorFactory;
    }

    protected function put(Request $request)
    {
        $visitor = $this->factory->put($this->id, $request);
        $this->factory->save($visitor);
        VisitorFactory::setCurrent($visitor);
        return ['success' => true];
    }

    protected function logoutHtml()
    {
        VisitorFactory::clearCurrent();
        Server::forward('./conference/User/Visitor/loggedout');
    }

    protected function currentJson()
    {
        return VisitorFactory::getCurrent();
    }

}
