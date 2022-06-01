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

namespace conference\View;

use conference\Resource\SessionResource;
use conference\Resource\ConferenceResource;

class ReportView extends AbstractView
{

    public function downloadCSV($content, $downloadName)
    {
        $filename = '/tmp/registrations' . time() . '.csv';
        file_put_contents($filename, $content);
        header("Content-Disposition: attachment; filename=\"$downloadName\"");
        header('Pragma: public');
        header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
        readfile($filename);
        exit();
    }

    private function getSessionEmails(SessionResource $session)
    {
        $db = \phpws2\Database::getDB();
        $visitorTable = $db->addTable('conf_visitor');
        $guestTable = $db->addTable('conf_guest');
        $regTable = $db->addTable('conf_registration', null, false);

        $regTable->addFieldConditional('sessionId', $session->id);
        $regId = $regTable->addField('id');
        $visitorTable->addField('email', 'vemail');
        $visitorTable->addField('firstName', 'vfn');
        $visitorTable->addField('lastName', 'vln');
        $visitorTable->addField('alum', 'valum');
        $visitorTable->addField('gradYear', 'vgrad');
        $visitorTable->addField('hometown', 'vhometown');
        $visitorTable->addField('relationship', 'vrelation');
        $guestTable->addField('alum', 'galum');
        $guestTable->addField('gradYear', 'ggrad');
        $guestTable->addField('hometown', 'ghometown');
        $guestTable->addField('relationship', 'grelation');
        $guestTable->addField('email', 'gemail');
        $guestTable->addField('firstName', 'gfn');
        $guestTable->addField('lastName', 'gln');
        $cond1 = new \phpws2\Database\Conditional($db, $regTable->getField('visitorId'),
            $visitorTable->getField('id'), '=');
        $cond2 = new \phpws2\Database\Conditional($db, $regId,
            $guestTable->getField('registrationId'), '=');
        $db->joinResources($regTable, $visitorTable, $cond1, 'left');
        $db->joinResources($regTable, $guestTable, $cond2, 'left');
        $regTable->addFieldConditional('completed', 1);
        $regTable->addFieldConditional('cancelled', 0);
        return $db->select();
    }

    public function allEmails(ConferenceResource $conference)
    {
        $db = \phpws2\Database::getDB();
        $visitorTable = $db->addTable('conf_visitor');
        $guestTable = $db->addTable('conf_guest');
        $regTable = $db->addTable('conf_registration', null, false);

        $regTable->addFieldConditional('conferenceId', $conference->id);
        $regId = $regTable->addField('id');
        $visitorTable->addField('email', 'vemail');
        $visitorTable->addField('firstName', 'vfn');
        $visitorTable->addField('lastName', 'vln');
        $guestTable->addField('email', 'gemail');
        $guestTable->addField('firstName', 'gfn');
        $guestTable->addField('lastName', 'gln');
        $cond1 = new \phpws2\Database\Conditional($db, $regTable->getField('visitorId'),
            $visitorTable->getField('id'), '=');
        $cond2 = new \phpws2\Database\Conditional($db, $regId,
            $guestTable->getField('registrationId'), '=');
        $db->joinResources($regTable, $visitorTable, $cond1, 'left');
        $db->joinResources($regTable, $guestTable, $cond2, 'left');
        $regTable->addFieldConditional('completed', 1);
        $regTable->addFieldConditional('cancelled', 0);
        $result = $db->select();
        return $this->siftRegistrationEmail($result);
    }

