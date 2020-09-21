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
use conference\Resource\SupplementResource;
use conference\Resource\PaymentResource;
use conference\Factory\LogFactory;

class SupplementFactory extends BaseFactory
{

    public function build()
    {
        $resource = new SupplementResource;
        return $resource;
    }

    public function adminPost(Request $request)
    {
        $registrationFactory = new RegistrationFactory;
        $visitorFactory = new VisitorFactory;
        $guestFactory = new GuestFactory;

        $registrationId = $request->pullPostInteger('registrationId');
        $registration = $registrationFactory->load($registrationId);
        $session = $registrationFactory->getSession($registration);
        $visitor = $visitorFactory->load($registration->visitorId);
        $newGuests = $request->pullPostInteger('newGuests');
        $newMeals = $request->pullPostInteger('newMeals');
        $guestArray = $request->pullPostArray('guests', true);
        if (empty($guestArray)) {
            $guestArray = [];
        }

        // if the registration is incomplete or the session is free don't make a supplement, append the
        // registration
        if (!$registration->completed) {
            $registrationFactory->adminUpdate($registration, $guestArray,
                    $newGuests, $newMeals);
            return;
        }

        $supplement = $this->build();
        $supplement->visitorId = $registration->visitorId;
        $supplement->registrationId = $registration->id;
        $supplement->newGuests = $newGuests;
        $supplement->newMeals = $newMeals;
        $this->determineTotalCost($supplement);
        $supplement->stampCreate();
        $supplement->completed = false;

        $this->save($supplement);
        $this->createPayment($supplement, $visitor);

        $guestFactory->saveSupplement($supplement, $guestArray);

        if ($supplement->totalCost == 0) {
            $this->completeFree($supplement);
        }

        LogFactory::log('New supplement posted administratively', $supplement);
    }

    public function post(Request $request)
    {
        $supplement = $this->build();
        $supplement->loadPostByType($request,
                ['id', 'createDate', 'closeDate', 'completed', 'visitorId', 'totalCost', 'amountPaid']);
        $supplement->visitorId = VisitorFactory::getCurrentId();
        $supplement->completed = false;
        $this->determineTotalCost($supplement);
        $supplement->stampCreate();
        LogFactory::log('New supplement posted by visitor', $supplement);
        return $supplement;
    }

    public function put(int $supplementId, Request $request)
    {
        $supplement = $this->load($supplementId);
        $supplement->loadPutByType($request,
                ['id', 'createDate', 'closeDate', 'completed', 'visitorId', 'totalCost', 'amountPaid']);
        $this->determineTotalCost($supplement);
        LogFactory::log('Supplement updated', $supplement);
        return $supplement;
    }

    public function determineTotalCost(SupplementResource $supplement)
    {
        $sessionFactory = new SessionFactory;
        $session = $sessionFactory->loadByRegistrationId($supplement->registrationId);
        $guestCost = $supplement->newGuests * $session->guestCost;
        $mealCost = $supplement->newMeals * $session->mealCost;
        $supplement->totalCost = $guestCost + $mealCost;
    }

    /**
     *
     * @param SupplementResource $supplement
     * @param \conference\Resource\VisitorResource $visitor
     * @return PaymentResource
     */
    public function createPayment(SupplementResource $supplement,
            \conference\Resource\VisitorResource $visitor)
    {
        /**
         * Check if an incomplete payment exists before creating another.
         * If payment is false, none found and can continue.
         */
        $paymentFactory = new PaymentFactory();
        $payment = $paymentFactory->getSupplement($supplement);
        if ($payment !== false) {
            /**
             * If the supplement is trying to make a new payment and a completed
             * one already exists, we have a problem.
             */
            if ($payment->completed) {
                $error = 'Error:: supplement tried to create a payment but transaction complete.';
                LogFactory::log($error, $payment);
                throw new \Exception($error);
            }
            return $payment;
        }

        $registrationFactory = new RegistrationFactory;
        $sessionFactory = new SessionFactory;
        $accountFactory = new AccountFactory;
        $conferenceFactory = new ConferenceFactory;
        $registration = $registrationFactory->load($supplement->registrationId);
        $session = $sessionFactory->load($registration->sessionId);
        $conference = $conferenceFactory->load($session->conferenceId);
        if ($conference->accountId) {
            $account = $accountFactory->load($conference->accountId);
        } else {
            $account = $accountFactory->build();
        }

        return $paymentFactory->createSupplementPayment($supplement,
                        $registration, $account, $visitor);
    }

    public function loadByVisitorId(int $visitorId)
    {
        $resource = $this->build();
        $db = Database::getDB();
        $tbl = $db->addTable('conf_supplement');
        $tbl->addFieldConditional('visitorId', $visitorId);
        $tbl->addFieldConditional('completed', 0);
        if ($db->selectInto($resource)) {
            return $resource;
        }
    }

