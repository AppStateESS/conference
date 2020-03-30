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

class RefundResource extends AbstractResource
{

    /**
     * @var phpws2\Variable\IntegerVar
     */
    protected $registrationId;

    /**
     * @var phpws2\Variable\FloatVar
     */
    protected $amount;

    /**
     * @var phpws2\Variable\DateTime
     */
    protected $dateRefunded;

    /**
     * @var phpws2\Variable\IntegerVar
     */
    protected $userId;

    /**
     * @var phpws2\Variable\Alphanumeric
     */
    protected $username;
    protected $guests;
    protected $meals;
    protected $complete;
    protected $table = 'conf_refund';

    public function __construct()
    {
        parent::__construct();
        $this->registrationId = new \phpws2\Variable\IntegerVar(0,
                'registrationId');
        $this->amount = new \phpws2\Variable\FloatVar(0.00, 'amount');
        $this->amount->setPrecision(7, 2);
        $this->dateRefunded = new \phpws2\Variable\DateTime(0, 'dateRefunded');
        $this->userId = new \phpws2\Variable\IntegerVar(0, 'userId');
        $this->username = new \phpws2\Variable\Alphanumeric(null, 'username');
        $this->guests = new \phpws2\Variable\SmallInteger(0, 'guests');
        $this->meals = new \phpws2\Variable\SmallInteger(0, 'meals');
        $this->complete = new \phpws2\Variable\BooleanVar(false, 'complete');
    }

    public function stamp()
    {
        $this->dateRefunded->stamp();
    }

}
