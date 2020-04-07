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
use phpws2\Template;
use Canopy\Request;
use Canopy\Server;
use conference\Resource\VisitorResource as Resource;
use conference\Factory\LogFactory;

class VisitorFactory extends BaseFactory
{

    public function build()
    {
        $resource = new Resource;
        return $resource;
    }

    public static function isLoggedIn()
    {
        return isset($_SESSION['Conference_Visitor']);
    }

    public static function setReturnUrl(string $url = null)
    {
        if (empty($url)) {
            $url = Server::getCurrentUrl();
        }
        $_SESSION['Conference_Login_Return'] = $url;
    }

    public static function clearReturnUrl()
    {
        unset($_SESSION['Conference_Login_Return']);
    }

    public function getReturnUrl()
    {
        $returnUrl = $_SESSION['Conference_Login_Return'] ?? null;
        $this->clearReturnUrl();
        return $returnUrl;
    }

    public function loadByEmail(string $email, bool $activatedOnly = false)
    {
        $visitor = $this->build();
        $db = Database::getDB();
        $tbl = $db->addTable('conf_visitor');
        $tbl->addFieldConditional('email', $email);
        if ($activatedOnly) {
            $tbl->addFieldConditional('activated', 1);
        }
        $result = $db->selectInto($visitor);
        return $result ? $visitor : false;
    }

    public function post(Request $request)
    {
        $visitor = $this->build();
        $visitor->email = $request->pullPostString('email');
        $password = $request->pullPostString('password');
        $visitor->hashPassword($password);
        $visitor->stamp();
        return $visitor;
    }

    public function put(int $id, Request $request)
    {
        $visitor = $this->load($id);
        $visitor->loadPutByType($request,
                ['password', 'activateDeadline', 'hash', 'activated']);
        return $visitor;
    }

    public function clearNotActivated()
    {
        $db = Database::getDB();
        $tbl = $db->addTable('conf_visitor');
        $tbl->addFieldConditional('activateDeadline', time(), '<');
        $tbl->addFieldConditional('activated', 0);
        $db->delete();
    }

    public function sendActivationEmail(Resource $visitor)
    {
        $siteTitle = \Layout::getPageTitle(true);
        $transport = self::getSwiftTransport();
        $subject = 'Activate your new account at ' . $siteTitle;
        $from = SettingsFactory::getSwiftMailReply();
        $vars['hostName'] = $siteTitle;
        $vars['deadline'] = $visitor->formatActivateDeadline();
        $activateLink = Server::getSiteUrl() . 'conference/User/Visitor/activate/?email=' . $visitor->email . '&amp;hash=' . $visitor->hash;
        $vars['activateLink'] = $activateLink;
        $template = new Template($vars);
        $template->setModuleTemplate('conference', 'Email/Activate.html');
        $content = $template->get();

        $message = \Swift_Message::newInstance();
        $message->setSubject($subject);
        $message->setFrom($from);
        $message->setTo($visitor->email);
        $message->setBody($content, 'text/html');
        $mailer = new \Swift_Mailer($transport);
        $mailer->send($message);
        LogFactory::log('Activation email sent to visitor.', $visitor);
    }

    public function activateAccount(string $email, string $hash)
    {
        $visitor = $this->build();
        $db = Database::getDB();
        $tbl = $db->addTable('conf_visitor');
        $tbl->addFieldConditional('email', $email);
        $tbl->addFieldConditional('hash', $hash);
        $tbl->addFieldConditional('activateDeadline', time(), '>');
        $db->selectInto($visitor);
        if (empty($visitor)) {
            return false;
        }
        $visitor->activated = true;
        $this->save($visitor);
        LogFactory::log('Visitor account activated.', $visitor);
        return true;
    }

    public static function setCurrent(Resource $visitor)
    {
        $_SESSION['Conference_Visitor'] = $visitor->getStringVars(true,
                ['password', 'activateDeadline', 'activated', 'hash']);
    }

    public static function getCurrent(): array
    {
        return $_SESSION['Conference_Visitor'] ?? null;
    }

    public static function getCurrentObject(): Resource
    {
        $self = new self;
        $visitor = $self->load(self::getCurrentId());
        return $visitor;
    }

    public static function getCurrentId()
    {
        $visitor = $_SESSION['Conference_Visitor'] ?? null;
        if (empty($visitor)) {
            return null;
        } else {
            return $visitor['id'];
        }
    }

    public static function clearCurrent()
    {
        unset($_SESSION['Conference_Visitor']);
    }

    public function login(string $email, string $password)
    {
        $visitor = $this->loadByEmail($email, true);
        if ($visitor->id && password_verify($password, $visitor->password)) {
            $this->setCurrent($visitor);
            LogFactory::log('Visitor logged in.', $visitor);
            return true;
        } else {
            return false;
        }
    }

