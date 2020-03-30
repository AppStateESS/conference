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
use conference\Factory\SupplementFactory;
use conference\View\SupplementView;

class Supplement extends SubController
{

    /**
     * @var \conference\Factory\SupplementFactory
     */
    protected $factory;

    protected function loadView()
    {
        $this->view = new SupplementView();
    }

    protected function loadFactory()
    {
        $this->factory = new SupplementFactory;
    }

    protected function addHtml(Request $request)
    {
        $registrationId = $request->pullGetInteger('registrationId');
        return $this->view->addForm($registrationId);
    }

    protected function addPost(Request $request)
    {
        $this->factory->adminPost($request);
        $registrationId = $request->pullPostInteger('registrationId');
        \Canopy\Server::forward('conference/Admin/Payment/?registrationId=' . $registrationId);
    }

    protected function delete(Request $request)
    {
        $this->factory->incompleteDelete($this->id);
        return ['success' => 1];
    }

}
