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
use conference\Factory\GuestFactory;

class Guest extends SubController
{

    /**
     *
     * @var \conference\Factory\GuestFactory
     */
    protected $factory;

    protected function loadFactory()
    {
        $this->factory = new GuestFactory;
    }

    protected function loadView()
    {

    }

    protected function listJson(Request $request)
    {
        $options = ['registrationId' => $request->pullGetInteger('registrationId')];
        return ['listing' => $this->factory->listing($options)];
    }

    protected function post(Request $request)
    {
        $regFactory = new \conference\Factory\RegistrationFactory;
        $registration = $regFactory->load($request->pullPostInteger('registrationId'));
        $guests = $request->pullPostArray('guests');
        $this->factory->saveRegistration($registration, $guests);
        return ['success' => true];
    }

}
