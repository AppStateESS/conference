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

namespace conference\Controller\User;

use Canopy\Request;
use conference\Controller\SubController;
use conference\View\PaymentView;
use conference\Factory\PaymentFactory;

class Payment extends SubController
{

    /**
     * @var PaymentFactory
     */
    protected $factory;

    /**
     * @var PaymentView
     */
    protected $view;

    protected function loadFactory()
    {
        $this->factory = new PaymentFactory;
    }

    protected function loadView()
    {
        $this->view = new PaymentView;
    }

    protected function completeHtml(Request $request)
    {
        return $this->view->complete($this->id);
    }

    protected function cancelHtml(Request $request)
    {
        return $this->view->cancel($this->id);
    }

    /**
     * Receives service post on payment completion.
     * @param Request $request
     */
    protected function servicePost(Request $request)
    {
        try {
            if ($this->factory->completeServicePayment($request)) {
                \conference\Factory\ServiceFactory::successPost();
            } else {
                \conference\Factory\ServiceFactory::failurePost();
            }
        } catch (\Exception $e) {
            \phpws2\Error::log($e);
            \conference\Factory\ServiceFactory::failurePost();
        }
        exit();
    }

}
