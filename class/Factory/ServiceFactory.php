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

namespace conference\Factory;

use phpws2\Database;
use Canopy\Request;
use conference\Resource\AccountResource;
use conference\Resource\RegistrationResource;
use conference\Resource\PaymentResource;
use conference\Resource\VisitorResource;
use conference\Exception\BadService;

if (defined('CONFERENCE_SERVICE') && !empty(CONFERENCE_SERVICE)) {
    try {
        ServiceFactory::loadService();
    } catch (BadService $ex) {
        exit('Service set not found.');
    }
}

class ServiceFactory
{

    const path = PHPWS_SOURCE_DIR . 'mod/conference/service/';

    /**
     *
     * @param string $fileName
     * @return array
     * @throws \Exception
     */
    public static function getParameterList()
    {
        $serviceName = self::getServiceDefine();
        if (empty($serviceName)) {
            throw new BadService;
        }
        $className = self::getClassName();
        return $className::getParameterList();
    }

    public static function getValidationKey(AccountResource $account,
            PaymentResource $payment)
    {
        return self::getClassName()::getValidationKey($account, $payment);
    }

    public static function getClassName()
    {
        $serviceName = self::getServiceDefine();
        if (empty($serviceName)) {
            throw new BadService;
        }
        return "\\conference\\service\\{$serviceName}";
    }

    public static function getServiceDefine()
    {
        return defined('CONFERENCE_SERVICE') ? CONFERENCE_SERVICE : null;
    }

    public static function loadService()
    {
        $directory = self::serviceDirectory(CONFERENCE_SERVICE);
        if (!is_file($directory)) {
            throw new BadService();
        }
        require_once $directory;
    }

    public static function serviceDirectory($serviceName)
    {
        if (preg_match('@[/(\\)]@', $serviceName)) {
            throw \Exception('Bad service name');
        }
        return PHPWS_SOURCE_DIR . <<<EOF
mod/conference/service/$serviceName/$serviceName.php
EOF;
    }

    private static function getSendDetails(string $detail,
            AccountResource $account, VisitorResource $visitor,
            PaymentResource $payment)
    {
        switch ($detail) {
            case 'name':
                return $visitor->firstName . ' ' . $visitor->lastName;

            case 'email':
            case 'address1':
            case 'address2':
            case 'city':
            case 'state':
            case 'zip':
                return $visitor->$detail;

            case 'accountId':
                return $account->$detail;

            case 'validateSend':
                if ($account->validateSendActive) {
                    return self::getValidationKey($account, $payment);
                } else {
                    return null;
                }

            case 'transactionId':
                return $payment->transactionId;
        }
    }

    public static function getPaymentInputs(AccountResource $account,
            PaymentResource $payment, VisitorResource $visitor)
    {
        $serviceInfo = self::getParameterList();
        $serviceVars = get_object_vars($serviceInfo->send);
        foreach ($serviceVars as $varName => $label) {
            // if the value is not set, we don't try and send to service
            if (empty($label)) {
                continue;
            } elseif ($varName === 'amount') {
                $detail = $payment->amount;
            } else {
                $detail = htmlentities(self::getSendDetails($varName, $account,
                                $visitor, $payment));
            }
            if (!empty($detail)) {
                $inputs[] = <<<EOF
<input type="hidden" name="$label" value="$detail" />
EOF;
            }
        }
        if (!empty($serviceVars['successUrl'])) {
            $successLabel = $serviceVars['successUrl'];
            $successUrl = self::successUrl($payment);
            $inputs[] = <<<EOF
<input type="hidden" name="$successLabel" value="$successUrl" />
EOF;
        }
        if (!empty($serviceVars['cancelUrl'])) {
            $cancelLabel = $serviceVars['cancelUrl'];
            $cancelUrl = self::cancelUrl($payment);
            $inputs[] = <<<EOF
<input type="hidden" name="$cancelLabel" value="$cancelUrl" />
EOF;
        }
        return implode("\n", $inputs);
    }

    public static function getVarName(string $direction, string $name): string
    {
        static $parameters;

        if (empty($parameters)) {
            $parameters = self::getParameterList();
        }
        if ($direction !== 'send' || $direction !== 'response') {
            throw new \Exception('Direction must be send or response');
        }
        if (!isset($parameters->$direction->$name)) {
            throw new \Exception('Unknown service variable.');
        }

        return $parameters->$direction->$name;
    }

    public static function successUrl(PaymentResource $payment)
    {
        $root = \Canopy\Server::getSiteUrl(true) . 'conference/Visitor/Payment/';
        return $root . $payment->id . '/complete';
    }

    public static function cancelUrl(PaymentResource $payment)
    {
        $root = \Canopy\Server::getSiteUrl(true) . 'conference/User/Payment/';
        return $root . $payment->id . '/cancel';
    }

    /**
     * Calls the services default success post condition screen
     */
    public static function successPost()
    {
        $className = self::getClassName();
        return $className::successPost();
    }

    /**
     * Calls the services default failure post condition screen
     */
    public static function failurePost()
    {
        $className = self::getClassName();
        return $className::failurePost();
    }

}
