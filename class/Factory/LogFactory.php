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
use conference\Resource\LogResource;

class LogFactory extends BaseFactory
{

    const C_LOG_GEN = 0;
    const C_LOG_REG = 1;
    const C_LOG_VIS = 2;
    const C_LOG_SUP = 3;
    const C_LOG_PAY = 4;
    const C_LOG_REF = 5;

    public function build()
    {
        $resource = new LogResource();
        return $resource;
    }

    public static function log(string $message, $resource = null)
    {
        $thisFactory = new self;
        $mtype = self::C_LOG_GEN;
        $registrationId = $visitorId = $supplementId = $paymentId = $refundId = 0;

        if ($resource !== null) {
            switch (get_class($resource)) {
                case 'conference\\Resource\\RegistrationResource':
                    $registrationId = $resource->id;
                    $visitorId = $resource->visitorId;
                    $mtype = self::C_LOG_REG;
                    break;
                case 'conference\\Resource\\VisitorResource':
                    $visitorId = $resource->id;
                    $mtype = self::C_LOG_VIS;
                    break;
                case 'conference\\Resource\\SupplementResource':
                    $supplementId = $resource->id;
                    $registrationId = $resource->registrationId;
                    $visitorId = $resource->visitorId;
                    $mtype = self::C_LOG_SUP;
                    break;
                case 'conference\\Resource\\PaymentResource':
                    $paymentId = $resource->id;
                    $registrationId = $resource->registrationId;
                    $visitorId = $resource->visitorId;
                    $supplementId = $resource->supplementId;
                    $mtype = self::C_LOG_PAY;
                    break;
                case 'conference\\Resource\RefundResource':
                    $refundId = $resource->refundId;
                    $registrationId = $resource->registrationId;
                    $mtype = self::C_LOG_REF;
                    break;
            }
        }

        $log = $thisFactory->build();
        $log->mtype = $mtype;
        $log->stamp->stamp();
        $log->visitorId = $visitorId;
        $log->registrationId = $registrationId;
        $log->supplementId = $supplementId;
        $log->paymentId = $paymentId;
        $log->refundId = $refundId;
        $log->message = strip_tags(trim($message));
        $thisFactory->save($log);
    }

    public function listing(array $options)
    {
        $db = Database::getDB();
        $logTbl = $db->addTable('conf_log');
        if (!empty($options['visitorId'])) {
            $logTbl->addFieldConditional('visitorId', $options['visitorId']);
        }

        if (!empty($options['includeSession'])) {
            $registrationTbl = $db->addTable('conf_registration', null, false);
            $cond1 = new Database\Conditional($db,
                    $logTbl->getField('registrationId'),
                    $registrationTbl->getField('id'), '=');
            $db->joinResources($logTbl, $registrationTbl, $cond1, 'left');

            $sessionTbl = $db->addTable('conf_session');
            $sessionTbl->addField('title', 'sessionTitle');
            $sessionTbl->addField('eventDate', 'sessionDate');
            $cond2 = new Database\Conditional($db,
                    $registrationTbl->getField('sessionId'),
                    $sessionTbl->getField('id'), '=');
            $db->joinResources($registrationTbl, $sessionTbl, $cond2, 'left');
        }
        $logTbl->addOrderBy('stamp', 'desc');
        return $db->select();
    }

}
