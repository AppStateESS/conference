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
use conference\Factory\ConferenceQuestionFactory as Factory;
use conference\View\ConferenceQuestionView as View;

class ConferenceQuestion extends SubController
{

    protected $view;
    protected $factory;

    protected function loadView()
    {
        $this->view = new View;
    }

    protected function loadFactory()
    {
        $this->factory = new Factory;
    }

    protected function conferenceJson(Request $request): array
    {
        $conferenceId = $request->pullGetInteger('id');
        $listing = $this->factory->listing(['conferenceId' => $conferenceId]);
        return ['conferenceQuestion' => $listing];
    }

    protected function post(Request $request)
    {
        $this->factory->post($request->pullPostInteger('conferenceId'),
                $request->pullPostArray('conferenceQuestion'));
        return ['success'=>true];
    }
    
    protected function delete(Request $request)
    {
        $this->factory->delete($this->id);
        return ['success'=>true];
    }

}