    public function getCurrentByRegistrationId(int $regId)
    {
        $supplement = $this->build();
        $db = Database::getDB();
        $tbl = $db->addTable('conf_supplement');
        $tbl->addFieldConditional('registrationId', $regId);
        $tbl->addFieldConditional('completed', 0);
        if ($db->selectInto($supplement)) {
            return $supplement;
        } else {
            return false;
        }
    }

    public function updatePayment(SupplementResource $supplement)
    {
        $paymentFactory = new PaymentFactory;
        $payment = $paymentFactory->getSupplement($supplement);
        if ($payment === false) {
            throw new \Exception('Could not retrieve payment for supplemental charge.');
        }
        $payment->amount = $supplement->totalCost;
        $paymentFactory->save($payment);
        LogFactory::log('Supplement payment updated', $payment);
    }

    /**
     * Adds supplement information to its associated registration
     * @param SupplementResource $supplement
     */
    private function appendRegistration(SupplementResource $supplement)
    {
        $registrationFactory = new RegistrationFactory;
        $registration = $registrationFactory->load($supplement->registrationId);
        $registration->guestCount = $registration->guestCount + $supplement->newGuests;
        $registration->mealTickets = $registration->mealTickets + $supplement->newMeals;
        $registration->veggieMeals = $registration->veggieMeals + $supplement->newVeggie;
        $registration->totalCost = $registration->totalCost + $supplement->totalCost;
        $registration->amountPaid = $registration->totalCost;
        $registrationFactory->save($registration);

        $guestFactory = new GuestFactory();
        $guestFactory->emailNewSupplementGuests($supplement->id);
        $guestFactory->swapGuestsFromSupplement($supplement->id);
        LogFactory::log('Updated registration with supplement information',
                $supplement);
    }

    /**
     * Closes out a supplement with an assumed completed payment.
     * @param int $supplementId
     */
    public function applyPayment(SupplementResource $supplement)
    {
        $supplement->completed = true;
        $supplement->stampClose();
        $this->save($supplement);
        $this->appendRegistration($supplement);
        LogFactory::log('Payment applied to supplement and completed',
                $supplement);
    }

    /**
     *
     * @param int $supplementId
     */
    public function incompleteDelete(int $supplementId)
    {
        $supplement = $this->load($supplementId);
        $guestFactory = new GuestFactory();
        $guestFactory->deleteBySupplementId($supplementId);

        $paymentFactory = new PaymentFactory();
        $paymentFactory->deleteIncompleteSupplement($supplementId);

        self::deleteResource($supplement);
        LogFactory::log('Incomplete supplement deleted.', $supplement);
    }

    public function emailDetails(SupplementResource $supplement)
    {
        $registrationFactory = new RegistrationFactory;
        $registration = $registrationFactory->load($supplement->registrationId);

        $vars = $registrationFactory->registrationVars($registration);
        $vars['supplement'] = $supplement->getStringVars();
        $vars['subject'] = $subject = $vars['conference']['title'] . ': ' . $vars['session']['title'] . ' information';
        $vars['locationUrl'] = \Canopy\Server::getSiteUrl() . 'conference/User/Location/' . $vars['location']['id'];

        $from = SettingsFactory::getSwiftMailReply();
        $template = new \phpws2\Template($vars);
        $template->setModuleTemplate('conference', 'Email/SupplementInfo.html');
        $content = $template->get();

        $this->sendEmail($subject, $from, $vars['visitor']['email'], $content);
        LogFactory::log('Emailed supplement details', $registration);
    }

    /**
     * Deletes all supplements associated with a visitor. Does
     * not remove added guests or payments.
     * @param int $visitorId
     */
    public static function deleteByVisitorId(int $visitorId)
    {
        $db = Database::getDB();
        $tbl = $db->addTable('conf_supplement');
        $tbl->addFieldConditional('visitorId', $visitorId);
        $db->delete();
    }

    public function completeFree(SupplementResource $supplement)
    {
        $registrationFactory = new RegistrationFactory();
        $registration = $registrationFactory->load($supplement->registrationId);
        $session = $registrationFactory->getSession($registration);

        if ($supplement->completed == 0) {
            if ($session->guestCost > 0 || $session->mealCost > 0) {
                if ($supplement->newGuests > 0 && $session->guestCost > 0) {
                    return false;
                }
                if ($supplement->newMeals > 0 && $session->mealCost > 0) {
                    return false;
                }
            }
            $supplement->completed = true;
            $supplement->stampClose();
            $this->save($supplement);
            $this->appendRegistration($supplement);
            $paymentFactory = new PaymentFactory();
            $paymentFactory->closeFreePayments($registration->id);
            LogFactory::log('Applied supplement that did not increase cost.');
            return true;
        }
    }

}
