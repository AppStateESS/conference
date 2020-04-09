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

use conference\Resource\PaymentResource as Resource;
use conference\Resource\RegistrationResource;
use conference\Resource\VisitorResource;
use conference\Resource\SupplementResource;
use conference\Resource\AccountResource;
use conference\Factory\ServiceFactory;
use conference\Factory\AccountFactory;
use conference\Factory\LogFactory;
use Canopy\Request;
use phpws2\Database;

class PaymentFactory extends BaseFactory
{

    public function build($vars = null)
    {
        $payment = new Resource;
        if (is_array($vars)) {
            $payment->setVars($vars);
        }
        return $payment;
    }

    public function closeFreePayments(int $registrationId)
    {
        $payments = $this->listing(['registrationId' => $registrationId]);
        if (empty($payments)) {
            throw new \Exception("No payments found for registration");
        }

        foreach ($payments as $row) {
            $payment = $this->build($row);
            if (!$payment->completed) {
                $payment->amount = 0;
                $payment->paymentType = 'free';
                $payment->completed = 1;
                $this->save($payment);
            }
        }
    }

    public function listing(array $options = []): array
    {
        $db = Database::getDB();
        $tbl = $db->addTable('conf_payment');
        if (!empty($options['registrationId'])) {
            $tbl->addFieldConditional('registrationId',
                    $options['registrationId']);
        }

        // If showDeleted is not set or false, don't pull deleted payments.
        if (empty($options['showDeleted'])) {
            $tbl->addFieldConditional('deleted', 0);
        }

        if (!empty($options['completedOnly'])) {
            $tbl->addFieldConditional('completed', 1);
        }

        if (!empty($options['conferenceId'])) {
            $tbl->addFieldConditional('conferenceId', $options['conferenceId']);
        }

        if (!empty($options['sessionId'])) {
            $tbl->addFieldConditional('sessionId', $options['sessionId']);
        }

        if (!empty($options['sessionName'])) {
            $tbl2 = $db->addTable('conf_session');
            $tbl2->addField('title', 'sessionTitle');
            $cond = $db->createConditional($tbl->getField('sessionId'),
                    $tbl2->getField('id'), '=');
            $db->joinResources($tbl, $tbl2, $cond, 'left');
        }

        $tbl->addOrderBy('timestamp', 'desc');
        return $db->select();
    }

    public function getSupplement(SupplementResource $supplement,
            bool $incompleteOnly = true)
    {
        $resource = $this->build();
        $db = Database::getDB();
        $tbl = $db->addTable('conf_payment');
        $tbl->addFieldConditional('supplementId', $supplement->id);
        $tbl->addFieldConditional('deleted', 0);
        if ($incompleteOnly) {
            $tbl->addFieldConditional('completed', 0);
        }

        $result = $db->selectInto($resource);
        return $result ? $resource : false;
    }

    public function getCurrentRegistrationPayment(RegistrationResource $registration)
    {
        $resource = $this->build();
        $db = Database::getDB();
        $tbl = $db->addTable('conf_payment');
        $tbl->addFieldConditional('registrationId', $registration->id);
        $tbl->addFieldConditional('completed', 0);
        $tbl->addFieldConditional('deleted', 0);
        $result = $db->selectInto($resource);
        return $result ? $resource : false;
    }

    public function createRegistrationPayment(RegistrationResource $registration,
            AccountResource $account, VisitorResource $visitor): Resource
    {
        $payment = $this->build();
        $payment->conferenceId = $registration->conferenceId;
        $payment->sessionId = $registration->sessionId;
        $payment->registrationId = $registration->id;
        $payment->visitorId = $registration->visitorId;
        $payment->accountId = $account->id;
        $payment->amount = $registration->amountDue();
        $payment->completed = false;
        $payment->payerName = $visitor->firstName . ' ' . $visitor->lastName;
        $payment->stamp();
        $payment->transactionId = $this->createTransactionId($payment);
        $this->save($payment);
        LogFactory::log('Created new registration payment', $payment);
        return $payment;
    }

    public function createSupplementPayment(SupplementResource $supplement,
            RegistrationResource $registration, AccountResource $account,
            VisitorResource $visitor): Resource
    {
        $payment = $this->build();
        $payment->supplementId = $supplement->id;
        $payment->conferenceId = $registration->conferenceId;
        $payment->sessionId = $registration->sessionId;
        $payment->registrationId = $registration->id;
        $payment->visitorId = $registration->visitorId;
        $payment->accountId = $account->id;
        $payment->amount = $supplement->totalCost;
        $payment->completed = false;
        $payment->payerName = $visitor->firstName . ' ' . $visitor->lastName;
        $payment->stamp();
        $payment->transactionId = $this->createTransactionId($payment);
        $this->save($payment);
        LogFactory::log('Created new supplement payment', $payment);
        return $payment;
    }

