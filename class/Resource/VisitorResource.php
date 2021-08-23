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

class VisitorResource extends AbstractResource
{

    protected $email;
    protected $password;

    /**
     * This is reset twice. Once when activating the account. This value is 12 hours.
     * Again when changing the password. The value will then only be 2 hours.
     * If the deadline has passed, activation or password changing will not be allowed.
     * @var integer
     */
    protected $activateDeadline;
    protected $activated;
    protected $firstName;
    protected $lastName;
    protected $address1;
    protected $address2;
    protected $city;
    protected $state;
    protected $zip;
    protected $phone;
    protected $altPhone;
    protected $relationship;
    protected $employer;
    protected $position;
    protected $alum;
    protected $gradYear;
    protected $hometown;

    /**
     * Hash used to authorize account
     * @var phpws2\Variable\HashVar
     */
    protected $hash;
    protected $table = 'conf_visitor';

    public function __construct()
    {
        parent::__construct();
        $this->email = new \phpws2\Variable\Email(null, 'email');
        $this->email->allowEmpty(false);
        $this->password = new \phpws2\Variable\StringVar(null, 'password');
        $this->password->setLimit(255);
        $this->password->allowEmpty(false);
        $this->activateDeadline = new \phpws2\Variable\IntegerVar(0,
                'activateDeadline');
        $this->activated = new \phpws2\Variable\BooleanVar(false, 'activated');
        $this->hash = new \phpws2\Variable\HashVar(null, 'hash');
        $this->hash->setLimit(40);
        $this->firstName = new \phpws2\Variable\TextOnly(null, 'firstName');
        $this->firstName->setLimit(50);
        $this->lastName = new \phpws2\Variable\TextOnly(null, 'lastName');
        $this->lastName->setLimit(50);
        $this->address1 = new \phpws2\Variable\TextOnly(null, 'address1');
        $this->address1->allowNull(true);
        $this->address1->setLimit(255);
        $this->address2 = new \phpws2\Variable\TextOnly(null, 'address2');
        $this->address2->allowNull(true);
        $this->address2->setLimit(255);
        $this->city = new \phpws2\Variable\TextOnly(null, 'city');
        $this->city->setLimit(100);
        $this->city->allowNull(true);
        $this->state = new \phpws2\Variable\TextOnly('', 'state');
        $this->state->allowNull(true);
        $this->state->setLimit(2);
        $this->zip = new \phpws2\Variable\TextOnly(null, 'zip');
        $this->zip->allowNull(true);
        $this->zip->setLimit(20);
        $this->phone = new \phpws2\Variable\PhoneNumber(null, 'phone');
        $this->phone->allowNull(true);
        $this->altPhone = new \phpws2\Variable\PhoneNumber(null, 'altPhone');
        $this->altPhone->allowNull(true);
        $this->relationship = new \phpws2\Variable\TextOnly(null, 'relationship');
        $this->relationship->allowNull(true);
        $this->employer = new \phpws2\Variable\TextOnly(null, 'employer');
        $this->employer->allowNull(true);
        $this->position = new \phpws2\Variable\TextOnly(null, 'position');
        $this->position->allowNull(true);
        $this->alum = new \phpws2\Variable\BooleanVar(false, 'alum');
        $this->gradYear = new \phpws2\Variable\NumberString(null, 'gradYear');
        $this->gradYear->allowNull(true);
        $this->hometown = new \phpws2\Variable\TextOnly(null, 'hometown');
        $this->hometown->allowNull(true);
        $this->defaultState();
    }

    public function defaultState()
    {
        if (empty($this->state->get())) {
            $this->state->set(CONFERENCE_DEFAULTS['state']);
        }
    }

    public function stamp(int $hours = 2)
    {
        if (!$hours) {
            $hours = 2;
        }
        $this->activateDeadline->set(time() + ($hours * 3600));
        $this->resetHash();
    }

    public function formatActivateDeadline()
    {
        return strftime('%c', $this->activateDeadline->get());
    }

    public function hashPassword($password)
    {
        if (empty($password)) {
            throw new \Exception('Password may not be empty');
        }
        $this->password = password_hash($password, PASSWORD_BCRYPT);
    }

    public function getInfo()
    {
        return $this->getStringVars(false,
                        ['activateDeadline', 'activated', 'hash', 'password']);
    }

    public function createRandomPassword()
    {
        $length = 10;
        $chars = "ABCDEFGHJKLMNPQRSTUVWXYZ0123456789abcdefghijkmnpqrstuvwxyz23456789";
        $size = strlen($chars);
        $password = '';
        for ($i = 0; $i < $length; $i++) {
            $password .= $chars[rand(0, $size - 1)];
        }
        return $password;
    }

    public function setEmail(string $email)
    {
        $this->email->set(strtolower($email));
    }

    /**
     * This may look redundant but emails were not saved with forced lowercase.
     * @return string
     */
    public function getEmail()
    {
        return strtolower($this->email->get());
    }

    public function resetHash()
    {
        $this->hash->sha1Random();
    }

}