    private function siftRegistrationEmail($result)
    {
        if (empty($result)) {
            return 'No registrations found for session #' . $session->id;
        }

        $csvRow = array();
        $csvRow[0] = '"firstName","lastName","email","relationship", "isAlum","gradYear","hometown","is guest"';
        $allVisitors = array();
        $visitors = array();
        $guests = array();
        // Need to make this list first in case a guest comes up in the
        // list before a visitor.
        foreach ($result as $row) {
            $vemail = strtolower($row['vemail']);
            if (!in_array($vemail, $allVisitors)) {
                $allVisitors[] = strtolower($row['vemail']);
            }
        }

        foreach ($result as $row) {
            $row = str_replace('"', '', $row);
            $vemail = strtolower($row['vemail']);
            $gemail = strtolower($row['gemail']);
            if (!in_array($vemail, $visitors)) {
                $sub = [];
                $sub[] = $row['vfn'];
                $sub[] = $row['vln'];
                $sub[] = $vemail;
                $sub[] = $row['vrelation'];
                $sub[] = $row['valum'] ? 'Yes' : 'No';
                $sub[] = $row['vgrad'] === '0' ? 'n/a' : $row['vgrad'];
                $sub[] = $row['vhometown'] ? $row['vhometown'] : 'n/a';
                $sub[] = 'no';
                $csvRow[] = '"' . implode('","', $sub) . '"';
            }
            $visitors[] = $vemail;

            if (!empty($gemail)) {
                $sub = [];
                $sub[] = $row['gfn'];
                $sub[] = $row['gln'];
                if (in_array($gemail, $allVisitors) || in_array($gemail, $guests)) {
                    $sub[] = '[repeat]';
                } else {
                    $sub[] = $gemail;
                }
                $sub[] = $row['grelation'];
                $sub[] = $row['galum'] ? 'Yes' : 'No';
                $sub[] = $row['ggrad'] === '0' ? "n/a" : $row['ggrad'];
                $sub[] = $row['ghometown'] ? $row['ghometown'] : 'n/a';
                $guests[] = $gemail;
                $sub[] = 'yes';
                $csvRow[] = '"' . implode('","', $sub) . '"';
            }
        }

        $content = implode("\n", $csvRow);
        return $content;
    }

    public function emails(SessionResource $session)
    {
        $result = $this->getSessionEmails($session);
        return $this->siftRegistrationEmail($result);
    }

    public function refunds(SessionResource $session)
    {
        $db = \phpws2\Database::getDB();
        $refundTable = $db->addTable('conf_refund');
        $refundTable->addField('amount');
        $refundTable->addField('dateRefunded');
        $refundTable->addField('username');

        $regTable = $db->addTable('conf_registration');
        $regTable->addField('visitorId');
        $regTable->addField('cancelled');

        $visitorTable = $db->addTable('conf_visitor');
        $visitorTable->addField('firstName', 'vfn');
        $visitorTable->addField('lastName', 'vln');
        $visitorTable->addField('email');

        $regTable->addFieldConditional('sessionId', $session->id);
        $cond = $db->createConditional($refundTable->getField('registrationId'),
            $regTable->getField('id'));
        $cond2 = $db->createConditional($regTable->getField('visitorId'),
            $visitorTable->getField('id'));
        $db->joinResources($refundTable, $regTable, $cond, 'left');
        $db->joinResources($regTable, $visitorTable, $cond2, 'left');
        $db->setGroupBy($refundTable->getField('id'));
        $refunds = $db->select();
        if (empty($refunds)) {
            return 'No registrations or refunds found for session #' . $session->id;
        }
        $csv = array();

        $csvRow[0] = '"amount","dateRefunded", "refundedBy", "registrationCancelled","firstName", "lastName", "email"';

        foreach ($refunds as $reg) {
            $sub = [];
            $sub[] = '$' . number_format($reg['amount'], 2, '.', ',');
            $sub[] = strftime('%c', $reg['dateRefunded']);
            $sub[] = $reg['username'];
            $sub[] = $reg['cancelled'] ? 'Yes' : 'No';
            $sub[] = $reg['vfn'];
            $sub[] = $reg['vln'];
            $sub[] = $reg['email'];

            $csvRow[] = '"' . implode('","', $sub) . '"';
        }
        $content = implode("\n", $csvRow);
        return $content;
    }

    public function registrations(SessionResource $session)
    {
        $factory = new \conference\Factory\RegistrationFactory;
        $options['sessionId'] = $session->id;
        $options['visitorName'] = true;

        $registrations = $factory->listing($options);
        if (empty($registrations)) {
            throw new \Exception('No registrations found for session #' . $session->id);
        }

        $csv = array();

        $csvRow[0] = '"created","updated", "cancelled", "cancel date","cancelled by","visitor", "email", "guest count","extra meals","vegetarian","total cost","paid", "discount", "completed", "refund amount", "arrived", "arrival time"';

        foreach ($registrations as $reg) {
            $reg = str_replace('"', '', $reg);
            $sub = [];
            $sub[] = strftime('%c', $reg['createDate']);
            $sub[] = strftime('%c', $reg['updateDate']);
            $sub[] = $reg['cancelled'] ? 'Yes' : 'No';
            $sub[] = ($reg['cancelledDate']) ? strftime('%c', $reg['cancelledDate']) : '';
            $sub[] = $reg['cancelledBy'];
            $sub[] = $reg['lastName'] . ', ' . $reg['firstName'];
            $sub[] = $reg['email'];
            $sub[] = $reg['guestCount'];
            $sub[] = $reg['mealTickets'];
            $sub[] = $reg['veggieMeals'];
            $sub[] = '$' . number_format($reg['totalCost'], 2, '.', ',');
            $sub[] = '$' . number_format($reg['amountPaid'], 2, '.', ',');
            $sub[] = $reg['discount'];
            $sub[] = $reg['completed'] ? 'yes' : 'no';
            $sub[] = '$' . number_format($reg['refundAmount'], 2, '.', ',');
            $sub[] = $reg['arrived'] ? 'yes' : 'no';
            $sub[] = $reg['arrivalTime'] ? strftime('%c', $reg['arrivalTime']) : '';
            $csvRow[] = '"' . implode('","', $sub) . '"';
        }
        $content = implode("\n", $csvRow);
        return $content;
    }