    /**
     * Updates the session id for all payments made to a registration
     * @param RegistrationResource $registration
     */
    public static function updateSessionByRegistration(RegistrationResource $registration)
    {
        $db = Database::getDB();
        $tbl = $db->addTable('conf_payment');
        $tbl->addValue('sessionId', $registration->sessionId);
        $tbl->addFieldConditional('registrationId', $registration->id);
        $db->update();
    }

    private function createTransactionId(Resource $payment)
    {
        return md5($payment->timestamp . $payment->sessionId . $payment->registrationId);
    }

    /**
     * Verifies a cc payment is legit by checking if the
     * - payment was not previously completed
     * - the validate code is correct (if checking enabled)
     * - the payment amount matches the returned value.
     * @param Resource $payment
     * @param Request $request
     * @return bool
     */
    private function verifyPaymentPost(Resource $payment, Request $request): bool
    {
        $accountFactory = new AccountFactory;
        $account = $accountFactory->load($payment->accountId);
        $parameters = ServiceFactory::getParameterList();

        if ($payment->completed) {
            LogFactory::log('Error: payment post previously completed.',
                    $payment);
            return false;
        }

        if ($account->validateResponseActive) {
            $validateResponseCode = $request->pullPostString($parameters->response->validateResponse);
            if ($validateResponseCode !== $account->validateResponse) {
                LogFactory::log('Error: validate response code mismatch.',
                        $payment);
                return false;
            }
        }
        $responseAmount = $request->pullPostString($parameters->response->paymentAmount);
        $paymentAmount = $payment->amountToString();
        if ($paymentAmount !== number_format($responseAmount, 2)) {
            LogFactory::log("Error: payment amount [$responseAmount] does not equal expected amount of [$paymentAmount].",
                    $payment);
            return false;
        }
        return true;
    }

    public function completeServicePayment(Request $request): bool
    {
        $info = ServiceFactory::getParameterList();
        $payment = $this->pullByTransactionId($request->pullPostString($info->response->transactionId));
        $payment->payerName = $request->pullPostString($info->response->payerName);
        $payment->paymentType = 'cc-offsite';
        $payment->receipt = $request->pullPostString($info->response->receiptId);
        $payment->cardType = $request->pullPostString($info->response->cardType);
        $payment->stamp();
        if ($this->verifyPaymentPost($payment, $request)) {
            $payment->completed = true;
            $this->save($payment);
            if ($payment->supplementId) {
                $suppFactory = new SupplementFactory;
                $supplement = $suppFactory->load($payment->supplementId);
                $suppFactory->applyPayment($supplement);
                $suppFactory->emailDetails($supplement);
                LogFactory::log('Returned from service completing supplement payment',
                        $payment);
            } else {
                $regFactory = new RegistrationFactory;
                $registration = $regFactory->load($payment->registrationId);
                $regFactory->applyPayment($registration, $payment);
                $regFactory->emailDetails($registration);
                LogFactory::log('Returned from service completing registration payment',
                        $payment);
            }
            return true;
        } else {
            LogFactory::log('Returned from service but failed payment verification',
                    $payment);
            return false;
        }
    }

    public function pullByTransactionId(string $transactionId)
    {
        $payment = $this->build();
        $db = Database::getDB();
        $tbl = $db->addTable('conf_payment');
        $tbl->addFieldConditional('transactionId', $transactionId);
        $tbl->addFieldConditional('deleted', 0);
        $db->selectInto($payment);
        return $payment;
    }

