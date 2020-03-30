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

class LogResource extends AbstractResource
{

    /**
     * Time stamp of when log recorded
     * @var phpws2\Variable\DateTime
     */
    public $stamp;

    /**
     * Id of visitor resource
     * @var phpws2\Variable\IntegerVar
     */
    protected $visitorId;

    /**
     * Id of registration resource
     * @var phpws2\Variable\IntegerVar
     */
    protected $registrationId;

    /**
     * Id of supplement resource
     * @var phpws2\Variable\IntegerVar
     */
    protected $supplementId;

    /**
     * Id of payment resource
     * @var phpws2\Variable\IntegerVar
     */
    protected $paymentId;

    /**
     * @var phpws2\Variable\IntegerVar
     */
    protected $refundId;

    /**
     * Type of message defined in LogFactory as a class constant.
     * e.g. LogFactory::C_LOG_GEN
     * C_LOG_GEN - general message
     * C_LOG_REG - registration created or updated
     * C_LOG_VIS - visitor changed account or performed action
     * C_LOG_SUP - a supplement was created or updated
     * C_LOG_PAY - a payment was made or altered
     * @var phpws2\Variable\SmallInteger
     */
    protected $mtype;

    /**
     * Text of log message
     * @var phpws2\Variable\TextOnly
     */
    protected $message;
    protected $table = 'conf_log';

    public function __construct()
    {
        parent::__construct();
        $this->stamp = new \phpws2\Variable\DateTime(0, 'stamp');
        $this->visitorId = new \phpws2\Variable\IntegerVar(0, 'visitorId');
        $this->registrationId = new \phpws2\Variable\IntegerVar(0,
                'registrationId');
        $this->supplementId = new \phpws2\Variable\IntegerVar(0, 'supplementId');
        $this->paymentId = new \phpws2\Variable\IntegerVar(0, 'paymentId');
        $this->refundId = new \phpws2\Variable\IntegerVar(0, 'refundId');
        $this->mtype = new \phpws2\Variable\SmallInteger(0, 'mtype');
        $this->message = new \phpws2\Variable\TextOnly(null, 'message', '255');
    }

}
