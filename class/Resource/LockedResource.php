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

class LockedResource extends AbstractResource
{

    protected $ip;
    protected $sessionId;
    protected $table = 'conf_locked';

    public function __construct()
    {
        parent::__construct();
        $this->ip = new \phpws2\Variable\Ip(null, 'ip');
        $this->sessionId = new \phpws2\Variable\IntegerVar(0, 'sessionId');
    }

}