    public function adminPaid(int $id, Request $request)
    {
        $payment = $this->load($id);
        $payment->payerName = $request->pullPutString('payerName');
        $payment->paymentType = $request->pullPutString('paymentType');
        $payment->completed = true;
        if ($payment->paymentType == 'cc') {
            $payment->paymentType = 'cc-onsite';
            $payment->cardType = $request->pullPutString('cardType');
        } elseif ($payment->paymentType == 'check') {
            $payment->checkNumber = $request->pullPutString('checkNumber');
        }
        $payment->stamp();
        $this->save($payment);

        if ($payment->supplementId) {
            $suppFactory = new SupplementFactory;
            $supplement = $suppFactory->load($payment->supplementId);
            $suppFactory->applyPayment($supplement);
            $suppFactory->emailDetails($supplement);
            LogFactory::log('Returned from service completing supplement payment',
                    $payment);
        } else {
            $regFactory = new RegistrationFactory;
            $registration = $regFactory->load($payment->registrationId);
            $regFactory->applyPayment($registration, $payment);
            $regFactory->emailDetails($registration);
            LogFactory::log('Returned from service completing registration payment',
                    $payment);
        }

        LogFactory::log('Registration paid administratively', $payment);
    }

    /**
     * Updates incomplete payment with current registration amount due.
     * @param RegistrationResource $registration
     * @return type
     */
    public function updateAmountDue(RegistrationResource $registration)
    {
        $amountDue = $registration->amountDue();
        $payment = $this->getIncomplete($registration);
        $payment->amount = $amountDue;
        $this->save($payment);
    }

    public function createPayOnSite(
            RegistrationResource $registration, VisitorResource $visitor,
            SupplementResource $supplement = null): Resource
    {
        $payment = $this->build();
        if ($supplement) {
            $payment->amount = $supplement->totalCost;
            $payment->supplementId = $supplement->id;
        } else {
            $payment->amount = $registration->totalCost;
        }
        $payment->conferenceId = $registration->conferenceId;
        $payment->sessionId = $registration->sessionId;
        $payment->registrationId = $registration->id;
        $payment->completed = false;
        $payment->payerName = $visitor->firstName . ' ' . $visitor->lastName;
        $payment->stamp();
        $payment->transactionId = $this->createTransactionId($payment);
        $this->save($payment);
        if ($supplement) {
            LogFactory::log('Supplement paid on site.', $payment);
        } else {
            LogFactory::log('Registration paid on site.', $payment);
        }
        return $payment;
    }

    /**
     * Deletes incomplete payments associated to a (hopefully) incomplete
     * supplement.
     * @param int $supplementId
     * @return boolean
     */
    public function deleteIncompleteSupplement(int $supplementId)
    {
        $db = Database::getDB();
        $tbl = $db->addTable('conf_payment');
        $tbl->addFieldConditional('supplementId', $supplementId);
        $tbl->addFieldConditional('completed', 0);
        $db->delete();
        LogFactory::log("Permanently deleted incomplete supplement payment");
        return true;
    }

    public function delete(Resource $payment)
    {
        $payment->deleted = 1;
        $this->save($payment);
        $type = $payment->supplementId > 0 ? 'supplement' : 'registration';
        $incomplete = $payment->completed == 0 ? 'incomplete' : '';
        LogFactory::log("Marked $incomplete $type payment as deleted.", $payment);
    }

    public function deleteByRegistrationId(int $registrationId,
            bool $incompleteOnly = true, bool $withoutSupplement = true)
    {
        $db = Database::getDB();
        $tbl = $db->addTable('conf_payment');
        $tbl->addFieldConditional('registrationId', $registrationId);
        $tbl->addFieldConditional('deleted', 0);
        if ($incompleteOnly) {
            $tbl->addFieldConditional('completed', 0);
        }

        if ($withoutSupplement) {
            $tbl->addFieldConditional('supplementId', 0);
        }
        $rows = $db->select();
        if (empty($rows)) {
            return false;
        }
        foreach ($rows as $row) {
            $payment = $this->build();
            $payment->setVars($row);
            $this->delete($payment);
        }
        return true;
    }

    /**
     * Permanently deletes a payment by visitor id.
     * @param int $visitorId
     */
    public static function deleteByVisitorId(int $visitorId)
    {
        $db = Database::getDB();
        $tbl = $db->addTable('conf_payment');
        $tbl->addFieldConditional('visitorId', $visitorId);
        $db->delete();
    }

    public function syncAccount(int $paymentId, int $accountId)
    {
        $payment = $this->load($paymentId);
        $payment->accountId = $accountId;
        $this->save($payment);
    }

    public function syncPaymentsToConferenceAccount(\conference\Resource\ConferenceResource $conference)
    {
        $accountId = $conference->accountId;
        $db = Database::getDB();
        $tbl = $db->addTable('conf_payment');
        $tbl->addFieldConditional('conferenceId', $conference->id);
        $tbl->addFieldConditional('accountId', 0);
        $tbl->addValue('accountId', $accountId);
        $db->update();
        return true;
    }

}
