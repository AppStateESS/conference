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

class GuestResource extends AbstractResource
{

    protected $email;
    protected $firstName;
    protected $lastName;
    protected $registrationId;
    protected $supplementId;
    protected $table = 'conf_guest';

    public function __construct()
    {
        parent::__construct();
        $this->email = new \phpws2\Variable\Email(null, 'email');
        $this->email->allowEmpty(false);
        $this->firstName = new \phpws2\Variable\TextOnly(null, 'firstName');
        $this->firstName->setLimit(50);
        $this->firstName->allowEmpty(false);
        $this->lastName = new \phpws2\Variable\TextOnly(null, 'lastName');
        $this->lastName->setLimit(50);
        $this->lastName->allowEmpty(false);
        $this->registrationId = new \phpws2\Variable\IntegerVar(0,
                'registrationId');
        $this->supplementId = new \phpws2\Variable\IntegerVar(0, 'supplementId');
    }

}
