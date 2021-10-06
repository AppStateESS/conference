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
                $this->content[] = 'New code for free registration';
                $this->content[] = 'Added ability to disable the visitor interaction';
                $this->content[] = 'Added refund report';
                $this->content[] = '</pre>';

            case $this->compare('1.4.1'):
                $this->content[] = '<pre>';
                $this->content[] = '1.4.1';
                $this->content[] = '------------------------';
                $this->content[] = 'Added email list report';
                $this->content[] = '</pre>';

            case $this->compare('1.4.2'):
                $this->content[] = '<pre>';
                $this->content[] = '1.4.2';
                $this->content[] = '------------------------';
                $this->content[] = '- Enter key on student search username field submits the form now.';
                $this->content[] = '- Extended visitor activation from two hours to twelve.';
                $this->content[] = '- Fixed session end time bug.';
                $this->content[] = '</pre>';

            case $this->compare('1.4.3'):
                $this->content[] = '<pre>';
                $this->content[] = '1.4.3';
                $this->content[] = '------------------------';
                $this->content[] = '- Added report that lists all emails from a conference';
                $this->content[] = '</pre>';

            case $this->compare('1.4.4'):
                $this->v144();
                $this->content[] = '<pre>';
                $this->content[] = '1.4.4';
                $this->content[] = '------------------------';
                $this->content[] = '- Added session comments';
                $this->content[] = '- Better log in errors';
                $this->content[] = '- More obvious activation message';
                $this->content[] = '</pre>';

            case $this->compare('1.4.5'):
                $this->content[] = '<pre>';
                $this->content[] = '1.4.5';
                $this->content[] = '------------------------';
                $this->content[] = '- Session changes log improvement';
                $this->content[] = '- Fixed note saving on new sessions';
                $this->content[] = '- Added session date to registration admin view';
                $this->content[] = '- Can now change Visitor email, password, and phone number';
                $this->content[] = '- Can change visitor session from history view';
                $this->content[] = '</pre>';

            case $this->compare('1.4.6'):
                $this->content[] = '<pre>';
                $this->content[] = '1.4.6';
                $this->content[] = '------------------------';
                $this->content[] = '- NPM package updates';
                $this->content[] = '</pre>';

            case $this->compare('1.4.7'):
                $this->content[] = '<pre>';
                $this->content[] = '1.4.7';
                $this->content[] = '------------------------';
                $this->content[] = '- NPM package updates';
                $this->content[] = '- Fixed Session admin bugs';
                $this->content[] = '</pre>';
            case $this->compare('1.4.8'):
                $this->content[] = '<pre>';
                $this->content[] = '1.4.8';
                $this->content[] = '------------------------';
                $this->content[] = '- Updated travis';
                $this->content[] = '</pre>';
            case $this->compare('1.4.9'):
                $this->content[] = '<pre>';
                $this->content[] = '1.4.9';
                $this->content[] = '------------------------';
                $this->content[] = '- Editor stripped due to bugs.';
                $this->content[] = '</pre>';
            case $this->compare('1.5.0'):
                $this->content[] = '<pre>';
                $this->content[] = '1.5.0';
                $this->content[] = '------------------------';
                $this->content[] = '- Fixed editor.';
                $this->content[] = '- Fixed mixed questions appearing.';
                $this->content[] = '- Updated packages.';
                $this->content[] = '</pre>';
            case $this->compare('1.5.1'):
                $this->content[] = '<pre>';
                $this->content[] = '1.5.1';
                $this->content[] = '------------------------';
                $this->content[] = '- Fixed asset update adding auto directory.';
                $this->content[] = '</pre>';
            case $this->compare('1.6.0'):
                $this->v160();
                $this->content[] = '<pre>';
                $this->content[] = '1.6.0';
                $this->content[] = '------------------------';
                $this->content[] = 'Fixed: Old registrations pulled up from previous conferences.';
                $this->content[] = 'Fixed: Deleting station lock no removes locked session.';
                $this->content[] = 'Fixed: JSON get error returning HTML. Now throws exception.';
                $this->content[] = 'Fixed: Updated SwiftMailer calls.';
                $this->content[] = 'Fixed: All email addresses forced to lower case.';
                $this->content[] = 'Fixed: Empty Visitor accounts created.';
                $this->content[] = 'Fixed: Locked session only working on correct date.';
                $this->content[] = 'Fixed: WYSIWYG editor.';
                $this->content[] = 'Fixed: Cancellation only allowed if totalCost is 0.';
                $this->content[] = 'Fixed: Canceled registrations do not prevent new registrations.';
                $this->content[] = 'Fixed: Bugs with previous registration listing.';
                $this->content[] = 'Fixed: Better progress logic.';
                $this->content[] = 'Fixed: Refund report.';
                $this->content[] = 'Fixed: Contact name and address not sent in email.';

                $this->content[] = 'Added: Check for orientation Banner Table.';
                $this->content[] = 'Added: Hash check on password change.';
                $this->content[] = 'Added: Visitor and Guest extra information';
                $this->content[] = 'Added: Email passed through creation process.';
                $this->content[] = 'Added: Student locking has session listing.';
                $this->content[] = 'Added: Default state on visitor form.';
                $this->content[] = 'Added: Cancel option on zero cost registrations.';
                $this->content[] = 'Added: Access to admin actions on other screens.';
                $this->content[] = 'Added: Key IDs in listings.';
                $this->content[] = 'Added: Ability to view registrations assigned to students.';
                $this->content[] = 'Added: Can now search registration by parent email.';
                $this->content[] = 'Added: Deleted conferences not listed on report screen unless requested.';

                $this->content[] = 'Removed: Onsite parent Banner requests.';
                $this->content[] = 'Removed: Conference questions.';

                $this->content[] = 'Changed: Print button only shown on complete registrations';
                $this->content[] = 'Changed: Account creation prompt higher on page.';
                $this->content[] = 'Changed: Better wording for parents.';
                $this->content[] = 'Changed: conference listing titles link to session list.';

                $this->content[] = '- Added additional visitor/guest demographic information.';
                $this->content[] = '+++++++++++++++++++++ UPDATE YOUR sendmail.php config file!! ++++++++++++++++';
                $this->content[] = '</pre>';

            case $this->compare('1.6.1'):
                $this->content[] = '<pre>';
                $this->content[] = '1.6.1';
                $this->content[] = '------------------------';
                $this->content[] = '- Fixed bug with admin payment screen.';
                $this->content[] = '</pre>';
        }
        return $this->content;
    }

    private function v120()
    {
        $db = Database::getDB();
        $tbl = $db->addTable('conf_session');
        $capWarningSent = new \phpws2\Database\Datatype\Boolean($tbl, 'capWarningSent');
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
        $sessionId = $tbl->addDataType('sessionId', 'int');
        $sessionId->add();
    }

    private function v144()
    {
        $db = Database::getDB();
        $tbl = $db->addTable('conf_session');
        $notes = $tbl->addDataType('notes', 'text');
        $notes->setIsNull(true);
        $notes->add();
    }

    private static function addRelationship($tbl)
    {
        $relationship = $tbl->addDataType('relationship', 'varchar');
        $relationship->setSize(20);
        $relationship->add();
    }

    private static function addEmployer($tbl)
    {
        $employer = $tbl->addDataType('employer', 'varchar');
        $employer->setSize(50);
        $employer->setIsNull(true);
        $employer->add();
    }

    private static function addPosition($tbl)
    {

        $position = $tbl->addDataType('position', 'varchar');
        $position->setSize(25);
        $position->setIsNull(true);
        $position->add();
    }

    private static function addAlum($tbl)
    {

        $alum = $tbl->addDataType('alum', 'boolean');
        $alum->setDefault(0);
        $alum->add();
    }

    private static function addGradYear($tbl)
    {
        $gradYear = $tbl->addDataType('gradYear', 'smallint');
        $gradYear->setDefault(0);
        $gradYear->setSize(25);
        $gradYear->add();
    }

    private static function addHometown($tbl)
    {
        $hometown = $tbl->addDataType('hometown', 'varchar');
        $hometown->setSize(60);
        $hometown->setIsNull(true);
        $hometown->add();
    }

    private function v160()
    {
        $db = Database::getDB();
        $tbl = $db->addTable('conf_visitor');
        $altPhone = $tbl->addDataType('altPhone', 'varchar');
        $altPhone->setIsNull(true);
        $altPhone->setSize(25);
        $altPhone->add();
        self::addRelationship($tbl);
        self::addEmployer($tbl);
        self::addPosition($tbl);
        self::addAlum($tbl);
        self::addGradYear($tbl);
        self::addHometown($tbl);

        $tbl2 = $db->addTable('conf_guest');
        $visitorId = $tbl2->addDataType('visitorId', 'int');
        $visitorId->setDefault(0);
        $visitorId->add();
        $phone = $tbl2->addDataType('phone', 'varchar');
        $phone->setIsNull(true);
        $phone->setSize(25);
        $phone->add();

        self::addRelationship($tbl2);
        self::addEmployer($tbl2);
        self::addPosition($tbl2);
        self::addAlum($tbl2);
        self::addGradYear($tbl2);
        self::addHometown($tbl2);

        $db->exec('update conf_guest as g set g.visitorId = (select r.visitorId from conf_registration as r where r.id=g.registrationId)');
    }

}
