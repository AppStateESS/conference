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

use conference\Factory\AddOnFactory;
use conference\Controller\User\Conference as ConferenceUser;

class Conference extends ConferenceUser
{

    /**
     * @var \conference\View\ConferenceView
     */
    protected $view;

    protected function viewHtml()
    {
        $content = $this->view->visitorView($this->id,
                \conference\Factory\VisitorFactory::getCurrentId());
        return $content;
    }

}
