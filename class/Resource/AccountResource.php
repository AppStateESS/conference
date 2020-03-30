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

class AccountResource extends AbstractResource
{
    protected $title;

    /**
     * URL of payment service site
     * @var phpws2\Variable\Url
     */
    protected $url;

    /**
     * The service service's account number for your site.
     * @var type 
     */
    protected $accountId;
    
    protected $validateSendActive;
    protected $validateSend;
    protected $validateResponseActive;
    protected $validateResponse;
    protected $restrictIp;
    
    
    protected $table = 'conf_account';

    public function __construct()
    {
        parent::__construct();
        $this->title = new \phpws2\Variable\TextOnly(null, 'title');
        $this->title->setLimit(100);
        $this->url = new \phpws2\Variable\StringVar(null, 'url');
        $this->accountId = new \phpws2\Variable\TextOnly(null, 'accountId');
        $this->accountId->setLimit(150);
        $this->validateSend = new \phpws2\Variable\TextOnly(null, 'validateSend');
        $this->validateSend->setLimit(150);
        $this->validateSendActive = new \phpws2\Variable\BooleanVar(true, 'validateSendActive');
        $this->validateResponse = new \phpws2\Variable\TextOnly(null, 'validateResponse');
        $this->validateResponse->setLimit(150);
        $this->validateResponseActive = new \phpws2\Variable\BooleanVar(true, 'validateResponseActive');
        $this->restrictIp = new \phpws2\Variable\TextOnly(null, 'restrictIp');
    }
    
}
