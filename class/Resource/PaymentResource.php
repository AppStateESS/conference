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

class PaymentResource extends AbstractResource
{

    /**
     * Id of the conference
     * @var \phpws2\Variable\IntegerVar
     */
    protected $conferenceId;

    /**
     * Id of the session
     * @var \phpws2\Variable\IntegerVar
     */
    protected $sessionId;

    /**
     * Id of the registration the payment is applied to
     * @var \phpws2\Variable\IntegerVar
     */
    protected $registrationId;

    /**
     * Id of the visitor who made payment
     * @var \phpws2\Variable\IntegerVar
     */
    protected $visitorId;

    /**
     * Id of the service used for payment
     * @var \phpws2\Variable\IntegerVar
     */
    protected $accountId;

    /**
     * Id of the registration supplement if exists
     * @var \phpws2\Variable\IntegerVar
     */
    protected $supplementId;

    /**
     * Dollar amount
     * @var integer
     */
    protected $amount;

    /**
     * Name returned from payment. Typically the visitor name.
     * @var \phpws2\Variable\TextOnly
     */
    protected $payerName;

    /**
     * cc (credit card), check, or cash
     * @var phpws2\Variable\Alphanumeric
     */
    protected $paymentType;

    /**
     * Credit card type
     * @var phpws2\Variable\TextOnly
     */
    protected $cardType;

    /**
     * @var phpws2\Variable\BooleanVar
     */
    protected $completed;

    /**
     * Identifying text from payment service or source
     * @var phpws2\Variable\TextOnly
     */
    protected $receipt;
    protected $transactionId;
    protected $timestamp;
    protected $checkNumber;
    protected $deleted;
    protected $table = 'conf_payment';

    public function __construct()
    {
        parent::__construct();
        $this->conferenceId = new \phpws2\Variable\IntegerVar(0, 'conferenceId');
        $this->sessionId = new \phpws2\Variable\IntegerVar(0, 'sessionId');
        $this->registrationId = new \phpws2\Variable\IntegerVar(0,
                'registrationId');
        $this->supplementId = new \phpws2\Variable\IntegerVar(0, 'supplementId');
        $this->visitorId = new \phpws2\Variable\IntegerVar(0, 'visitorId');
        $this->accountId = new \phpws2\Variable\IntegerVar(0, 'accountId');
        $this->amount = new \phpws2\Variable\DecimalVar(0.00, 'amount');
        $this->amount->setPrecision(7, 2);
        $this->payerName = new \phpws2\Variable\TextOnly(null, 'payerName', 100);
        $this->paymentType = new \phpws2\Variable\TextOnly('unpaid',
                'paymentType', 20);
        $this->completed = new \phpws2\Variable\BooleanVar(false, 'completed');
        $this->receipt = new \phpws2\Variable\TextOnly(null, 'receipt', 100);
        $this->transactionId = new \phpws2\Variable\TextOnly(null,
                'transactionId', 32);
        $this->cardType = new \phpws2\Variable\TextOnly(null, 'cardType', 20);
        $this->cardType->allowNull(true);
        $this->checkNumber = new \phpws2\Variable\TextOnly(null, 'checkNumber',
                30);
        $this->checkNumber->allowNull(true);
        $this->timestamp = new \phpws2\Variable\DateTime(0, 'timestamp');
        $this->deleted = new \phpws2\Variable\BooleanVar(0, 'deleted');
    }

    public function stamp()
    {
        $this->timestamp->stamp();
    }

    public function amountToString()
    {
        return number_format($this->amount->get(), 2);
    }

}