    public function sendOnsiteEmail(Resource $visitor, $password)
    {
        $siteTitle = \Layout::getPageTitle(true);
        $transport = self::getSwiftTransport();

        $subject = 'New account created at ' . $siteTitle;
        $from = SettingsFactory::getSwiftMailReply();
        $vars['hostName'] = $siteTitle;
        $vars['password'] = $password;
        $vars['email'] = $visitor->email;
        $template = new Template($vars);
        $template->setModuleTemplate('conference', 'Email/OnsiteCreation.html');
        $content = $template->get();

        $message = \Swift_Message::newInstance();
        $message->setSubject($subject);
        $message->setFrom($from);
        $message->setTo($visitor->email);
        $message->setBody($content, 'text/html');
        $mailer = new \Swift_Mailer($transport);
        $mailer->send($message);
        LogFactory::log('Onsite activation email sent to visitor.', $visitor);
    }

    public function listing(array $options = null)
    {
        $db = Database::getDB();
        $tbl = $db->addTable('conf_visitor');

        if (!empty($options['search'])) {
            $cond1 = new Database\Conditional($db, 'firstName',
                    '%' . $options['search'] . '%', 'like');
            $cond2 = new Database\Conditional($db, 'lastName',
                    '%' . $options['search'] . '%', 'like');
            $cond3 = new Database\Conditional($db, 'email',
                    '%' . $options['search'] . '%', 'like');
            $cond4 = new Database\Conditional($db, $cond1, $cond2, 'or');
            $cond5 = new Database\Conditional($db, $cond3, $cond4, 'or');
            $db->addConditional($cond5);
        }

        if (!empty($options['sortBy']) && !empty($options['sortByDir'])) {
            $tbl->addOrderBy($options['sortBy'], $options['sortByDir']);
        }

        if (!empty($options['limit'])) {
            $limitPlus = (int) $options['limit'] + 1;
            $offset = $options['offset'] ?? 0;
            $db->setLimit($limitPlus, $offset * $options['limit']);
        }
        $columns = ['id', 'email', 'activated', 'firstName', 'lastName', 'address1', 'address2', 'city', 'state', 'zip', 'phone'];
        foreach ($columns as $c) {
            $tbl->addField($c);
        }
        $listing = $db->select();
        $result['more'] = false;
        if (isset($limitPlus)) {
            if (count($listing) > $limitPlus - 1) {
                $result['more'] = true;
                array_pop($listing);
            }
        }
        $result['listing'] = $listing;
        return $result;
    }

    /**
     * Checks the currently logged visitor against an id
     * @param type $visitorId
     */
    public static function checkVisitor(int $visitorId)
    {
        return self::getCurrentId() == $visitorId;
    }

    public function delete($visitorId)
    {
        RegistrationFactory::deleteByVisitorId($visitorId);
        SupplementFactory::deleteByVisitorId($visitorId);
        PaymentFactory::deleteByVisitorId($visitorId);
        $db = Database::getDB();
        $tbl = $db->addTable('conf_visitor');
        $tbl->addFieldConditional('id', $visitorId);
        $db->delete();
    }

    public function activate(int $visitorId)
    {
        $visitor = $this->load($visitorId);
        $visitor->activated = 1;
        $this->save($visitor);
    }

    public function sendForgot($email)
    {
        $visitor = $this->loadByEmail($email);
        if (empty($visitor)) {
            return false;
        }
        $visitor->stamp();
        $this->save($visitor);

        $siteTitle = \Layout::getPageTitle(true);
        $transport = self::getSwiftTransport();
        $subject = 'Password change request from ' . $siteTitle;
        $from = SettingsFactory::getSwiftMailReply();
        $vars['hostName'] = $siteTitle;
        $vars['forgotLink'] = Server::getSiteUrl() . 'conference/User/Visitor/reset/?id=' . $visitor->id . '&amp;hash=' . $visitor->hash;
        $vars['deadline'] = $visitor->formatActivateDeadline();
        $template = new Template($vars);
        $template->setModuleTemplate('conference', 'Email/Forgot.html');
        $content = $template->get();

        $message = \Swift_Message::newInstance();
        $message->setSubject($subject);
        $message->setFrom($from);
        $message->setTo($visitor->email);
        $message->setBody($content, 'text/html');
        $mailer = new \Swift_Mailer($transport);
        $mailer->send($message);
        LogFactory::log('Forgot password email sent.', $visitor);
        return true;
    }

    public function getByHashId(int $id, string $hash)
    {
        if (empty($id) || empty($hash)) {
            return false;
        }
        $db = \phpws2\Database::getDB();
        $tbl = $db->addTable('conf_visitor');
        $tbl->addFieldConditional('id', $id);
        $tbl->addFieldConditional('hash', $hash);
        return $db->selectOneRow();
    }

}