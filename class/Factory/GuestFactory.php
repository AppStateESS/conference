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
use conference\Resource\GuestResource;
use conference\Resource\RegistrationResource;
use conference\Resource\SupplementResource;

class GuestFactory extends BaseFactory
{

    public function build()
    {
        $guest = new GuestResource;
        return $guest;
    }

    public function listing(array $options = [])
    {
        $db = Database::getDB();
        $tbl = $db->addTable('conf_guest');
        $tbl->addOrderBy('lastName');
        if (!empty($options['registrationId'])) {
            $tbl->addFieldConditional('registrationId',
                    $options['registrationId']);
            $tbl->addFieldConditional('supplementId', 0);
        }

        if (!empty($options['supplementId'])) {
            $tbl->addFieldConditional('supplementId', $options['supplementId']);
        }
        return $db->select();
    }

    public function addRegistrationGuests(RegistrationResource $registration,
            array $guests)
    {
        $guestCount = count($guests);
        $this->saveGuests($guests, $guestCount, $registration->id, $registration->visitorId);
    }

    /**
     * Saves registration guests
     * @param RegistrationResource $registration
     * @param array $guests
     */
    public function saveRegistration(RegistrationResource $registration,
            array $guests)
    {
        if ($registration->completed) {
            throw new \Exception('Cannot add new guests to a completed registration here.');
        }
        $guestCount = $registration->guestCount;
        if ($guestCount != count($guests)) {
            throw new \Exception('Guest count does not match submitted guests.');
        }
        $this->deleteByRegistrationId($registration->id);
        $this->saveGuests($guests, $guestCount, $registration->id, $registration->visitorId);
    }

    /**
     * Saves supplement guests. These are temporary until payed at which point
     * they switch to the registration.
     * @param SupplementResource $supplement
     * @param array $guests
     */
    public function saveSupplement(SupplementResource $supplement, array $guests)
    {
        $guestCount = $supplement->newGuests;
        $this->saveGuests($guests, $guestCount, $supplement->registrationId, $supplement->visitorId,
                $supplement->id);
    }

    /**
     * Saves all the guests in an array.
     * @param array $guests
     * @param int $guestCount
     * @param int $registrationId
     * @param int $supplementId
     * @throws \Exception
     */
    private function saveGuests(array $guests, int $guestCount,
            int $registrationId, int $visitorId, int $supplementId = 0)
    {
        $db = Database::getDB();
        try {
            if (!empty($guests)) {
                for ($i = 0; $i < $guestCount; $i++) {
                    $guestData = $guests[$i];
                    if (empty($guestData['firstName']) || empty($guestData['lastName']) || empty($guestData['email'])) {
                        throw new \Exception('Missing guest information');
                    }
                    $guestResource = $this->build();
                    $guestResource->firstName = $guestData['firstName'];
                    $guestResource->lastName = $guestData['lastName'];
                    $guestResource->email = strtolower($guestData['email']);
                    $guestResource->supplementId = $supplementId;
                    $guestResource->registrationId = $registrationId;
                    $guestResource->visitorId = $visitorId;
                    $guestResource->relationship = $guestData['relationship'];

                    $guestResource->employer = $guestData['employer'] ?? '';
                    $guestResource->position = $guestData['position'] ?? '';
                    $guestResource->alum = $guestData['alum'] ?? false;
                    $guestResource->gradYear = $guestData['gradYear'] ?? '0';
                    $guestResource->hometown = $guestData['hometown'] ?? '';
                    $guestResource->stripBadChars(['firstName', 'lastName']);
                    $this->save($guestResource);
                }
            }
        } catch (\Exception $ex) {
            throw $ex;
        }
    }

    public function deleteByRegistrationId(int $registrationId)
    {
        $db = Database::getDB();
        $tbl = $db->addTable('conf_guest');
        $tbl->addFieldConditional('registrationId', $registrationId);
        return $db->delete();
    }

    public function deleteById(int $id)
    {
        $db = Database::getDB();
        $tbl = $db->addTable('conf_guest');
        $tbl->addFieldConditional('id', $id);
        return $db->delete();
    }

    public function deleteBySupplementId(int $supplementId)
    {
        $db = Database::getDB();
        $tbl = $db->addTable('conf_guest');
        $tbl->addFieldConditional('supplementId', $supplementId);
        return $db->delete();
    }

    public function emailNewSupplementGuests(int $supplementId)
    {
        $db = Database::getDB();
        $tbl = $db->addTable('conf_guest');
        $tbl->addFieldConditional('supplementId', $supplementId);
        $rows = $db->select();
        if (empty($rows)) {
            return;
        }
        $supplementFactory = new SupplementFactory;
        $registrationFactory = new RegistrationFactory;
        $supplement = $supplementFactory->load($supplementId);
        $registration = $registrationFactory->load($supplement->registrationId);
        $registrationVars = $registrationFactory->registrationVars($registration);
        $registrationVars['locationUrl'] = \Canopy\Server::getSiteUrl() . 'conference/User/Location/' . $registrationVars['location']['id'];
        $registrationVars['loginUrl'] = \Canopy\Server::getSiteUrl() . 'conference/User/Visitor/login';
        $registrationVars['conferenceUrl'] = \Canopy\Server::getSiteUrl() . 'conference/User/Conference/' . $registrationVars['conference']['id'];
        $registrationVars['registrationUrl'] = \Canopy\Server::getSiteUrl() . 'conference/Visitor/Registration/' . $registrationVars['registration']['id'];
        $from = SettingsFactory::getSwiftMailReply();
        $subject = $registrationVars['conference']['title'] . ' guest registration complete';
        foreach ($rows as $guest) {
            $registrationVars['guest'] = $guest;
            $template = new \phpws2\Template($registrationVars);
            $template->setModuleTemplate('conference',
                    'Email/GuestRegistrationInfo.html');
            $content = $template->get();
            $this->sendEmail($subject, $from, $guest['email'], $content);
        }
    }

    /**
     * Upon completion of payment, all supplement guests are added to the registration
     * by zeroing out the supplement ids.
     * @param int $supplementId
     */
    public function swapGuestsFromSupplement(int $supplementId)
    {
        $db = Database::getDB();
        $tbl = $db->addTable('conf_guest');
        $tbl->addFieldConditional('supplementId', $supplementId);
        $tbl->addValue('supplementId', 0);
        $db->update();
    }

}