    public function payments(SessionResource $session)
    {
        $paymentFactory = new \conference\Factory\PaymentFactory();
        $options['sessionId'] = $session->id;
        $options['completedOnly'] = true;

        $listing = $paymentFactory->listing($options);
        if (empty($listing)) {
            return "No payments found for session #$session->id - $session->title";
        }
        $csv = array();
        $csvRow[] = '"payerName","amount","paymentType","cardType","receipt", "datePaid", "checkNumber"';
        foreach ($listing as $payment) {
            $payment = str_replace('"', '', $payment);
            $sub = [];
            $sub[] = $payment['payerName'];
            $sub[] = '$' . number_format($payment['amount'], 2, '.', ',');
            $sub[] = $payment['paymentType'];
            $sub[] = $payment['cardType'];
            $sub[] = $payment['receipt'];
            $sub[] = strftime('%c', $payment['timestamp']);
            $sub[] = $payment['checkNumber'];
            $csvRow[] = '"' . implode('","', $sub) . '"';
        }
        $content = implode("\n", $csvRow);
        return $content;
    }

    public function sessions(\conference\Resource\ConferenceResource $conference)
    {
        $sessionFactory = new \conference\Factory\SessionFactory;
        $options['conferenceId'] = $conference->id;
        $options['registrationCount'] = true;
        $options['guestCount'] = true;

        $listing = $sessionFactory->listing($options);
        if (empty($listing)) {
            return "No sessions found for $conference->id - $conference->title";
        }
        $csv = array();
        $csvheader[] = 'id';
        $csvheader[] = 'title';
        $csvheader[] = 'registration count';
        $csvheader[] = 'guest count';
        $csvheader[] = 'event date';
        $csvheader[] = 'signup start';
        $csvheader[] = 'signup end';
        $csvheader[] = 'days';
        $csvheader[] = 'register cost';
        $csvheader[] = 'meal service';
        $csvheader[] = 'meal cost';
        $csvheader[] = 'meal included';
        $csvheader[] = 'allow guest';
        $csvheader[] = 'guest cost';
        $csvheader[] = 'active';
        $csvheader[] = 'soft cap';
        $csvheader[] = 'attendance cap';

        $csvRow[] = '"' . implode('","', $csvheader) . '"';

        foreach ($listing as $session) {
            $sub = [];
            $sub[] = $session['id'];
            $sub[] = $session['title'];
            $sub[] = $session['registrationCount'];
            $sub[] = $session['guestCount'];
            $sub[] = strftime('%Y-%m-%d', $session['eventDate']);
            $sub[] = strftime('%c', $session['signupStart']);
            $sub[] = strftime('%c', $session['signupEnd']);
            $sub[] = $session['days'];
            $sub[] = '$' . number_format($session['registerCost'], 2, '.', ',');
            $sub[] = $session['mealService'] ? 'Yes' : 'No';
            $sub[] = '$' . number_format($session['mealCost'], 2, '.', ',');
            $sub[] = $session['mealIncluded'] ? 'Yes' : 'No';
            $sub[] = $session['allowGuest'] ? 'Yes' : 'No';
            $sub[] = '$' . number_format($session['guestCost'], 2, '.', ',');
            $sub[] = $session['active'] ? 'Yes' : 'No';
            $sub[] = $session['softCap'];
            $sub[] = $session['attendanceCap'];

            $csvRow[] = '"' . implode('","', $sub) . '"';
        }
        $content = implode("\n", $csvRow);
        return $content;
    }

}
