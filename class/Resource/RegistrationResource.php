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

class RegistrationResource extends AbstractResource
{

    protected $createDate;
    protected $updateDate;
    protected $cancelledDate;
    protected $cancelledBy;
    protected $cancelled;
    protected $visitorId;
    protected $sessionId;
    protected $conferenceId;
    protected $guestCount;
    protected $mealTickets;
    protected $veggieMeals;
    protected $totalCost;
    protected $amountPaid;
    protected $signedIn;
    protected $studentId;
    protected $discount;

    /**
     * Amount refunded to registration
     * @var \phpws2\Variable\FloatVar
     */
    protected $refundAmount;

    /**
     * Indicates the registration has completed its initial charge.
     * @var phpws2\Variable\BooleanVar
     */
    protected $completed;
    protected $arrived;
    protected $arrivalTime;
    protected $table = 'conf_registration';

    public function __construct()
    {
        parent::__construct();
        $this->createDate = new \phpws2\Variable\DateTime(null, 'createDate');
        $this->updateDate = new \phpws2\Variable\DateTime(null, 'updateDate');
        $this->cancelledDate = new \phpws2\Variable\DateTime(
                0, 'cancelledDate'
        );
        $this->cancelled = new \phpws2\Variable\BooleanVar(false, 'cancelled');
        $this->cancelledDate->setPrintEmpty(false);
        $this->cancelledBy = new \phpws2\Variable\TextOnly(null, 'cancelledBy');
        $this->visitorId = new \phpws2\Variable\IntegerVar(null, 'visitorId');
        $this->sessionId = new \phpws2\Variable\IntegerVar(null, 'sessionId');
        $this->conferenceId = new \phpws2\Variable\IntegerVar(null,
                'conferenceId');
        $this->guestCount = new \phpws2\Variable\IntegerVar(0, 'guestCount');
        $this->mealTickets = new \phpws2\Variable\SmallInteger(0, 'mealTickets');
        $this->veggieMeals = new \phpws2\Variable\SmallInteger(0, 'veggieMeals');
        $this->totalCost = new \phpws2\Variable\FloatVar(0, 'totalCost');
        $this->totalCost->setPrecision(7, 2);
        $this->amountPaid = new \phpws2\Variable\FloatVar(0, 'amountPaid');
        $this->amountPaid->setPrecision(7, 2);
        $this->studentId = new \phpws2\Variable\IntegerVar(null, 'studentId');
        $this->completed = new \phpws2\Variable\BooleanVar(null, 'completed');
        $this->signedIn = new \phpws2\Variable\BooleanVar(false, 'signedIn');
        $this->discount = new \phpws2\Variable\FloatVar(0, 'discount');
        $this->discount->setPrecision(7, 2);
        $this->refundAmount = new \phpws2\Variable\FloatVar(0, 'refundAmount');
        $this->refundAmount->setPrecision(7, 2);
        $this->arrived = new \phpws2\Variable\BooleanVar(false, 'arrived');
        $this->arrivalTime = new \phpws2\Variable\DateTime(0, 'arrivalTime');
    }

    public function stamp()
    {
        if ($this->id->get() == 0) {
            $this->createDate->stamp();
        }

        $this->updateDate->stamp();
    }

    public function stampArrived()
    {
        $this->arrived = true;
        $this->arrivalTime->stamp();
    }

    public function removeArrived()
    {
        $this->arrived = false;
        $this->arrivalTime = 0;
    }

    public function stampCancelledDate()
    {
        $this->cancelledDate = time();
    }

    public function amountDue()
    {
        return $this->totalCost->get() - $this->amountPaid->get();
    }

    public function getStringVars($return_null = false, $hide = null)
    {
        $vars = parent::getStringVars($return_null, $hide);
        $vars['totalCost'] = number_format($vars['totalCost'], 2, '.', '');
        $vars['amountPaid'] = number_format($vars['amountPaid'], 2, '.', '');
        $vars['amountDue'] = number_format($this->amountDue(), 2, '.', '');
        return $vars;
    }

}
