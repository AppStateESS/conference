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
use conference\Controller\SubController;
use conference\Factory\OnsiteFactory;
use conference\Factory\VisitorFactory;

class Onsite extends SubController
{

    public function __construct($role)
    {
        parent::__construct($role);
        if (!LockedFactory::isLocked()) {
            throw new NotLockedDown();
        }
    }

    public function loadFactory()
    {
        $this->factory = new OnsiteFactory;
    }

    public function loadView()
    {

    }

    protected function logoutJson()
    {
        VisitorFactory::clearCurrent();
        VisitorFactory::clearReturnUrl();
    }

}
