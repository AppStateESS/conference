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

namespace conference\Resource;

class SessionResource extends AbstractResource
{

    protected $conferenceId;
    protected $title;

    /**
     * Date of session. In 8 digit format 20190504
     * @var \phpws2\Variable\IntegerVar
     */
    protected $eventDate;

    /**
     * Time session begins in military time: 1330
     * @var \phpws2\Variable\SmallInteger
     */
    protected $startTime;

    /**
     * Time session ends in military time: 1530
     * @var \phpws2\Variable\SmallInteger
     */
    protected $endTime;

    /**
     * Number of days of session
     * @var \phpws2\Variable\SmallInteger
     */
    protected $days;

    /**
     * Unix time sign up is allowed
     * @var \phpws2\Variable\DateTime
     */
    protected $signupStart;

    /**
     * Unix time after which sign up is not allowed
     * @var \phpws2\Variable\DateTime
     */
    protected $signupEnd;

    /**
     * Cost of registration in dollars
     *
     * @var \phpws2\Variable\FloatVar
     */
    protected $registerCost;

    /**
     * Whether the session should allow guest signup
     * @var \phpws2\Variable\Boolean
     */
    protected $allowGuest;

    /**
     * Cost of extra guests in dollars
     * @var \phpws2\Variable\FloatVar
     */
    protected $guestCost;

    /**
     * Maximum people per registration (1 register + 3 guests = 4 attendees.
     * @var \phpws2\Variable\SmallInteger
     */
    protected $attendanceCap;

    /**
     * If true, a meal is included with the registration.
     * @var \phpws2\Variable\BooleanVar
     */
    protected $mealIncluded;

    /**
     * Cost of meal if purchased separately in dollars
     * @var \phpws2\Variable\FloatVar
     */
    protected $mealCost;

    /**
     * If true, meal service is part of the session.
     * @var \phpws2\Variable\BooleanVar
     */
    protected $mealService;

    /**
     * Id of location.
     * @var \phpws2\Variable\IntegerVar
     */
    protected $locationId;

    /**
     * Number of registrations allowed for session.
     * Default is 0 (no limit)
     * @var \phpws2\Variable\IntegerVar
     */
    protected $softCap;
    protected $capWarningSent;

    /**
     * If true, session is currently active
     * @var \phpws2\Variable\BooleanVar
     */
    protected $active;
    protected $registrationCount;

    /**
     * Conference named pulled from join
     * @var object
     */
    //public $conference;
    protected $table = 'conf_session';

    public function __construct()
    {
        parent::__construct();

        $this->conferenceId = new \phpws2\Variable\IntegerVar(null,
                'conferenceId');
        $this->title = new \phpws2\Variable\TextOnly(null, 'title', 255);
        $this->title->allowEmpty(false);
        $this->eventDate = new \phpws2\Variable\IntegerVar(0, 'eventDate');
        $this->days = new \phpws2\Variable\SmallInteger(1, 'days');
        $this->startTime = new \phpws2\Variable\TextOnly('0000', 'startTime');
        $this->startTime->setLimit(4);
        $this->endTime = new \phpws2\Variable\TextOnly('0000', 'endTime');
        $this->endTime->setLimit(4);
        $this->signupStart = new \phpws2\Variable\IntegerVar(null, 'signupStart');
        $this->signupEnd = new \phpws2\Variable\IntegerVar(null, 'signupEnd');
        $this->registerCost = new \phpws2\Variable\FloatVar(0.00, 'registerCost');
        $this->registerCost->setPrecision(7, 2);
        $this->allowGuest = new \phpws2\Variable\BooleanVar(false, 'allowGuest');
        $this->guestCost = new \phpws2\Variable\FloatVar(0.00, 'guestCost');
        $this->guestCost->setPrecision(7, 2);
        $this->attendanceCap = new \phpws2\Variable\SmallInteger(8,
                'attendanceCap');
        $this->mealService = new \phpws2\Variable\BooleanVar(false,
                'mealService');
        $this->mealIncluded = new \phpws2\Variable\BooleanVar(false,
                'mealIncluded');
        $this->mealCost = new \phpws2\Variable\FloatVar(0.00, 'mealCost');
        $this->mealCost->setPrecision(7, 2);
        $this->locationId = new \phpws2\Variable\IntegerVar(null, 'locationId');
        $this->locationId->allowNull(false);
        $this->registrationCount = new \phpws2\Variable\IntegerVar(0,
                'registrationCount');
        $this->softCap = new \phpws2\Variable\IntegerVar(0, 'softCap');
        $this->capWarningSent = new \phpws2\Variable\BooleanVar(false,
                'capWarningSent');
        $this->active = new \phpws2\Variable\BooleanVar(0, 'active');

        $this->doNotSave('registrationCount');
    }

    public function getStringVars($return_null = false, $hide = NULL)
    {
        $vars = parent::getStringVars();
        $this->formatDates($vars);
        return $vars;
    }

    public function getEventDateRange()
    {
        if ($this->days->get() == 1) {
            return strftime('%B %e, %Y', $this->eventDate->get());
        }
        $lastDay = $this->eventDate->get() + ($this->days->get() * 86400);
        $differentMonth = strftime('%m', $this->eventDate->get()) !== strftime('%m',
                        $lastDay);
        $differentYear = strftime('%Y', $this->eventDate->get()) !== strftime('%Y',
                        $lastDay);

        if ($differentMonth) {
            if ($differentYear) {
                return strftime('%B %e, %Y', $this->eventDate->get()) . ' - ' . strftime('%B %e, %Y',
                                $lastDay);
            } else {
                return strftime('%B %e', $this->eventDate->get()) . ' - ' . strftime('%B %e, %Y',
                                $lastDay);
            }
        } else {
            return strftime('%B %e', $this->eventDate->get()) . ' - ' . strftime('%e, %Y',
                            $lastDay);
        }
    }

    private function formatDates(&$vars)
    {
        extract($vars);
        $vars['eventDateFormat'] = strftime('%B %e, %Y', $eventDate);
        $vars['eventDateRange'] = $this->getEventDateRange();
        $vars['startTimeFormat'] = $this->hourFormat($startTime);
        $vars['endTimeFormat'] = $this->hourFormat($endTime);
        $vars['signupStartFormat'] = strftime('%l:%M %p, %B %e, %Y',
                $signupStart);
        $vars['signupEndFormat'] = strftime('%l:%M %p, %B %e, %Y', $signupEnd);
    }

    private function hourFormat($time)
    {
        $hour = floor($time / 100);
        $minute = $time % 100;
        if ($hour > 12) {
            $hourStr = (string) ($hour - 12);
        } else {
            $hourStr = (string) $hour;
        }
        $minuteStr = (string) $minute;
        if ($minute < 10) {
            $minuteStr = '0' . $minuteStr;
        }
        $ampm = $hour > 11 ? 'PM' : 'AM';
        return "$hourStr:$minuteStr $ampm";
    }

}
