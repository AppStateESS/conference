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
use conference\Factory\VisitorFactory;
use conference\View\VisitorView as View;

class Visitor extends SubController
{

    /**
     * @var \conference\Factory\VisitorFactory
     */
    protected $factory;

    protected function loadView()
    {
        $this->view = new View;
    }

    protected function loadFactory()
    {
        $this->factory = new VisitorFactory;
    }

    protected function listHtml()
    {
        return $this->view->adminListing();
    }

    protected function listJson(Request $request)
    {
        return $this->view->jsonListing($request);
    }

    protected function viewJson(Request $request)
    {
        $visitor = $this->factory->load($this->id);
        return $visitor->getStringVars(true, ['hash', 'password', 'activated']);
    }

    protected function delete(Request $request)
    {
        $this->factory->delete($this->id);
        return ['success' => true];
    }

    protected function activatePatch(Request $request)
    {
        $this->factory->activate($this->id);
        return ['success' => true];
    }

    protected function checkEmailJson(Request $request)
    {
        $email = $request->pullGetString('email');
        $id = $request->pullGetInteger('id');
        $visitor = $this->factory->loadByEmail($email);
        return ['allow' => $visitor === false || $visitor->id == $id];
    }

    protected function put(Request $request)
    {
        $visitor = $this->factory->put($this->id, $request);
        $password = $request->pullPutString('password', true);
        if ($password) {
            $visitor->hashPassword($password);
        }
        $this->factory->save($visitor);
        return ['success' => true];
    }

    protected function loginAsHtml(Request $request)
    {
        $visitorId = $request->pullGetInteger('visitorId');
        $visitor = $this->factory->load($visitorId);
        VisitorFactory::setCurrent($visitor);
        if (empty($visitor->firstName)) {
            $vars['name'] = $visitor->email;
        } else {
            $vars['name'] = "$visitor->firstName $visitor->lastName";
        }
        $template = new \phpws2\Template($vars);
        $template->setModuleTemplate('conference', 'Visitor/AdminLog.html');
        return $template->get();
    }

}
