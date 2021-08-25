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

namespace conference\Controller\Admin;

use Canopy\Request;
use conference\Controller\SubController;
use conference\Factory\GuestFactory;
use conference\View\GuestView;

class Guest extends SubController
{

    protected function loadFactory()
    {
        $this->factory = new GuestFactory;
    }

    protected function loadView()
    {
        $this->view = new GuestView;
    }

    protected function listJson(Request $request)
    {
        return $this->factory->listing(['registrationId' => $request->pullGetInteger('registrationId')]);
    }

    protected function listHtml(Request $request)
    {
        return $this->view->scriptView('Guest',
                        ['registrationId' => $request->pullGetInteger('registrationId')]);
    }

    protected function put(Request $request)
    {
        $guest = $this->factory->load($this->id);
        $guest->firstName = $request->pullPutString('firstName');
        $guest->lastName = $request->pullPutString('lastName');
        $guest->email = $request->pullPutString('email');
        $guest->phone = $request->pullPutString('phone');
        $guest->relationship = $request->pullPutString('relationship');
        $guest->hometown = $request->pullPutString('hometown');
        $guest->employer = $request->pullPutString('employer');
        $guest->position = $request->pullPutString('position');
        $guest->gradYear = (string) (int) $request->pullPutString('gradYear');
        $guest->alum = $request->pullPutBoolean('alum');
        $this->factory->save($guest);
        return ['success' => 1];
    }

}
