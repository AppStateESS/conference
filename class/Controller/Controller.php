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

namespace conference\Controller;

use Canopy\Request;
use phpws2\Database;
use conference\Factory\VisitorFactory;
use conference\View\VisitorView;

define('CONFERENCE_ROLES', ['Admin', 'User', 'Visitor']);

class Controller extends \phpws2\Http\Controller
{

    protected $role;
    protected $subcontroller;

    public function __construct(\Canopy\Module $module, Request $request)
    {
        parent::__construct($module);
        $this->loadRole();
        $this->loadSubController($request);
    }

    private function loadRole()
    {
        $userId = \Current_User::getId();
        if (\Current_User::allow('conference')) {
            $this->role = new \conference\Role\Admin($userId);
        } elseif (VisitorFactory::isLoggedIn()) {
            $this->role = new \conference\Role\Visitor;
        } else {
            $this->role = new \conference\Role\User;
        }
    }

    /**
     * Loads controller based on Role and Resource. Default Controller is a
     * User Conference list view.
     * @param Request $request
     * @throws \conference\Exception\PrivilegeMissing
     * @throws \conference\Exception\VisitorLoginRequired
     * @throws \conference\Exception\BadCommand
     */
    private function loadSubController(Request $request)
    {
        $roleController = filter_var($request->shiftCommand(),
                FILTER_SANITIZE_STRING);

        if (empty($roleController) || preg_match('/\W/', $roleController)) {
            throw new \conference\Exception\BadCommand('Missing role controller');
        }

        $subController = filter_var($request->shiftCommand(),
                FILTER_SANITIZE_STRING);

        if ($roleController === 'Admin' && !$this->role->isAdmin()) {
            throw new \conference\Exception\PrivilegeMissing;
        } elseif ($roleController === 'Visitor' && !VisitorFactory::isLoggedIn()) {
            throw new \conference\Exception\VisitorLoginRequired;
        }

        if (empty($subController)) {
            throw new \conference\Exception\BadCommand('Missing subcontroller');
        }

        $subControllerName = '\\conference\\Controller\\' . $roleController . '\\' . $subController;
        if (!class_exists($subControllerName)) {
            throw new \conference\Exception\BadCommand($subControllerName);
        }
        $this->subcontroller = new $subControllerName($this->role);
    }

    public function execute(Request $request)
    {
        try {
            return parent::execute($request);
        } catch (\conference\Exception\PrivilegeMissing $e) {
            \Current_User::requireLogin();
        } catch (\Exception $e) {
            if (CONFERENCE_SYSTEM_SETTINGS['friendlyErrors']) {
                \phpws2\Error::log($e);
                $controller = new \conference\Controller\FriendlyErrorController($this->getModule());
                return $controller->get($request);
            } else {
                throw $e;
            }
        }
    }

    public function post(Request $request)
    {
        return $this->subcontroller->changeResponse($request);
    }

    public function patch(Request $request)
    {
        return $this->subcontroller->changeResponse($request);
    }

    public function delete(Request $request)
    {
        return $this->subcontroller->changeResponse($request);
    }

    public function put(Request $request)
    {
        return $this->subcontroller->changeResponse($request);
    }

    public function get(Request $request)
    {
        if ($request->isAjax() || (bool) $request->pullGetBoolean('json', true)) {
            return $this->subcontroller->getJson($request);
        } else {
            VisitorView::loggedInBox();
            return $this->subcontroller->getHtml($request);
        }
    }

}
