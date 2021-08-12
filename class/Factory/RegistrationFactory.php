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

use conference\Resource\RegistrationResource as Resource;
use Canopy\Request;
use phpws2\Database;
use conference\Resource\PaymentResource;
use conference\Resource\RegistrationResource;
use conference\Factory\SessionFactory;
use conference\Factory\PaymentFactory;
use conference\Factory\AccountFactory;
use conference\Factory\LogFactory;

class RegistrationFactory extends BaseFactory
{

    public function build()
    {
        $registration = new Resource;
        return $registration;
    }

    public function post(Request $request, int $visitorId): Resource
    {
        $registration = $this->build();
        $registration->stamp();
        $registration->visitorId = $visitorId;
        $registration->sessionId = $request->pullPostInteger('sessionId');
        $registration->guestCount = $request->pullPostInteger('guestCount');
        $registration->mealTickets = $request->pullPostInteger('mealTickets');
        $registration->veggieMeals = $request->pullPostInteger('veggieMeals');
        $sessionFactory = new SessionFactory;
        $registration->conferenceId = $sessionFactory->getConferenceId($registration->sessionId);
        $this->addOn($registration);
        LogFactory::log('New registration posted', $registration);
        return $registration;
    }

    public function listing(array $options = null)
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
        $tbl = $db->addTable('conf_registration');

        // conditional options
        if (!empty($options['visitorId'])) {
            $tbl->addFieldConditional('visitorId', $options['visitorId']);
        }

        if (!empty($options['sessionId'])) {
            $tbl->addFieldConditional('sessionId', $options['sessionId']);
        }

        if (!empty($options['conferenceId'])) {
            $tbl->addFieldConditional('conferenceId', $options['conferenceId']);
        }

        // Unless specifed otherwise, don't include cancelled.
        if (empty($options['includeCancelled'])) {
            $tbl->addFieldConditional('cancelled', 0);
        }

        // No longer used
        // @deprecated
        if (!empty($options['unarrivedOnly'])) {
            $tbl->addFieldConditional('arrived', 0);
        }

        // content options

        /**
         * Count only skips other content options
         */
        if (!empty($options['countOnly'])) {
            $tbl->useInQuery(false);
            $countId = $tbl->getField('id');
            $expression = 'count(' . $countId . ')';
            $db->addExpression($expression, 'count');
            return $db->selectColumn();
        }

        if (!empty($options['includeSession'])) {
            $tbl2 = $db->addTable('conf_session');
            $tbl2->addField('title', 'sessionTitle');
            $tbl2->addField('eventDate');
            $cond = $db->createConditional($tbl->getField('sessionId'),
                    $tbl2->getField('id'));
            $db->joinResources($tbl, $tbl2, $cond, 'left');
            if (!empty($options['priorOnly'])) {
                $tbl2->addFieldConditional('eventDate', time(), '>');
            }
        }

        $parentNameSearch = $studentNameSearch = null;

        if (!empty($options['visitorName'])) {
            $visTbl = $db->addTable('conf_visitor');
            $visTbl->addField('firstName');
            $lastNameField = $visTbl->addField('lastName');
            $visTbl->addField('email');
            $visitorConditional = $db->createConditional($tbl->getField('visitorId'),
                    $visTbl->getField('id'));
            $db->joinResources($tbl, $visTbl, $visitorConditional, 'left');

            if (!empty($options['search'])) {
                $parentNameSearch = $this->searchOnName($db, $visTbl,
                        $options['search']);
            }
        }

        if (!empty($options['studentName'])) {
            $studentTbl = $db->addTable('conf_student');
            $studentTbl->addField('firstName', 'studentFirstName');
            $studentTbl->addField('lastName', 'studentLastName');
            $studentCond = $db->createConditional($tbl->getField('studentId'),
                    $studentTbl->getField('id'));

            $db->joinResources($tbl, $studentTbl, $studentCond, 'left');

            if (!empty($options['search'])) {
                $studentNameSearch = $this->searchOnName($db, $studentTbl,
                        $options['search']);
            }
        }
        if ($parentNameSearch) {
            if ($studentNameSearch) {
                $db->addConditional($db->createConditional($parentNameSearch,
                                $studentNameSearch, 'or'));
            } else {
                $db->addConditional($parentNameSearch);
            }
        } elseif ($studentNameSearch) {
            $db->addConditional($studentNameSearch);
        }

