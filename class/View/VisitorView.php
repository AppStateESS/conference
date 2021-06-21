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

namespace conference\View;

use Canopy\Request;
use conference\Factory\VisitorFactory;
use phpws2\Template;

class VisitorView extends AbstractView
{

    public function __construct()
    {
        $this->factory = new VisitorFactory;
    }

    public function login()
    {
        $template = new Template;
        $template->setModuleTemplate('conference', 'Visitor/Login.html');
        return $template->get();
    }

    public function notActivated()
    {
        $template = new Template;
        $template->setModuleTemplate('conference', 'Screens/NotActivated.html');
        return $template->get();
    }

    public function activated(string $email)
    {
        $template = new Template(['email' => $email]);
        $template->setModuleTemplate('conference', 'Screens/Activated.html');
        return $template->get();
    }

    /**
     * Message displayed if someone tries to log in while already logged.
     */
    public function alreadyLoggedIn()
    {
        $template = new Template;
        $template->setModuleTemplate('conference', 'Visitor/AlreadyLogged.html');
        return $template->get();
    }

    public static function loggedInBox()
    {
        if (VisitorFactory::isLoggedIn()) {
            $template = new Template;
            $template->setModuleTemplate('conference', 'Visitor/LoggedBox.html');
            \Layout::add($template->get(), 'login');
            \Layout::addStyle('conference', 'Visitor/login.css');
        }
    }

    public function loggedOut()
    {
        $template = new Template;
        $template->setModuleTemplate('conference', 'Visitor/Loggedout.html');
        return $template->get();
    }

    public function adminListing()
    {
        return $this->scriptView('Visitor');
    }

    public function jsonListing(Request $request)
    {
        $options = $this->factory->listingOptions($request);
        return $this->factory->listing($options);
    }

    public function forgotPassword()
    {
        $template = new Template;
        $template->setModuleTemplate('conference', 'Visitor/Forgot.html');
        return $template->get();
    }

    public function sentPassword()
    {
        $template = new Template;
        $template->setModuleTemplate('conference', 'Visitor/SentPassword.html');
        return $template->get();
    }

    public function passwordSendFailed()
    {
        $template = new Template;
        $template->setModuleTemplate('conference',
                'Visitor/PasswordSendFailed.html');
        return $template->get();
    }

    public function resetFailed()
    {
        $template = new Template;
        $template->setModuleTemplate('conference', 'Visitor/ResetFailed.html');
        return $template->get();
    }

}
