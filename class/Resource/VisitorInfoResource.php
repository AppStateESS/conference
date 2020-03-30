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

class VisitorInfoResource extends AbstractResource
{
    protected $visitorId;
    protected $questionId;
    protected $registrationId;
    protected $conferenceId;
    protected $answer;
    
    protected $table = 'conf_visitorinfo';
    
    public function __construct()
    {
        parent::__construct();
        $this->visitorId = new \phpws2\Variable\IntegerVar(0, 'visitorId');
        $this->questionId = new \phpws2\Variable\IntegerVar(0, 'questionId');
        $this->registrationId = new \phpws2\Variable\IntegerVar(0, 'registrationId');
        $this->conferenceId = new \phpws2\Variable\IntegerVar(0, 'conferenceId');
        $this->answer = new \phpws2\Variable\TextOnly(null, 'answer');
        $this->answer->allowNull(true);
    }
}
