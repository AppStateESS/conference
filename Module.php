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

namespace conference;

use Canopy\Request;
use Canopy\Response;
use Canopy\Server;
use Canopy\SettingDefaults;
use conference\Controller\Controller;
use conference\Factory\VisitorFactory;

$defineFile = PHPWS_SOURCE_DIR . 'mod/conference/config/defines.php';
if (is_file($defineFile)) {
    require_once $defineFile;
} else {
    require_once PHPWS_SOURCE_DIR . 'mod/conference/config/defines.dist.php';
}

class Module extends \Canopy\Module implements SettingDefaults
{

    public function __construct()
    {
        parent::__construct();
        $this->setTitle('conference');
        $this->setProperName('Conference');
        \spl_autoload_register('\conference\Module::autoloader', true, true);
    }

    public static function autoloader($class_name)
    {
        static $not_found = array();

        if (strpos($class_name, 'conference') !== 0) {
            return;
        }

        if (isset($not_found[$class_name])) {
            return;
        }
        $class_array = explode('\\', $class_name);
        $shifted = array_shift($class_array);
        $class_dir = implode('/', $class_array);

        $class_path = PHPWS_SOURCE_DIR . 'mod/conference/class/' . $class_dir . '.php';


        if (is_file($class_path)) {
            require_once $class_path;
            return true;
        } else {
            $not_found[] = $class_name;
            return false;
        }
    }

    public function getSettingDefaults()
    {
        $settings = array('contactName' => '', 'contactEmail' => '', 'defaultConference' => 0, 'bannerApi' => 0, 'disabled' => 0);
        return $settings;
    }

    public function runTime(Request $request)
    {
        if (\Current_User::allow('conference')) {
            $this->loadAdminBar();
        }

        if (empty($request->getModule())) {
            $conferenceView = new View\ConferenceView;
            $content = $conferenceView->frontPage();
            \Layout::add($content);
        }
    }

    public static function loadAdminBar()
    {
        $auth = \Current_User::getAuthorization();

        $vars['is_deity'] = \Current_User::isDeity();
        $vars['logout_uri'] = $auth->logout_link;
        $vars['username'] = \Current_User::getDisplayName();
        $template = new \phpws2\Template($vars);
        $template->setModuleTemplate('conference', 'navbar.html');
        $content = $template->get();
        \Layout::plug($content, 'NAV_LINKS');
    }

    public function getController(Request $request)
    {
        try {
            $controller = new Controller($this, $request);
            return $controller;
        } catch (\conference\Exception\PrivilegeMissing $e) {
            if ($request->isGet() && !$request->isAjax()) {
                \Current_User::requireLogin();
            } else {
                throw $e;
            }
        } catch (\conference\Exception\VisitorLoginRequired $e) {
            VisitorFactory::setReturnUrl();
            if ($request->isAjax()) {
                $controller = new \conference\Controller\AjaxLoginError($this);
                return $controller;
            } else {
                \Canopy\Server::forward('./conference/User/Visitor/login');
            }
        } catch (\Exception $e) {
            if (CONFERENCE_SYSTEM_SETTINGS['friendlyErrors']) {
                \phpws2\Error::log($e);
                $controller = new \conference\Controller\FriendlyErrorController($this);
                return $controller;
            } else {
                throw $e;
            }
        }
    }

}
