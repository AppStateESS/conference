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
use conference\Factory\LogFactory;
use conference\View\LogView;

class Log extends SubController
{

    protected function loadFactory()
    {
        $this->factory = new LogFactory;
    }

    protected function loadView()
    {
        $this->view = new LogView;
    }

    protected function visitorHtml(Request $request)
    {
        return $this->view->visitor($request->pullGetInteger('vid'));
    }

}
