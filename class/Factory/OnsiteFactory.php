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

use Canopy\Request;

class OnsiteFactory
{

    public function createVisitor($visitor, Request $request)
    {
        $visitorFactory = new VisitorFactory;
        $visitor->email = $request->pullPostString('email');
        $visitor->firstName = $request->pullPostString('firstName', true) ?: '';
        $visitor->lastName = $request->pullPostString('lastName', true) ?: '';
        $visitor->address1 = $request->pullPostString('address1', true) ?: null;
        $visitor->address2 = $request->pullPostString('address2', true) ?: null;
        $visitor->city = $request->pullPostString('city', true) ?: null;
        $visitor->state = $request->pullPostString('state', true) ?: null;
        $visitor->zip = $request->pullPostString('zip', true) ?: null;
        $visitor->phone = $request->pullPostString('phone', true) ?: null;
        $visitor->altPhone = $request->pullPostString('altPhone', true) ?: null;
        $visitor->relationship = $request->pullPostString('relationship', true) ?: null;
        $visitor->employer = $request->pullPostString('employer', true) ?: null;
        $visitor->position = $request->pullPostString('position', true) ?: null;
        $visitor->activated = 1;
        $password = $this->makePassword();
        $visitor->hashPassword($password);
        $visitorFactory->save($visitor);
        $visitorFactory->sendOnsiteEmail($visitor, $password);
    }

    public function makePassword()
    {
        $alpha = 'abcdefghijkmnpqrstuvwxyz';
        $alphaCount = strlen($alpha);
        for ($i = 0; $i < 10; $i++) {
            $char = random_int(0, $alphaCount + 9);
            if ($char > $alphaCount) {
                $intChar = random_int(1, 9);
                $password[] = $intChar;
            } else {
                $letter = substr($alpha, $char, 1);
                $password[] = $letter;
            }
        }
        return implode('', $password);
    }

}
