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

use conference\Factory\SettingsFactory;

class SettingsView extends AbstractView
{

    public function __construct()
    {
        $this->loadFactory();
    }

    public function loadFactory()
    {
        $this->factory = new SettingsFactory;
    }

    public static function disabled()
    {
        $template = new \phpws2\Template();
        $template->setModuleTemplate('conference', 'Settings/Disabled.html');
        return $template->get();
    }

}
