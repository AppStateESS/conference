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
use conference\Factory\SettingsFactory;
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
        return ['found' => !empty($visitor->id)];
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
            return $this->view->scriptView('Login',
                            ['emailFill' => $email ?: '']);
        }
    }

    protected function apiCreatePost(Request $request)
    {
        $bannerId = $request->pullPostInteger('matchBannerId');
        $parentEmail = $request->pullPostString('emailAddress');
        $parentKey = $request->pullPostInteger('parentKey');
        if ($this->factory->apiCreate($bannerId, $parentKey, $parentEmail)) {
            return ['success' => true];
        } else {
            return ['success' => false, 'duplicate' => true];
        }
    }

    protected function signupHtml()
    {
        return $this->view->scriptView('Signup',
                        ['bannerApi' => SettingsFactory::getBannerApi()]);
    }

    protected function loginPost(Request $request)
    {
        $email = $request->pullPostString('email', true);
        $password = $request->pullPostString('password', true);
        if (empty($email) || empty($password)) {
            return ['success' => false, 'reason' => 'missing'];
        }
        $result = $this->factory->login($email, $password);
        if ($result['success']) {
            if ($returnUrl = $this->factory->getReturnUrl()) {
                if (preg_match('@conference/User/Visitor/login@', $returnUrl)) {
                    $returnUrl = './conference/Visitor/Conference';
                }
                return ['success' => true, 'returnUrl' => $returnUrl];
            } else {
                return ['success' => true, 'returnUrl' => './conference/Visitor/Conference'];
            }
        } else {
            return $result;
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

    protected function activatedHtml(Request $request)
    {
        return $this->view->activated($request->pullGetString('email'));
    }

    protected function activateHtml(Request $request)
    {
        $email = $request->pullGetString('email');
        $hash = $request->pullGetString('hash');

        if ($this->factory->activateAccount($email, $hash)) {
            Server::forward('./conference/User/Visitor/activated?email=' . $email);
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
        $hash = $request->pullGetString('hash');

        $visitor = $this->factory->getByHashId($request->pullGetInteger('id'), $hash);
        if (empty($visitor)) {
            return $this->view->resetFailed();
        }
        $vars['visitorId'] = $id;
        $vars['hash'] = $hash;
        return $this->view->scriptView('Reset', $vars);
    }

    protected function passwordPatch(Request $request)
    {
        $visitor = $this->factory->load($this->id);
        $hash = $request->pullPatchString('hash');
        if ($visitor->hash != $hash) {
            throw new \Exception('Mismashed hash');
        }
        $visitor->hashPassword($request->pullPatchString('password'));
        $visitor->resetHash();
        $this->factory->save($visitor);
        return ['success' => true];
    }

    public function getHtml(Request $request)
    {
        if (SettingsFactory::getDisabled()) {
            $content = \conference\View\SettingsView::disabled();
            return $this->htmlResponse($content);
        } else {
            return parent::getHtml($request);
        }
    }

}
