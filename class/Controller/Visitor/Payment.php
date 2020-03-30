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
use conference\Factory\PaymentFactory;
use conference\Factory\RegistrationFactory;
use conference\View\PaymentView;
use conference\Factory\VisitorFactory;
use conference\Factory\SessionFactory;
use conference\Factory\ChargeFactory;
use conference\Exception\VisitorIdMismatch;
use conference\Factory\ServiceFactory;

class Payment extends SubController
{

    /**
     * @var conference\View\PaymentView
     */
    protected $view;

    /**
     *
     * @var conference\Factory\PaymentFactory
     */
    protected $factory;

    protected function loadFactory()
    {
        $this->factory = new PaymentFactory;
    }

    protected function loadView()
    {
        $this->view = new PaymentView;
    }

    protected function completeHtml()
    {
        return $this->view->complete($this->id);
    }

    protected function cancelHtml(Request $request)
    {
        return $this->view->cancel($this->id);
    }

}
