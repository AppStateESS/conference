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

use conference\Factory\SessionFactory;
use phpws2\Template;
use conference\Factory\ConferenceFactory;
use conference\Factory\VisitorFactory;
use conference\Factory\StudentFactory;
use conference\Factory\RegistrationFactory;
use conference\Resource\SessionResource;
use conference\Resource\StudentResource;

class SessionView extends AbstractView
{

    /**
     * @var conference\Factory\SessionFactory
     */
    protected $factory;

    public function __construct()
    {
        $this->loadFactory();
    }

    public function loadFactory()
    {
        $this->factory = new SessionFactory;
    }

    public function adminListing(int $conferenceId)
    {
        $conferenceFactory = new ConferenceFactory;
        $conference = $conferenceFactory->load($conferenceId);
        $locationId = $conference->locationId;
        return $this->scriptView('Session',
                        ['conferenceId' => $conferenceId, 'locationId' => $locationId, 'sessionSoftCap' => SessionFactory::SOFTCAP_PADDING]);
    }

    public function signupListing(int $conferenceId)
    {
        $listing = $this->factory->listing(['conferenceId' => $conferenceId, 'sortBy' => 'eventDate', 'sortDir' => 'desc', 'activeOnly' => true]);
        if (empty($listing)) {
            return '<p>No sessions found for this conference. Please check back later.</p>';
        }
        $titleSort = [];
        foreach ($listing as $session) {
            $title = $session['title'];
            $titleSort[$title][] = $session;
        }
        ksort($titleSort);
        $vars['titleSort'] = $titleSort;
        $template = new Template($vars);
        $template->setModuleTemplate('conference', 'Session/SignupListing.html');
        return $template->get();
    }

    public function signup(int $sessionId, int $registrationId, int $studentId)
    {
        $now = time();
        $studentFactory = new StudentFactory;
        $student = $studentFactory->load($studentId);
        $conferenceFactory = new ConferenceFactory;
        $session = $this->factory->load($sessionId);
        // TODO this should be moved out
        $conference = $conferenceFactory->load($session->conferenceId);
        $tpl['conferenceTitle'] = $conference->title;
        $tpl['sessionTitle'] = $session->title;
        $tpl['sessionDate'] = $session->getEventDateRange();
        $tpl['pricing'] = $this->pricing($session, $student);
        $tpl['studentName'] = "$student->firstName $student->lastName";
        if ($session->signupStart > $now) {
            $tpl['notTimeYet'] = 'Sign up starts on ' . strftime('%B %e, %Y at %l:%M %p.',
                            $session->signupStart);
        } elseif ($session->signupEnd < $now) {
            $tpl['notTimeYet'] = 'Sorry, but sign up ended on ' . strftime('%B %e, %Y at %l:%M %p.',
                            $session->signupStart);
        } else {
            $vars['session'] = $session->getStringVars();
            $vars['studentId'] = $student->id;
            $vars['onsite'] = \conference\Factory\LockedFactory::isLocked();
            $vars['registrationId'] = $registrationId;
            $vars['visitorId'] = VisitorFactory::getCurrentId();
            $tpl['form'] = $this->scriptView('SessionSignup', $vars);
        }

        $template = new Template($tpl);
        $template->setModuleTemplate('conference', 'Session/Signup.html');
        return $template->get();
    }

    private function pricing(SessionResource $session, StudentResource $student)
    {
        if ($session->registerCost == 0) {
            return null;
        }
        $vars['registerCost'] = $session->registerCost;
        $vars['guestCost'] = $session->guestCost;
        $vars['mealIncluded'] = $session->mealIncluded ? 1 : 0;
        $vars['extraMeal'] = false;
        if ($session->mealService) {
            if ($session->mealCost > 0) {
                $vars['mealCost'] = $session->mealCost;
                if ($session->mealIncluded) {
                    $message = 'Meal included in registration cost.<br />Extra tickets may be purchased for other participants.';
                    $vars['extraMeal'] = true;
                } else {
                    $message = 'Meals tickets may be bought in advance.';
                    $vars['extraMeal'] = false;
                }
                $vars['mealIncludedMessage'] = '<div class="rounded small bg-info text-light p-2">' . $message . '</div>';
            } else {
                $vars['mealCost'] = null;
                $vars['mealIncludedMessage'] = $session->mealIncluded ? '<div class="rounded small bg-info p-2">Meal provided with each registration.</div>' : null;
            }
        } else {
            $vars['mealCost'] = null;
        }
        if (!empty($student->discountAmount)) {
            $vars['discountAmount'] = $student->discountAmount;
            $vars['discountLabel'] = $student->discountLabel;
        }

        $template = new Template($vars);
        $template->setModuleTemplate('conference', 'Session/Pricing.html');
        return $template->get();
    }

    public function signin(SessionResource $session)
    {
        $eventDate = $session->eventDate;
        $eventDateFormat = strftime('%Y-%m-%d', $eventDate);
        return $this->scriptView('Signin', ['sessionId' => $session->id]);
    }

    public static function signupOver(SessionResource $session)
    {
        $conferenceFactory = new ConferenceFactory;
        $conference = $conferenceFactory->load($session->conferenceId);
        $tpl = $session->getStringVars();
        $tpl['conferenceTitle'] = $conference->title;

        $template = new Template($tpl);
        $template->setModuleTemplate('conference', 'Session/SignupOver.html');
        return $template->get();
    }

}
