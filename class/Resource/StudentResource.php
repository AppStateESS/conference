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

use Canopy\Request;

class StudentResource extends AbstractResource
{

    protected $bannerId;
    protected $username;
    protected $firstName;
    protected $lastName;
    protected $email;
    protected $startDate;
    protected $hidden;
    protected $discountAmount;
    protected $discountLabel;
    protected $lockDate;
    protected $table = 'conf_student';

    public function __construct()
    {
        parent::__construct();
        $this->bannerId = new \phpws2\Variable\IntegerVar(0, 'bannerId');
        $this->username = new \phpws2\Variable\TextOnly(null, 'username', 30);
        $this->firstName = new \phpws2\Variable\TextOnly(null, 'firstName', 50);
        $this->firstName->allowEmpty(false);
        $this->lastName = new \phpws2\Variable\TextOnly(null, 'lastName', 50);
        $this->lastName->allowEmpty(false);
        $this->email = new \phpws2\Variable\Email(null, 'email', 50);
        $this->startDate = new \phpws2\Variable\DateVar(null, 'startDate');
        $this->hidden = new \phpws2\Variable\BooleanVar(false, 'hidden');
        $this->discountAmount = new \phpws2\Variable\FloatVar(0.00,
                'discountAmount');
        $this->discountAmount->setPrecision(7, 2);
        $this->discountLabel = new \phpws2\Variable\TextOnly('', 'discountLabel');
        $this->discountLabel->allowNull(true);
        $this->lockDate = new \phpws2\Variable\BooleanVar(false, 'lockDate');
    }

    public function getStringVars($return_null = false, $hide = null)
    {
        $vars = parent::getStringVars($return_null, $hide);
        $vars['startDateFormat'] = $this->getBannerStartDate();
        return $vars;
    }

    public function getBannerStartDate()
    {
        return $this->startDate->get('%Y-%m-%d');
    }

    public function getFormattedStartDate()
    {
        return $this->startDate->get('%B %e, %Y');
    }

}
