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

/**
 * This class is for charges/changes on a completed registration.
 * When completed, the additions are folded into the registration and
 * the supplement is removed.
 */
class SupplementResource extends AbstractResource
{
    protected $createDate;
    protected $closeDate;
    protected $visitorId;
    protected $registrationId;
    protected $newGuests;
    protected $newMeals;
    protected $newVeggie;
    protected $totalCost;
    protected $completed;
    protected $table = 'conf_supplement';
    
    public function __construct()
    {
        parent::__construct();
        $this->createDate = new \phpws2\Variable\DateTime(0, 'createDate');
        $this->closeDate = new \phpws2\Variable\DateTime(0, 'closeDate');
        $this->visitorId = new \phpws2\Variable\IntegerVar(null, 'visitorId');
        $this->registrationId = new \phpws2\Variable\IntegerVar(null, 'registrationId');
        $this->newGuests = new \phpws2\Variable\SmallInteger(0, 'newGuests');
        $this->newMeals = new \phpws2\Variable\SmallInteger(0, 'newMeals');
        $this->newVeggie = new \phpws2\Variable\SmallInteger(0, 'newVeggie');
        $this->totalCost = new \phpws2\Variable\FloatVar(0, 'totalCost');
        $this->totalCost->setPrecision(7, 2);
        $this->completed = new \phpws2\Variable\BooleanVar(false, 'completed');
    }
    
    public function stampCreate() {
        $this->createDate->stamp();
    }
    
    public function stampClose() {
        $this->closeDate->stamp();
    }
}