        if (!empty($options['incompleteOnly'])) {
            $tbl->addFieldConditional('completed', 0);
        }

        if (empty($sortBy)) {
            $tbl->addOrderBy('createDate', 'desc');
        } else {
            switch ($sortBy) {
                case 'lastName':
                    if (isset($visTbl)) {
                        $visTbl->addOrderBy($sortBy, $sortDir);
                    }
                    break;
                case 'studentLastName':
                    if (isset($studentTbl)) {
                        $studentTbl->addOrderBy('lastName', $sortDir);
                    }
                    break;

                default:
                    $tbl->addOrderBy($sortBy, $sortDir);
            }
        }

        if (!empty($options['useLimit'])) {
            $limit = $options['limit'] + 1;
            $offset = $options['limit'] * $options['offset'];
            $db->setLimit($limit, $offset);
            $listing = $db->select() ?? [];
            if ($more = count($listing) > 10) {
                array_pop($listing);
            }

            return ['listing' => $listing, 'more' => $more];
        } else {
            return $db->select();
        }
    }

    public function getVisitorInfo(int $conferenceId, array $registrations)
    {
        $questionFactory = new ConferenceQuestionFactory;
        $questions = $questionFactory->listing(['conferenceId' => $conferenceId]);
        if (empty($questions)) {
            return;
        }
        $visitorInfoFactory = new VisitorInfoFactory;
        $answers = $visitorInfoFactory->listing(['conferenceId' => $conferenceId]);
        $indexedAnswers = $visitorInfoFactory->indexByRegistration($answers);
        $regAnswers = [];
        foreach ($registrations as $reg) {
            foreach ($questions as $q) {
                $qInx = 'q' . $q['sort'] . '-' . addslashes(substr($q['question'],
                                        0, 20));
                $regAnswers[$reg['id']][$qInx] = $indexedAnswers[$reg['id']][$q['id']] ?? '';
            }
        }
        return $regAnswers;
    }

    /**
     * Completes a registration if it is determined to be in a free session.
     *
     * @param Resource $registration
     */
    public function completeFree(RegistrationResource $registration)
    {
        $session = $this->getSession($registration);
        if ($session->registerCost == 0 && $registration->totalCost == 0) {
            $registration->completed = 1;
            $this->save($registration);
            $this->emailDetails($registration);
            $paymentFactory = new PaymentFactory();
            $paymentFactory->closeFreePayments($registration->id);
        }
    }

    private function searchOnName(\phpws2\Database\DB $db,
            \phpws2\Database\Table $tbl, string $search)
    {
        $search = preg_replace('/[^\w\s]/', '', $search);
        $firstName = $tbl->getField('firstName');
        $lastName = $tbl->getField('lastName');
        $cond1 = $db->createConditional($firstName, $search . '%', 'like');
        $cond2 = $db->createConditional($lastName, $search . '%', 'like');
        $cond3 = $db->createConditional($cond1, $cond2, 'or');
        return $cond3;
        //$db->addConditional($cond3);
    }

    /**
     * Updates a registration. Visitor, conference, and session id may are untouched.
     * @param Resource $registration
     * @param Request $request
     */
    public function put(Resource $registration, Request $request)
    {
        $registration->stamp();
        $registration->guestCount = $request->pullPutInteger('guestCount');
        $registration->mealTickets = $request->pullPutInteger('mealTickets');
        $registration->veggieMeals = $request->pullPutInteger('veggieMeals');
        $this->processTotalCost($registration);
        LogFactory::log('Registration updated', $registration);
    }

    public function processTotalCost(Resource $registration)
    {
        $sessionFactory = new SessionFactory;
        $studentFactory = new StudentFactory;
        $student = $studentFactory->load($registration->studentId);
        $session = $sessionFactory->load($registration->sessionId);
        $registration->discount = $student->discountAmount;
        $registerCost = $session->registerCost - $student->discountAmount;
        $guestCost = $session->guestCost;
        $mealCost = $session->mealCost;
        $totalCost = $registerCost + ($guestCost * $registration->guestCount) + ($mealCost * $registration->mealTickets);
        $registration->totalCost = $totalCost;
    }

    public function getConference(Resource $registration)
    {
        $conferenceFactory = new ConferenceFactory;
        return $conferenceFactory->load($registration->conferenceId);
    }

    public function getSession(Resource $registration)
    {
        $sessionFactory = new SessionFactory();
        return $sessionFactory->load($registration->sessionId);
    }

    /**
     * Returns array of values from the registration including conference, session, location,
     * visitor, guest, and student sub-arrays.
     * @param Resource $registration
     * @param array $limit
     * @return array
     */
    public function registrationVars(Resource $registration, array $limit = []): array
    {
        $session = $this->getSession($registration);
        $locFactory = new LocationFactory;
        $visitorFactory = new VisitorFactory;
        $guestFactory = new GuestFactory;
        $studentFactory = new StudentFactory;

        $vars['registration'] = $registration->getStringVars();
        if (empty($limit) || in_array('conference', $limit)) {
            $vars['conference'] = $this->getConference($registration)->getStringVars();
        }
        if (empty($limit) || in_array('session', $limit)) {
            $vars['session'] = $session->getStringVars();
        }
        if (empty($limit) || in_array('location', $limit)) {
            $vars['location'] = $locFactory->load($session->locationId)->getStringVars();
        }
        if (empty($limit) || in_array('visitor', $limit)) {
            $vars['visitor'] = $visitorFactory->load($registration->visitorId)->getInfo();
        }
        if (empty($limit) || in_array('guests', $limit)) {
            $vars['guests'] = $guestFactory->listing(['registrationId' => $registration->id]);
        }
        if (empty($limit) || in_array('student', $limit)) {
            $vars['student'] = $studentFactory->load($registration->studentId)->getStringVars();
        }

        $vars['registrationId'] = $registration->id;
        $vars['supplementAllowed'] = $session->signupEnd > time();
        return $vars;
    }

    /**
     * Email the visitor details about their registration
     * @param Resource $registration
     */
    public function emailDetails(Resource $registration)
    {
        $vars = $this->registrationVars($registration);

        $vars['subject'] = $vars['conference']['title'] . ' registration complete';
        $vars['locationUrl'] = \Canopy\Server::getSiteUrl() . 'conference/User/Location/' . $vars['location']['id'];
        $vars['loginUrl'] = \Canopy\Server::getSiteUrl() . 'conference/User/Visitor/login';
        $vars['conferenceUrl'] = \Canopy\Server::getSiteUrl() . 'conference/User/Conference/' . $vars['conference']['id'];
        $vars['registrationUrl'] = \Canopy\Server::getSiteUrl() . 'conference/Visitor/Registration/' . $vars['registration']['id'];

        $from = SettingsFactory::getSwiftMailReply();
        $template = new \phpws2\Template($vars);
        $template->setModuleTemplate('conference', 'Email/RegistrationInfo.html');
        $content = $template->get();

        $this->sendEmail($vars['subject'], $from, $vars['visitor']['email'],
                $content);
        $this->emailGuestNewRegistration($vars);
        $this->emailStudentRegistration($vars);
        LogFactory::log('System emailed registration details', $registration);
    }

    private function emailStudentRegistration(array $registrationVars)
    {
        $registration = [];
        $conference = [];
        $student = [];
        extract($registrationVars);
        $from = SettingsFactory::getSwiftMailReply();

        $subject = $conference['title'] . ' parent registration complete';
        $template = new \phpws2\Template($registrationVars);
        $template->setModuleTemplate('conference',
                'Email/StudentRegistrationInfo.html');
        $content = $template->get();
        $this->sendEmail($subject, $from, $student['email'], $content);
    }

    private function emailGuestNewRegistration(array $registrationVars)
    {
        $registration = [];
        $conference = [];
        extract($registrationVars);

        $guestFactory = new GuestFactory();
        $guests = $guestFactory->listing(['registrationId' => $registration['id']]);
        if (empty($guests)) {
            return;
        }
        $from = SettingsFactory::getSwiftMailReply();

        $subject = $conference['title'] . ' guest registration complete';

        foreach ($guests as $guest) {
            $registrationVars['guest'] = $guest;
            $template = new \phpws2\Template($registrationVars);
            $template->setModuleTemplate('conference',
                    'Email/GuestRegistrationInfo.html');
            $content = $template->get();
            $this->sendEmail($subject, $from, $guest['email'], $content);
        }
    }

    /**
     * Returns registration linked to a unique student id
     * @param int $studentId
     * @return boolean
     */
    public function getByStudentId(int $visitorId, int $studentId, int $sessionId)
    {
        $registration = $this->build();
        $db = Database::getDB();
        $tbl = $db->addTable('conf_registration');
        $tbl->addFieldConditional('studentId', $studentId);
        $tbl->addFieldConditional('visitorId', $visitorId);
        $tbl->addFieldConditional('sessionId', $sessionId);
        if ($data = $db->selectOneRow()) {
            $registration->setVars($data);
            return $registration;
        } else {
            return false;
        }
    }

    /**
     * Returns the current registration (if exists) of a visitor in the session.
     * @param int $visitorId
     * @param int $sessionId
     */
    public function getIncompleteRegistration(int $visitorId, int $sessionId,
            $allowCancelled = true)
    {
        $registration = $this->build();
        $db = Database::getDB();
        $tbl = $db->addTable('conf_registration');
        if (!$allowCancelled) {
            $tbl->addFieldConditional('cancelled', 0);
        }
        $tbl->addFieldConditional('visitorId', $visitorId);
        $tbl->addFieldConditional('sessionId', $sessionId);
        $tbl->addFieldConditional('completed', 0);
        if ($db->selectInto($registration)) {
            return $registration;
        } else {
            return false;
        }
    }

    public function createRegistration(int $visitorId, int $sessionId,
            int $studentId): Resource
    {
        $sessionFactory = new SessionFactory();
        $session = $sessionFactory->load($sessionId);
        $studentFactory = new StudentFactory;
        $student = $studentFactory->load($studentId);

        $registration = $this->build();
        $registration->totalCost = $session->registerCost - $student->discountAmount;
        $registration->stamp();
        $registration->visitorId = $visitorId;
        $registration->sessionId = $sessionId;
        $registration->conferenceId = $session->conferenceId;
        $registration->studentId = $studentId;
        $registration->discount = $student->discountAmount;
        $this->save($registration);
        LogFactory::log('Created new registration', $registration);
        return $registration;
    }

    public function paymentDue(Resource $registration)
    {
        if ($registration->totalCost === 0) {
            return false;
        }
        return $registration->totalCost > $registration->amountPaid;
    }

    /**
     * Returns all currently incomplete registrations for a specific visitor
     * Cancelled registrations are not included.
     * @param int $visitorId
     * @returns array
     */
    public function getRegistrationsByVisitorId(int $visitorId,
            $completeStatus = true): array
    {
        $db = Database::getDB();
        $regTbl = $db->addTable('conf_registration');
        $confTbl = $db->addTable('conf_conference');
        $confTbl->addField('title', 'conferenceTitle');
        $sessionTbl = $db->addTable('conf_session');
        $sessionTbl->addField('title', 'sessionTitle');
        $regTbl->addFieldConditional('visitorId', $visitorId);
        $regTbl->addFieldConditional('completed', $completeStatus ? 1 : 0);
        $regTbl->addFieldConditional('cancelled', 0);
        $db->joinResources($regTbl, $confTbl,
                $db->createConditional($regTbl->getField('conferenceId'),
                        $confTbl->getField('id'), '='), 'left');
        $db->joinResources($regTbl, $sessionTbl,
                $db->createConditional($regTbl->getField('sessionId'),
                        $sessionTbl->getField('id'), '='), 'left');

        $result = $db->select();

        return $result;
    }

    /**
     * Completes a registration by applying the payment. Supplements handled
     * in own factory.
     * @param Resource $registration
     * @param PaymentResource $payment
     */
    public function applyPayment(RegistrationResource $registration,
            PaymentResource $payment)
    {
        $totalPayment = $payment->amount + $registration->amountPaid;
        $registration->amountPaid = $totalPayment;
        $registration->totalCost = $totalPayment;
        if ($registration->amountDue() == 0) {
            $registration->completed = 1;
            $sessionFactory = new SessionFactory;
            $sessionFactory->checkSoftCap($registration->sessionId);
        }
        $this->save($registration);
    }

    public function count(int $sessionId)
    {
        $db = Database::getDB();
        $tbl = $db->addTable('conf_registration');
        $tbl->addFieldConditional('sessionId', $sessionId);
        $exp = new Database\Expression('count(id)', 'count');
        $tbl->addField($exp);
        $result = $db->selectOneRow();
        return $result['count'];
    }

    public function updateIncompletePayment(RegistrationResource $registration,
            \conference\Resource\VisitorResource $visitor)
    {
        $paymentFactory = new PaymentFactory();
        $payment = $paymentFactory->getCurrentRegistrationPayment($registration);
        $conferenceFactory = new ConferenceFactory;
        $conference = $conferenceFactory->load($registration->conferenceId);
        if (!$payment) {
            if ($conference->accountId) {
                $accountFactory = new AccountFactory();
                $account = $accountFactory->loadByConferenceId($conference->id);
                $payment = $paymentFactory->createRegistrationPayment($registration,
                        $account, $visitor);
            } else {
                $payment = $paymentFactory->createPayOnSite($registration,
                        $visitor);
            }
        }
        $payment->amount = $registration->totalCost;
        $paymentFactory->save($payment);
        LogFactory::log('Updated incomplete payment', $payment);
    }

    public function adminUpdate(Resource $registration, array $guests,
            int $newGuests, int $newMeals)
    {
        $guestFactory = new GuestFactory;
        $visitorFactory = new VisitorFactory;
        $visitor = $visitorFactory->load($registration->visitorId);

        $registration->guestCount = $registration->guestCount + $newGuests;
        $registration->mealTickets = $registration->mealTickets + $newMeals;
        $this->processTotalCost($registration);
        $this->save($registration);
        $this->updateIncompletePayment($registration, $visitor);
        $guestFactory->addRegistrationGuests($registration, $guests);

        LogFactory::log("Added $newGuests guests and $newMeals meals to the registration administratively",
                $registration);
    }

    private function emailSessionChange(Resource $registration)
    {
        $vars = $this->registrationVars($registration);

        $vars['subject'] = $subject = $vars['conference']['title'] . ': ' . $vars['session']['title'] . ' session change';
        $vars['locationUrl'] = \Canopy\Server::getSiteUrl() . 'conference/User/Location/' . $vars['location']['id'];

        $from = SettingsFactory::getSwiftMailReply();
        $template = new \phpws2\Template($vars);
        $template->setModuleTemplate('conference', 'Email/SessionChanged.html');
        $content = $template->get();
        $this->sendEmail($subject, $from, $vars['visitor']['email'], $content);
        LogFactory::log('Emailed session change details', $registration);
    }

    public function changeSession(Resource $registration, int $sessionId)
    {
        $oldCost = (float) $registration->totalCost;
        $oldSession = $this->getSession($registration);

        $registration->sessionId = $sessionId;
        $newSession = $this->getSession($registration);

        $this->processTotalCost($registration);
        $newCost = (float) $registration->totalCost;
        if ($registration->completed && $oldCost !== $newCost) {
            LogFactory::log("Could not change session due to difference in cost",
                    $registration);
            throw new \Exception('Could not change session due to cost difference.');
        }

        $this->save($registration);

        if (!$registration->completed) {
            $visitorFactory = new VisitorFactory;
            $visitor = $visitorFactory->load($registration->visitorId);
            $this->updateIncompletePayment($registration, $visitor);
        }
        PaymentFactory::updateSessionByRegistration($registration);

        $oldDate = strftime('%B %e, %Y', $oldSession->eventDate);
        $newDate = strftime('%B %e, %Y', $newSession->eventDate);

        LogFactory::log("Session changed from $oldDate (id #$oldSession->id) to $newDate (id #$newSession->id)",
                $registration);
        $this->emailSessionChange($registration);
    }

    public function cancel(RegistrationResource $registration)
    {
        $registration->stampCancelledDate();
        $registration->cancelledBy = \Current_User::getUsername();
        $registration->cancelled = true;
    }

    public function arrived(int $registrationId)
    {
        $registration = $this->load($registrationId);
        $registration->stampArrived();
        $this->save($registration);
    }

    public function unarrived(int $registrationId)
    {
        $registration = $this->load($registrationId);
        $registration->removeArrived();
        $this->save($registration);
    }

    public static function isCompleted(int $registrationId): bool
    {
        $self = new self;
        $registration = $self->load($registrationId);
        return (bool) $registration->completed;
    }

    /**
     * Permanently deletes registrations associated with a visitor.
     * Guests are also deleted permanently.
     * @param int $visitorId
     */
    public static function deleteByVisitorId(int $visitorId)
    {
        $db = Database::getDB();
        $tbl = $db->addTable('conf_registration');
        $tbl->addFieldConditional('visitorId', $visitorId);
        $regs = $db->select();
        $guestFactory = new GuestFactory;
        foreach ($regs as $r) {
            $guestFactory->deleteByRegistrationId($r['id']);
        }
        $db->delete();
    }

}
