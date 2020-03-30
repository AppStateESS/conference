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

namespace conference\Resource;

class SettingsResource
{

    protected $sessionMatchScript;

    public function __construct()
    {
        $this->sessionMatchScript = new \phpws2\Variable\FileVar;
    }

}
