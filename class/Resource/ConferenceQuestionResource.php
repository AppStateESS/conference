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

class ConferenceQuestionResource extends AbstractResource
{
    protected $conferenceId;
    protected $question;
    protected $type;
    protected $required;
    protected $sort;
    protected $deleted;
    
    protected $table = 'conf_confquestion';

    public function __construct() {
        parent::__construct();
        $this->conferenceId = new \phpws2\Variable\IntegerVar(0, 'conferenceId');
        $this->question = new \phpws2\Variable\TextOnly(null, 'question');
        $this->question->setLimit(255);
        $this->type = new \phpws2\Variable\Alphanumeric('text', 'type');
        $this->type->setLimit(20);
        $this->required = new \phpws2\Variable\BooleanVar(false, 'required');
        $this->deleted = new \phpws2\Variable\BooleanVar(false, 'deleted');
        $this->sort = new \phpws2\Variable\SmallInteger(1, 'sort');
    }
}