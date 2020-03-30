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

use conference\Factory\AddOnFactory;

class AddOnView extends AbstractView
{

    public function __construct()
    {
        $this->loadFactory();
    }

    public function loadFactory()
    {
        $this->factory = new AddOnFactory;
    }

}
