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

use Canopy\Request;
use conference\Factory\ServiceFactory;

class ServiceView extends AbstractView
{

    /**
     * @var \conference\Factory\ServiceFactory
     */
    protected $factory;

    public function __construct()
    {
        $this->factory = new ServiceFactory;
    }

    public function serviceSettings(Request $request)
    {
        $vars['service'] = $this->factory->getServiceDefine();
        //$vars['success'] = $this->factory->successUrl();
        //$vars['cancel'] = $this->factory->cancelUrl();
        // TODO remove success cancel link from script
        $vars['success'] = '';
        $vars['cancel'] = '';
        return $this->scriptView('ServiceSettings', $vars);
    }

}
