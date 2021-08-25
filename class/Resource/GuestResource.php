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

    /**
     * Id of the visitor associated with guest
     * @var \phpws2\Variable\IntegerVar
     */
    protected $visitorId;
    protected $phone;
    protected $relationship;
    protected $employer;
    protected $position;
    protected $alum;
    protected $gradYear;
    protected $hometown;
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
        $this->visitorId = new \phpws2\Variable\IntegerVar(0, 'visitorId');
        $this->relationship = new \phpws2\Variable\TextOnly(null, 'relationship');
        $this->relationship->allowNull(true);
        $this->employer = new \phpws2\Variable\TextOnly(null, 'employer');
        $this->employer->allowNull(true);
        $this->position = new \phpws2\Variable\TextOnly(null, 'position');
        $this->position->allowNull(true);
        $this->alum = new \phpws2\Variable\BooleanVar(false, 'alum');
        $this->gradYear = new \phpws2\Variable\NumberString('0', 'gradYear');
        $this->gradYear->allowNull(true);
        $this->phone = new \phpws2\Variable\PhoneNumber(null, 'phone');
        $this->phone->allowNull(true);
        $this->hometown = new \phpws2\Variable\TextOnly(null, 'hometown');
        $this->hometown->allowNull(true);
    }

}
