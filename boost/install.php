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
use phpws2\Database;
use phpws2\Database\ForeignKey;

require_once PHPWS_SOURCE_DIR . 'mod/conference/boost/Tables.php';

function conference_install(&$content)
{
    $db = Database::getDB();

    try {
        $tables = new conference\Tables;
        $locked = $tables->createLocked();
        $account = $tables->createAccount();
        $location = $tables->createLocation();
        $conference = $tables->createConference();
        $session = $tables->createSession();
        $registration = $tables->createRegistration();
        $guest = $tables->createGuest();
        $payment = $tables->createPayment();
        $student = $tables->createStudent();
        $visitor = $tables->createVisitor();
        $supplement = $tables->createSupplement();
        $log = $tables->createLog();
        $refund = $tables->createRefund();
    } catch (\Exception $e) {
        \phpws2\Error::log($e);

        if (isset($refund)) {
            $refund->drop(true);
        }

        if (isset($visitor)) {
            $visitor->drop(true);
        }
        if (isset($payment)) {
            $payment->drop(true);
        }
        if (isset($student)) {
            $student->drop(true);
        }
        if (isset($guest)) {
            $guest->drop(true);
        }
        if (isset($registration)) {
            $registration->drop(true);
        }
        if (isset($session)) {
            $session->drop(true);
        }
        if (isset($conference)) {
            $conference->drop(true);
        }
        if (isset($location)) {
            $location->drop(true);
        }
        if (isset($account)) {
            $account->drop(true);
        }
        if (isset($locked)) {
            $locked->drop(true);
        }
        if (isset($addOns)) {
            $addOns->drop(true);
        }
        if (isset($supplement)) {
            $supplement->drop(true);
        }
        if (isset($log)) {
            $log->drop(true);
        }
        throw $e;
    }

    $content[] = 'Tables created';
    return true;
}
