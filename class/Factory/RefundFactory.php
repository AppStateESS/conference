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
use conference\Resource\RefundResource;

class RefundFactory extends BaseFactory
{

    public function build()
    {
        $refund = new RefundResource();
        return $refund;
    }

    public function emailInfo(RefundResource $refund, $complete = false)
    {
        $registrationFactory = new RegistrationFactory;
        $registration = $registrationFactory->load($refund->registrationId);
        $vars = $registrationFactory->registrationVars($registration);
        $vars['refund'] = $refund->getStringVars();
        $vars['subject'] = $vars['conference']['title'] . ' refund complete';
        $contact = SettingsFactory::getContact();
        if (empty($contact['email'])) {
            $vars['contactEmail'] = null;
        } else {
            $vars['contactEmail'] = SettingsFactory::getEmailAddressOnly();
        }
        $from = SettingsFactory::getSwiftMailReply();
        $template = new \phpws2\Template($vars);

        if ($complete) {
            $template->setModuleTemplate('conference', 'Email/FullRefund.html');
        } else {
            $template->setModuleTemplate('conference',
                    'Email/PartialRefund.html');
        }
        $content = $template->get();

        $this->sendEmail($vars['subject'], $from, $vars['visitor']['email'],
                $content);
        LogFactory::log('System emailed refund details', $registration);
    }

    /**
     * Records a full refund of a registration.
     * @param int $registrationId
     * @param bool $cancel
     */
    public function refundRegistration(int $registrationId, bool $cancel = false)
    {
        $registrationFactory = new RegistrationFactory();
        $registration = $registrationFactory->load($registrationId);
        $refund = $this->basicBuild($registration->id);
        $refund->amount = $registration->totalCost;
        $refund->meals = $registration->mealTickets;
        $refund->guests = $registration->guestCount;
        $refund->complete = true;
        self::saveResource($refund);
        $registration->refundAmount = $refund->amount;
        $registration->amountPaid = 0;
        $registration->totalCost = 0;
        $registration->mealTickets = 0;
        $registration->guestCount = 0;
        $registrationFactory->cancel($registration);
        $registrationFactory->save($registration);
        $guestFactory = new GuestFactory;
        $guestFactory->deleteByRegistrationId($registrationId);
        return $refund;
    }

    public function loadByRegistration(int $registrationId)
    {
        $db = Database::getDB();
        $tbl = $db->addTable('conf_refund');
        $tbl->addOrderBy('dateRefunded', 'desc');
        $tbl->addFieldConditional('registrationId', $registrationId);
        return $db->select();
    }

    public function basicBuild(int $registrationId)
    {
        $refund = $this->build();
        $refund->registrationId = $registrationId;
        $refund->userId = \Current_User::getId();
        $refund->username = \Current_User::getUsername();
        $refund->stamp();
        return $refund;
    }

    public function partialRefund($registrationId, $amount, $meals, $guests)
    {
        $refund = $this->basicBuild($registrationId);
        $refund->amount = $amount;
        $refund->meals = $meals;
        $refund->guests = $guests;
        $refund->complete = true;
        $this->save($refund);
        return $refund;
    }

    public function adjustRegistration(RefundResource $refund,
            int $registrationId, int $mealReduction, array $guestRemoved = null)
    {
        $registrationFactory = new RegistrationFactory();
        $registration = $registrationFactory->load($registrationId);
        $registration->amountPaid = $registration->amountPaid - $refund->amount;
        $registration->totalCost = $registration->totalCost - $refund->amount;
        $registration->refundAmount = $registration->refundAmount + $refund->amount;
        if ($registration->mealTickets == 0 && $mealReduction != 0) {
            throw new \Exception('Meal reduction on registration failed.');
        }
        $registration->mealTickets = $registration->mealTickets - $mealReduction;
        if (!empty($guestRemoved) > 0) {
            $guestFactory = new GuestFactory;
            foreach ($guestRemoved as $guestId) {
                $registration->guestCount = $registration->guestCount - 1;
                $guestFactory->deleteById($guestId);
            }
        }
        $registrationFactory->save($registration);
    }

}
