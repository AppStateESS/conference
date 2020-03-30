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

namespace conference\Controller\Visitor;

use Canopy\Request;
use conference\Controller\SubController;
use conference\Factory\VisitorInfoFactory;
use conference\Factory\VisitorFactory;
use conference\Exception\VisitorLoginRequired;
use conference\Exception\VisitorIdMismatch;

class VisitorInfo extends SubController
{

    /**
     *
     * @var \conference\Factory\VisitorFactory;
     */
    protected $factory;

    protected function loadFactory()
    {
        $this->factory = new VisitorInfoFactory;
    }

    protected function loadView()
    {

    }

    /**
     *
     * @param Request $request
     * @return array
     */
    protected function post(Request $request): array
    {
        $visitorId = VisitorFactory::getCurrentId();
        $this->factory->post($visitorId, $request);
        return ['success' => true];
    }

    protected function listJson(Request $request): array
    {
        if (!VisitorFactory::isLoggedIn()) {
            throw new VisitorLoginRequired;
        }
        return ['listing' => $this->factory->visitorListing($request->pullGetInteger('registrationId'))];
    }

}
