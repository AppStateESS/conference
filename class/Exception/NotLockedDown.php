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

namespace conference\Exception;

class NotLockedDown extends \Exception
{

    public function __construct()
    {
        parent::__construct('Computer must be in lock down to perform onsite functionality.');
    }

}
