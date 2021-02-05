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
use conference\Resource\SessionResource as Resource;
use conference\Factory\ConferenceFactory;

class SessionFactory extends BaseFactory
{

    const SOFTCAP_PADDING = 10;

    public function build()
    {
        $session = new Resource;
        return $session;
    }

    public function getConferenceId(int $sessionId)
    {
        $session = $this->load($sessionId);
        return $session->conferenceId;
    }

    public function listing(array $options)
    {
        if (!empty($options['sortBy'])) {
            if (empty($options['sortByDir'])) {
                $sortDir = 'asc';
            } else {
                $sortDir = strtolower($options['sortByDir']);
            }

            if ($sortDir !== 'asc' && $sortDir !== 'desc') {
                $sortDir = 'asc';
            }
            $sortBy = $options['sortBy'];
        } else {
            $sortBy = $sortDir = null;
        }
        $db = Database::getDB();
        $sessionTbl = $db->addTable('conf_session');
        if (!empty($options['registrationCount'])) {
            $regTbl = $db->addTable('conf_registration');
            $count = new \phpws2\Database\Expression('count(' . $regTbl->getField('id') . ')',
                    'registrationCount');
            $regTbl->addField($count);
            $cond = $db->createConditional($sessionTbl->getField('id'),
                    $regTbl->getField('sessionId'));
            $cond2 = $db->createConditional($regTbl->getField('cancelled'), 0);
            $cond3 = $db->createConditional($regTbl->getField('completed'), 1);
            $cond4 = $db->createConditional($cond2, $cond3);
            $cond5 = $db->createConditional($cond, $cond4);
            $db->joinResources($sessionTbl, $regTbl, $cond5
                    , 'left');

            if (!empty($options['guestCount'])) {
                $guestTbl = $db->addTable('conf_guest');
                $count2 = new \phpws2\Database\Expression('count(' . $guestTbl->getField('id') . ')',
                        'guestCount');
                $guestTbl->addField($count2);
                $gcond = $db->createConditional($regTbl->getField('id'),
                        $guestTbl->getField('registrationId'));
                $db->joinResources($regTbl, $guestTbl, $gcond, 'left');
            }
            $db->setGroupBy($sessionTbl->getField('id'));
        }

        if (!empty($options['canSignup'])) {
            $sessionTbl->addFieldConditional('signupStart', time(), '<');
            $sessionTbl->addFieldConditional('signupEnd', time(), '>');
        }

        if (!empty($options['todayOrLater'])) {
            $sessionTbl->addFieldConditional('eventDate', mktime(0, 0, 0), '>=');
        }

        if (!empty($options['sameCost'])) {
            $session = $this->load($options['sameCost']);
            $sessionTbl->addFieldConditional('registerCost', $session->registerCost);
            if ($session->allowGuest) {
                $sessionTbl->addFieldConditional('allowGuest', 1);
                $sessionTbl->addFieldConditional('guestCost', $session->guestCost);
            }

            if ($session->mealService) {
                $sessionTbl->addFieldConditional('mealService', 1);
                $sessionTbl->addFieldConditional('mealIncluded', (int) $session->mealIncluded);
                $sessionTbl->addFieldConditional('mealCost', $session->mealCost);
            }
        }

        if (!empty($options['conferenceId'])) {
            $sessionTbl->addFieldConditional('conferenceId', $options['conferenceId']);
        }
        if (!empty($options['activeOnly'])) {
            $sessionTbl->addFieldConditional('active', 1);
        }
        if (!empty($options['search'])) {
            $dateSearch = strtotime($options['search']);
            if ($dateSearch) {
                $sessionTbl->addFieldConditional('eventDate', $dateSearch);
            } else {
                $searchQuery = '%' . strip_tags($options['search']) . '%';
                $cond2 = new \phpws2\Database\Conditional($db, $sessionTbl->getField('title'),
                        $searchQuery, 'like');
                $db->addConditional($cond2);
            }
        }

        if (empty($sortBy)) {
            $sortBy = 'title';
            $sortDir = 'asc';
        }


        if (!empty($options['fields'])) {
            foreach ($options['fields'] as $field) {
                $sessionTbl->addField($field);
            }
        }
        if ($sortBy === 'registrationCount') {
            $regTbl->addOrderBy($count, $sortDir);
        } else {
            $sessionTbl->addOrderBy($sortBy, $sortDir);
        }
        return $db->select();
    }

    /**
     * Sets a unix time to midnight of that day.
     * @param type $timestamp
     * @return type
     */
    public function midnight(int $timestamp): int
    {
        return mktime(0, 0, 0, date('m', $timestamp), date('d', $timestamp), date('Y', $timestamp));
    }

    public function post(Request $request)
    {
        $session = $this->build();
        $session->loadPostByType($request);
        $this->processMealPlan($session);
        $session->eventDate = $this->midnight($request->pullPostInteger('eventDate'));
        return $session;
    }

    public function put($sessionId, Request $request)
    {
        $session = $this->load($sessionId);
        $session->loadPutByType($request);
        $this->processMealPlan($session);
        $session->eventDate = $this->midnight($request->pullPutInteger('eventDate'));
        return $session;
    }

