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
use conference\Factory\SessionFactory;
use conference\Factory\RegistrationFactory;
use conference\Factory\VisitorFactory;
use conference\Factory\SupplementFactory;
use conference\View\SupplementView;
use conference\Exception\ResourceNotFound;

class Supplement extends SubController
{

    /**
     * @var \conference\Factory\SupplementFactory;
     */
    protected $factory;

    protected function loadFactory()
    {
        $this->factory = new SupplementFactory;
    }

    protected function loadView()
    {
        $this->view = new SupplementView;
    }

    protected function listHtml(Request $request)
    {
        $registrationId = $request->pullGetInteger('registrationId');
        $sessionFactory = new SessionFactory;
        $session = $sessionFactory->loadByRegistrationId($registrationId);
        if (empty($session)) {
            throw new ResourceNotFound($registrationId);
        }
        if ($session->signupEnd < time()) {
            return \conference\View\SessionView::signupOver($session);
        }
        return $this->view->scriptView('Supplement',
                        ['registrationId' => $registrationId]);
    }

    protected function post(Request $request)
    {
        $supplement = $this->factory->post($request);
        $this->factory->save($supplement);
        $this->factory->createPayment($supplement,
                \conference\Factory\VisitorFactory::getCurrentObject());
        $guestFactory = new \conference\Factory\GuestFactory;
        if ($supplement->newGuests === 0) {
            $guestFactory->deleteBySupplementId($supplement->id);
        } else {
            $guestFactory->saveSupplement($supplement,
                    $request->pullPostArray('guests'));
        }

        return ['success' => true, 'id' => $supplement->id];
    }

    protected function put(Request $request)
    {
        $supplement = $this->factory->put($this->id, $request);
        $this->factory->save($supplement);
        $this->factory->updatePayment($supplement);
        $guestFactory = new \conference\Factory\GuestFactory;
        if ($supplement->newGuests === 0) {
            $guestFactory->deleteBySupplementId($supplement->id);
        } else {
            $guestFactory->saveSupplement($supplement,
                    $request->pullPutArray('guests'));
        }
        return ['success' => true, 'id' => $supplement->id];
    }

    protected function completeHtml(Request $request)
    {
        try {
            $supplement = $this->factory->load($this->id);
        } catch (ResourceNotFound $e) {
            return $this->view->notFound();
        }

        if (!VisitorFactory::checkVisitor($supplement->visitorId)) {
            throw new VisitorIdMismatch;
        }
        return $this->view->paymentDue($supplement);
    }

    /**
     * Returns supplement information referred by the registration id. There should
     * always only be ONE incomplete supplement per registration.
     * @param Request $request
     * @return array
     */
    protected function currentJson(Request $request): array
    {
        $registrationId = $request->pullGetInteger('registrationId');
        $supplement = $this->factory->getCurrentByRegistrationId($registrationId);
        $guests = [];

        if (!$supplement) {
            $supplement = $this->factory->build();
        } else {
            $guestFactory = new \conference\Factory\GuestFactory();
            $guests = $guestFactory->listing(['supplementId' => $supplement->id]);
        }

        $registrationFactory = new RegistrationFactory;
        $registration = $registrationFactory->load($registrationId);

        $data['registration'] = $registration->getStringVars();
        $data['session'] = $registrationFactory->getSession($registration)->getStringVars();
        $data['conference'] = $registrationFactory->getConference($registration)->getStringVars();
        $data['supplement'] = $supplement->getStringVars(true,
                ['createDate', 'closeDate']);
        $data['guests'] = $guests;

        return $data;
    }

    protected function incompleteDelete(Request $request)
    {
        $this->factory->incompleteDelete($this->id);
        return ['success' => 1];
    }

}
