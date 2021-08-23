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

namespace conference;

use phpws2\Database;
use phpws2\Database\ForeignKey;
use phpws2\Database\Unique;

class Tables
{

    public function createLocked()
    {
        $db = Database::getDB();
        $locked = new \conference\Resource\LockedResource;
        return $locked->createTable($db);
    }

    public function createConference()
    {
        $db = Database::getDB();
        $conference = new \conference\Resource\ConferenceResource;
        return $conference->createTable($db);
    }

    public function createRefund()
    {
        $db = Database::getDB();
        $refund = new \conference\Resource\RefundResource;
        return $refund->createTable($db);
    }

    public function createAccount()
    {
        $db = Database::getDB();
        $account = new \conference\Resource\AccountResource;
        return $account->createTable($db);
    }

    public function createLog()
    {
        $db = Database::getDB();
        $log = new \conference\Resource\LogResource;
        return $log->createTable($db);
    }

    public function createStudent()
    {
        $db = Database::getDB();
        $student = new \conference\Resource\StudentResource();
        return $student->createTable($db);
    }

    public function createSupplement()
    {
        $db = Database::getDB();
        $supplement = new Resource\SupplementResource;
        $sTable = $supplement->createTable($db);
        $unique = new Database\Unique([$sTable->getDataType('visitorId'), $sTable->getDataType('registrationId')],
                'viewreg');
        $index = $sTable->addUnique($unique);
    }

    public function createSession()
    {
        $db = Database::getDB();
        $session = new \conference\Resource\SessionResource;
        $sessionTable = $session->createTable($db);

        $conferenceTable = $db->addTable('conf_conference');

        $conferenceId = $sessionTable->getDataType('conferenceId');

        $sessionForeign = new ForeignKey($conferenceId,
                $conferenceTable->getDataType('id'), ForeignKey::CASCADE);
        $sessionForeign->add();

        return $sessionTable;
    }

    public function createLocation()
    {
        $db = Database::getDB();
        $location = new \conference\Resource\LocationResource;
        return $location->createTable($db);
    }

    public function createRegistration()
    {
        $db = Database::getDB();
        $registration = new \conference\Resource\RegistrationResource;
        $regTable = $registration->createTable($db);

        $sessionTable = $db->addTable('conf_session');

        $sessionId = $regTable->getDataType('sessionId');

        $registrationForeign = new ForeignKey($sessionId,
                $sessionTable->getDataType('id'), ForeignKey::CASCADE);
        $registrationForeign->add();

        return $regTable;
    }

    public function createVisitor()
    {
        $db = Database::getDB();
        $visitor = new \conference\Resource\VisitorResource;
        return $visitor->createTable($db);
    }

    public function createPayment()
    {
        /**
         * Previously had unique on registrationId and supplementId
         * Cannot use unique because of deleted column.
         */
        $db = Database::getDB();
        $Payment = new \conference\Resource\PaymentResource;
        $PaymentTable = $Payment->createTable($db);

        $registrationTable = $db->addTable('conf_registration');
        $registrationId = $PaymentTable->getDataType('registrationId');

        $PaymentForeign = new ForeignKey($registrationId,
                $registrationTable->getDataType('id'), ForeignKey::CASCADE);
        $PaymentForeign->add();

        return $PaymentTable;
    }

    public function createGuest()
    {
        $db = Database::getDB();
        $guest = new Resource\GuestResource;
        $guestTable = $guest->createTable($db);
        return $guestTable;
    }

}
