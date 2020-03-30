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
use phpws2\Database;

function conference_update(&$content, $currentVersion)
{
    $update = new ConferenceUpdate($content, $currentVersion);
    $content = $update->run();
    return true;
}

class ConferenceUpdate
{

    private $content;
    private $cversion;

    public function __construct($content, $cversion)
    {
        $this->content = $content;
        $this->cversion = $cversion;
    }

    private function compare($version)
    {
        return version_compare($this->cversion, $version, '<');
    }

    public function run()
    {
        switch (1) {
            case $this->compare('1.1.0'):
                $this->content[] = '<pre>';
                $this->content[] = 'Can search sessions by date';
                $this->content[] = 'Check in page autorefreshes';
                $this->content[] = 'All costs added to session list';
                $this->content[] = 'Meal messages better defined';
                $this->content[] = 'Sessions can be changed after completed registration';
                $this->content[] = 'Fixed deadline button not working when session date changed';
                $this->content[] = 'Error checks added';
                $this->content[] = 'Various fixes';
                $this->content[] = '</pre>';

            case $this->compare('1.2.0'):
                $this->v120();
                $this->content[] = '<pre>';
                $this->content[] = 'Session sends warning email when soft cap approached';
                $this->content[] = '</pre>';

            case $this->compare('1.2.1'):
                $this->content[] = '<pre>';
                $this->content[] = 'Fixed bug with new session creation';
                $this->content[] = 'Fixed conference reload after delete';
                $this->content[] = '</pre>';

            case $this->compare('1.2.2'):
                $this->content[] = '<pre>';
                $this->content[] = 'Fixed payment bug';
                $this->content[] = '</pre>';

            case $this->compare('1.2.3'):
                $this->content[] = '<pre>';
                $this->content[] = 'Added refund/cancel link instead of delete on registration listing';
                $this->content[] = '</pre>';

            case $this->compare('1.2.4'):
                $this->content[] = '<pre>';
                $this->content[] = 'Changed banner match code to prevent adblocker conflicts';
                $this->content[] = 'Fixed settings not including saved contact information.';
                $this->content[] = '</pre>';

            case $this->compare('1.2.5'):
                $this->content[] = '<pre>';
                $this->content[] = 'Session change moved to review process only';
                $this->content[] = 'Session change can be made on incomplete registration';
                $this->content[] = 'Bug fix on visitor registration view.';
                $this->content[] = 'Bug fix on required checkbox';
                $this->content[] = '</pre>';

            case $this->compare('1.2.6'):
                $this->content[] = '<pre>';
                $this->content[] = 'Meal price zeroed out when disabled';
                $this->content[] = 'Hamburger menu works now';
                $this->content[] = 'Fixed variable name in error file.';
                $this->content[] = 'Sessions ordered by date and in shutter menu';
                $this->content[] = '</pre>';

            case $this->compare('1.2.7'):
                $this->content[] = '<pre>';
                $this->content[] = 'Supplemental guests now receive email.';
                $this->content[] = 'Updated language in emails.';
                $this->content[] = '</pre>';

            case $this->compare('1.2.8'):
                $this->content[] = '<pre>';
                $this->content[] = 'Added option default to one conference on main page.';
                $this->content[] = 'Fixed log in button typo.';
                $this->content[] = 'Added session dates to report dropdown.';
                $this->content[] = 'Added scroll up for phone if error on banner search';
                $this->content[] = 'Rewrote student import search';
                $this->content[] = 'Reworded registration information';
                $this->content[] = 'Added dates to session listing in report';
                $this->content[] = 'Fixed banner id search bug.';
                $this->content[] = '</pre>';

            case $this->compare('1.2.9'):
                $this->content[] = '<pre>';
                $this->content[] = 'Added workaround for Edge';
                $this->content[] = '</pre>';

            case $this->compare('1.2.10'):
                $this->content[] = '<pre>';
                $this->content[] = 'Log in language update';
                $this->content[] = '</pre>';

            case $this->compare('1.2.11'):
                $this->content[] = '<pre>';
                $this->content[] = '1.2.11';
                $this->content[] = '------------------------';
                $this->content[] = 'Fixed password email problems.';
                $this->content[] = 'Adding supplement to incomplete registration just updates now.';
                $this->content[] = 'CC recceipt added to listing.';
                $this->content[] = 'Interface helpers added.';
                $this->content[] = 'Smaller bug fixes';
                $this->content[] = '</pre>';

            case $this->compare('1.3.0'):
                $this->content[] = '<pre>';
                $this->content[] = '1.3.0';
                $this->content[] = '------------------------';
                $this->content[] = 'Fixed admin session change';
                $this->content[] = 'Added ability to log in as a visitor';
                $this->content[] = 'Added error check on student matching';
                $this->content[] = 'Fixed payment updates on session changing';
                $this->content[] = 'Added links to visitor name for easier navigation';
                $this->content[] = 'Meal messaging improved';
                $this->content[] = 'Admin payment prohibited on incomplete registration';
                $this->content[] = 'Stronger session deletion prompt';
                $this->content[] = 'Better text in forgot password email';
                $this->content[] = 'Better log out text';
                $this->content[] = 'Fixed partial refund email';
                $this->content[] = '</pre>';

            case $this->compare('1.3.1'):
                $this->content[] = '<pre>';
                $this->content[] = '1.3.1';
                $this->content[] = '------------------------';
                $this->content[] = 'Multiple email and password checks to prevent blank visitors.';
                $this->content[] = 'Fixed blank guest posts and added error checking.';
                $this->content[] = 'Visitors can now be permanently deleted.';
                $this->content[] = 'Visitors can now be permanently deleted.';
                $this->content[] = 'Fixed multiple student registration bug.';
                $this->content[] = 'New wording for login, session change, and guest tickets.';
                $this->content[] = 'Student username added to import screen.';
                $this->content[] = '</pre>';

            case $this->compare('1.3.2'):
                $this->v132();
                $this->content[] = '<pre>';
                $this->content[] = '1.3.2';
                $this->content[] = '------------------------';
                $this->content[] = 'Blank visitors could not be deleted.';
                $this->content[] = 'Automatic student date pull';
                $this->content[] = 'Students can be locked into a date to prevent update.';
                $this->content[] = 'Admins can cancel supplements.';
                $this->content[] = 'Admins can no longer add second supplements.';
                $this->content[] = 'Admin sign in page shows unpaid registrations.';
                $this->content[] = '</pre>';

            case $this->compare('1.4.0'):
                $this->v140();
                $this->content[] = '<pre>';
                $this->content[] = '1.4.0';
                $this->content[] = '------------------------';
                $this->content[] = 'Added onsite login';
                $this->content[] = '</pre>';
        }
        return $this->content;
    }

    private function v120()
    {
        $db = Database::getDB();
        $tbl = $db->addTable('conf_session');
        $capWarningSent = new \phpws2\Database\Datatype\Boolean($tbl,
                'capWarningSent');
        $capWarningSent->add();
    }

    private function v132()
    {
        $db = Database::getDB();
        $tbl = $db->addTable('conf_student');
        $lockDate = $tbl->addDataType('lockDate', 'smallint');
        $lockDate->add();
    }

    private function v140()
    {
        $db = Database::getDB();
        $tbl = $db->addTable('conf_locked');
        $sessionId = $tbl->addDataType('sessionId', 'smallint');
        $sessionId->add();
    }

}
