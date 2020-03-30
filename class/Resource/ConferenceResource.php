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

class ConferenceResource extends AbstractResource
{

    protected $title;
    protected $description;
    protected $locationId;
    protected $active;
    protected $location;
    protected $sessionCount;
    protected $deleted;
    protected $accountId;
    protected $table = 'conf_conference';

    public function __construct()
    {
        parent::__construct();
        $this->title = new \phpws2\Variable\TextOnly(null, 'title');
        $this->description = new \phpws2\Variable\StringVar(null, 'description');
        $this->locationId = new \phpws2\Variable\IntegerVar(null, 'locationId');
        $this->locationId->allowNull(true);
        $this->location = new \phpws2\Variable\TextOnly;
        $this->sessionCount = new \phpws2\Variable\SmallInteger(0);
        $this->deleted = new \phpws2\Variable\BooleanVar(false, 'deleted');
        $this->location->setIsTableColumn(false);
        $this->sessionCount->setIsTableColumn(false);
        $this->active = $this->active = new \phpws2\Variable\BooleanVar(true,
                'active');
        $this->accountId = new \phpws2\Variable\IntegerVar(0, 'accountId');
        $this->doNotSave(array('location', 'sessionCount'));
    }

    public function setDescription($description)
    {
        $this->description->set($this->strip($description));
    }

}
