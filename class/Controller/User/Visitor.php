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
use Canopy\Server;
use conference\Controller\SubController;
use conference\Factory\VisitorFactory as Factory;
use conference\View\VisitorView as View;

class Visitor extends SubController
{

    /**
     * @var conference\View\VisitorView
     */
    protected $view;

    /**
     * @var conference\Factory\VisitorFactory
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

    protected function checkEmailJson(Request $request)
    {
        $email = $request->pullGetString('email');
        $visitor = $this->factory->loadByEmail($email);
        return ['found' => $visitor->id > 0];
    }

    /**
     * Loads the Login React script
     * @return string
     */
    protected function loginHtml(Request $request)
    {
        if ($this->factory->isLoggedIn()) {
            return $this->view->alreadyLoggedIn();
        } else {
            $email = $request->pullGetString('email', true);
            return $this->view->scriptView('Login', ['emailFill' => $email]);
        }
    }

    protected function signupHtml()
    {
        return $this->view->scriptView('Signup');
    }

    protected function loginPost(Request $request)
    {
        $this->factory->clearNotActivated();
        $email = $request->pullPostString('email');
        $password = $request->pullPostString('password');
        if (empty($email) || empty($password)) {
            return ['success' => false];
        }
        if ($this->factory->login($email, $password)) {
            if ($returnUrl = $this->factory->getReturnUrl()) {
                return ['success' => true, 'returnUrl' => $returnUrl];
            } else {
                return ['success' => true, 'returnUrl' => './conference/Visitor/Conference'];
            }
        } else {
            return ['success' => false];
        }
    }

    protected function post(Request $request)
    {
        try {
            $visitor = $this->factory->post($request);
            $this->factory->save($visitor);
            $this->factory->sendActivationEmail($visitor);
            return ['success' => true];
        } catch (\Exception $ex) {
            \phpws2\Error::log($ex);
            if (CONFERENCE_SYSTEM_SETTINGS['friendlyErrors']) {
                $error = 'Unable to save request.';
            } else {
                $error = $ex->getMessage();
            }
            return ['success' => false, 'error' => $error];
        }
    }

    protected function notActivatedHtml()
    {
        return $this->view->notActivated();
    }

    protected function activatedHtml()
    {
        return $this->view->activated();
    }

    protected function activateHtml(Request $request)
    {
        $email = $request->pullGetString('email');
        $hash = $request->pullGetString('hash');

        if ($this->factory->activateAccount($email, $hash)) {
            Server::forward('./conference/User/Visitor/activated');
        } else {
            Server::forward('./conference/User/Visitor/notActivated');
        }
    }

    protected function loggedoutHtml()
    {
        return $this->view->loggedOut();
    }

    protected function forgotPasswordHtml()
    {
        return $this->view->forgotPassword();
    }

    protected function sentPasswordHtml()
    {
        return $this->view->sentPassword();
    }

    protected function passwordFailedHtml()
    {
        return $this->view->passwordSendFailed();
    }

    protected function forgotPost(Request $request)
    {
        try {
            if ($this->factory->sendForgot($request->pullPostString('email'))) {
                Server::forward('conference/User/Visitor/sentPassword');
            } else {
                Server::forward('conference/User/Visitor/passwordFailed');
            }
        } catch (\Exception $e) {
            \phpws2\Error::log($e->getMessage());
            Server::forward('conference/User/Visitor/passwordFailed');
        }
    }

    protected function resetHtml(Request $request)
    {
        $id = $request->pullGetInteger('id');
        $hash = $request->pullGetInteger('hash');

        $visitor = $this->factory->getByHashId($request->pullGetInteger('id'),
                $request->pullGetString('hash'));
        if (empty($visitor)) {
            return $this->view->resetFailed();
        }
        $vars['visitorId'] = $id;
        return $this->view->scriptView('Reset', $vars);
    }

    protected function passwordPatch(Request $request)
    {
        $visitor = $this->factory->load($this->id);
        $visitor->hashPassword($request->pullPatchString('password'));
        $this->factory->save($visitor);
        return ['success' => true];
    }

}
