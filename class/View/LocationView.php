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
use conference\Resource\LocationResource;
use phpws2\Template;

class LocationView extends AbstractView
{

    public function adminListing()
    {
        return $this->scriptView('Location');
    }
    
    public function view(LocationResource $location)
    {
        $template = new Template($location->getStringVars());
        $template->setModuleTemplate('conference', 'Location/View.html');
        return $template->get();
    }

}