    private function processMealPlan(Resource $session)
    {
        if ($session->mealService == 1) {
            return;
        } else {
            $session->mealCost = 0;
            $session->mealIncluded = 0;
        }
    }

    public function patch($sessionId, $varname, $value)
    {
        $session = $this->load($sessionId);
        $session->$varname = $value;
        return $session;
    }

    public function delete(int $sessionId)
    {
        $db = Database::getDB();
        $tbl = $db->addTable('conf_session');
        $tbl->addFieldConditional('id', $sessionId);
        $db->delete();
    }

    public function loadByRegistrationId(int $registrationId)
    {
        $session = $this->build();
        $db = Database::getDB();
        $sesTbl = $db->addTable('conf_session');
        $regTbl = $db->addTable('conf_registration', null, false);
        $cond = $db->createConditional($sesTbl->getField('id'), $regTbl->getField('sessionId'), '=');
        $regTbl->addFieldConditional('id', $registrationId);
        $db->joinResources($sesTbl, $regTbl, $cond, 'left');
        return $db->selectInto($session) ? $session : null;
    }

    public static function signupAllowed(Resource $session)
    {
        return $session->signupStart < time() && $session->signupEnd > time();
    }

    public static function signupPassed(int $sessionId)
    {
        $factory = new self;
        $session = $factory->load($sessionId);
        return $session->signupEnd < time();
    }

    public function getEventDateRange(Resource $session)
    {
        $lastDay = $session->eventDate + ($session->days * 86400);
        $differentMonth = strftime('%m', $session->eventDate) !== strftime('%m', $lastDay);
        if ($differentMonth) {
            return strftime('%B %e', $session->eventDate) . ' &ndash; ' . strftime('%B %e', $lastDay);
        } else {
            return strftime('%B %e', $session->eventDate) . ' &ndash; ' . strftime('%e', $lastDay);
        }
    }

    /**
     * Pulls an ACTIVE session by its matching event date.
     * @param int $eventDate
     * @param int $conferenceId
     * @return type
     */
    public function pullByEventDate(int $eventDate, int $conferenceId)
    {
        $session = $this->build();
        $db = Database::getDB();
        $tbl = $db->addTable('conf_session');
        $tbl->addFieldConditional('conferenceId', $conferenceId);
        $tbl->addFieldConditional('eventDate', $eventDate);
        $tbl->addFieldConditional('active', 1);
        return $db->selectInto($session);
    }

    public function getChangeSessions(\conference\Resource\RegistrationResource $registration)
    {
        $options['conferenceId'] = $registration->conferenceId;
        $options['activeOnly'] = 1;
        $options['canSignup'] = 1;
        if ($registration->completed) {
            $options['sameCost'] = $registration->sessionId;
        }
        $listing = $this->listing($options);
        foreach ($listing as $key => $session) {
            if ($session['id'] == $registration->sessionId) {
                unset($listing[$key]);
            } else {
                $listing[$key]['eventDateFormat'] = strftime('%b %e, %Y', $session['eventDate']);
            }
        }
        return array_values($listing);
    }

    /**
     * Compares the costs of one session to another. If the first session does not
     * allow guests or meals, then it WILL MATCH the second regardless as they
     * then have the opportunity to add them.
     *
     * @param Resource $session1
     * @param Resource $session2
     * @return bool
     */
    public static function sameCost(Resource $session1, Resource $session2)
    {
        return $session1->registerCost == $session2->registerCost &&
                ( ($session1->allowGuest && $session1->guestCost == $session2->guestCost) ||
                (!$session1->allowGuest)
                ) &&
                ( ($session1->mealService && $session1->mealService == $session2->mealService ) ||
                (!$session1->mealService)
                );
    }

    /**
     * Checks to see if the registration count is under the soft cap
     * If close, an email warning is sent.
     * @param int $sessionId
     * @return boolean
     */
    public function checkSoftCap(int $sessionId): bool
    {
        $session = $this->load($sessionId);
        $softCap = $session->softCap;
        /**
         * If softCap is zero then there is no soft cap.
         * If warning has already been sent, then we return as well.
         */
        if ($softCap === 0 || $session->capWarningSent) {
            return false;
        }
        $registrationFactory = new RegistrationFactory();
        $options['sessionId'] = $sessionId;
        $options['countOnly'] = true;
        $count = (int) $registrationFactory->listing($options);
        /**
         * This should not happen but if no registrations found, we return
         */
        if ($count === 0) {
            return false;
        }

        if (($softCap - $count) <= self::SOFTCAP_PADDING) {
            $this->sendSoftCapEmail($session);
            return true;
        } else {
            return false;
        }
    }

    private function sendSoftCapEmail(Resource $session)
    {
        $subject = 'Session soft cap about to be reached';
        $vars = $session->getStringVars();
        $template = new \phpws2\Template($vars);
        $template->setModuleTemplate('conference', 'Email/SoftCapWarning.html');
        $content = $template->get();
        $this->sendEmail($subject, SettingsFactory::getSwiftMailReply(true),
                \phpws2\Settings::get('conference', 'contactEmail'), $content);
        $session->capWarningSent = true;
        $this->save($session);
    }

    public static function isFree(int $sessionId)
    {
        $factory = new self;
        $session = $factory->load($sessionId);
        return $session->registerCost == 0;
    }

}
