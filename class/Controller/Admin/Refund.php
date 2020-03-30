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
use conference\Factory\RefundFactory;
use conference\View\RefundView;

class Refund extends SubController
{

    /**
     *
     * @var \conference\Factory\RefundFactory
     */
    protected $factory;

    protected function loadFactory()
    {
        $this->factory = new RefundFactory;
    }

    protected function loadView()
    {
        $this->view = new RefundView;
    }

    protected function listHtml(Request $request)
    {
        return $this->view->scriptView('Refund',
                        ['registrationId' => $request->pullGetInteger('registrationId')]);
    }

    protected function viewJson(Request $request)
    {
        $refund = $this->factory->load($this->id);
        return $refund->getStringVars();
    }

    protected function fullPost(Request $request)
    {
        $registrationId = $request->pullPostInteger('registrationId');
        $refund = $this->factory->refundRegistration($registrationId);
        $this->factory->emailInfo($refund, true);
        \conference\Factory\LogFactory::log("Full registration refund.");
        return ['success' => 1];
    }

    protected function byRegistrationJson(Request $request)
    {
        $registrationId = $request->pullGetInteger('registrationId');

        return $this->factory->loadByRegistration($registrationId);
    }

    protected function partialPost(Request $request)
    {
        $registrationId = $request->pullPostInteger('registrationId');
        $amount = $request->pullPostFloat('refundAmount');
        $mealReduction = $request->pullPostInteger('mealReduction');
        $guestRemoved = $request->pullPostArray('guestRemoved', true);
        $refund = $this->factory->partialRefund($registrationId, $amount,
                $guestRemoved, $mealReduction);
        $this->factory->emailInfo($refund, false);
        $this->factory->adjustRegistration($refund, $registrationId,
                $mealReduction, $guestRemoved);
        \conference\Factory\LogFactory::log("Partial registration refund for $amount.");
        return ['success' => 1];
    }

}
