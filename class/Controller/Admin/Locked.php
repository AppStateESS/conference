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
use conference\Factory\LockedFactory;
use conference\View\LockedView;

class Locked extends SubController
{

    /**
     * @var conference\View\LockedView
     */
    protected $view;

    /**
     * @var conference\Factory\LockedFactory
     */
    protected $factory;

    protected function loadView()
    {
        //$this->view = new LockedView;
    }

    protected function loadFactory()
    {
        $this->factory = new LockedFactory;
    }

    protected function listJson()
    {
        $options['includeSession'] = true;
        $listing = $this->factory->listing($options);
        $currentLockedId = 0;
        if (!empty($listing)) {
            foreach ($listing as $value) {
                if ($value['ip'] == $_SERVER['REMOTE_ADDR']) {
                    $currentLockedId = $value['id'];
                }
            }
        }
        return ['listing' => $listing, 'currentLockedId' => $currentLockedId];
    }

    protected function selfLockPost(Request $request)
    {
        $sessionId = $request->pullPostInteger('sessionId');
        $this->factory->selfLock($sessionId);
        return ['success' => true];
    }

    protected function delete(Request $request)
    {
        $this->factory->delete($this->id);
        return ['success' => true];
    }

}
