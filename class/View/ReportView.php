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

    public function registrations(SessionResource $session)
    {
        $factory = new \conference\Factory\RegistrationFactory;
        $options['sessionId'] = $session->id;
        $options['visitorName'] = true;
        $registrations = $factory->listing($options);
        if (empty($registrations)) {
            throw new \Exception('No registrations found for session #' . $session->id);
        }

        $answers = $factory->getVisitorInfo($session->conferenceId,
                $registrations);
        $csv = array();

        $csvRow[0] = '"created","updated", "cancelled", "cancel date","cancelled by","visitor","guest count","extra meals","vegetarian","total cost","paid", "discount", "completed", "refund amount", "arrived", "arrival time"';
        if (!empty($answers)) {
            $csvRow[0] .= ', "' . implode('", "', array_keys(current($answers))) . '"';
        }

        foreach ($registrations as $reg) {
            $sub = [];
            $sub[] = strftime('%c', $reg['createDate']);
            $sub[] = strftime('%c', $reg['updateDate']);
            $sub[] = $reg['cancelled'] ? 'Yes' : 'No';
            $sub[] = ($reg['cancelledDate']) ? strftime('%c',
                            $reg['cancelledDate']) : '';
            $sub[] = $reg['cancelledBy'];
            $sub[] = $reg['lastName'] . ', ' . $reg['firstName'];
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
            if (!empty($answers)) {
                foreach ($answers[$reg['id']] as $a) {
                    $sub[] = $a;
                }
            }
            $csvRow[] = '"' . implode('","', $sub) . '"';
        }
        $content = implode("\n", $csvRow);
        return $content;
    }

    public function payments(SessionResource $session)
    {
        $paymentFactory = new \conference\Factory\PaymentFactory();
        $options['sessionId'] = $session->id;
        $options['includeRefundAmount'] = true;
        $options['completedOnly'] = true;
        $options['sessionName'] = true;

        $listing = $paymentFactory->listing($options);
        if (empty($listing)) {
            return "No payments found for session #$session->id - $session->title";
        }
        $csv = array();
        $csvRow[] = '"session", "payerName","amount","paymentType","cardType","receipt", "datePaid", "checkNumber"';
        foreach ($listing as $payment) {
            $sub = [];
            $sub[] = $payment['sessionTitle'];
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
