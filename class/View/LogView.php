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

namespace conference\View;

use phpws2\Template;
use conference\Resource\LogResource;
use conference\Factory\LogFactory;
use conference\Factory\VisitorFactory;

class LogView extends AbstractView
{

    public function __construct()
    {
        $this->factory = new LogFactory;
    }

    public function visitor(int $visitorId)
    {
        $options['visitorId'] = $visitorId;
        $options['includeSession'] = true;
        $visitorFactory = new VisitorFactory;
        $visitor = $visitorFactory->load($visitorId);
        $tpl['logList'] = $this->factory->listing($options);
        $tpl['firstName'] = $visitor->firstName;
        $tpl['lastName'] = $visitor->lastName;
        $tpl['id'] = $visitor->id;
        $template = new Template($tpl);
        $template->setModuleTemplate('conference', 'Log/Visitor.html');
        return $template->get();
    }

}
