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
use conference\Factory\ConferenceFactory as Factory;
use conference\Factory\VisitorFactory;
use conference\View\ConferenceView as View;
use conference\View\VisitorView;

class Conference extends SubController
{

    /**
     * @var \conference\View\ConferenceView
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

    protected function listHtml()
    {
        return $this->view->frontPage();
    }

    protected function signupHtml()
    {
        $visitorFactory->setReturnUrl("./conference/User/Conference/{$this->id}/signup");
        \Canopy\Server::forward('./conference/User/Visitor/login');
    }

    protected function viewHtml()
    {
        $visitorFactory = new VisitorFactory;
        if ($visitorFactory->isLoggedIn()) {
            \Canopy\Server::forward('conference/Visitor/Conference/' . $this->id);
        } else {
            return $this->view->userView($this->id);
        }
    }

}
