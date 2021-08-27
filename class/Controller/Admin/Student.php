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
use conference\Factory\StudentFactory;
use conference\View\StudentView;

class Student extends SubController
{

    /**
     * @var conference\Factory\StudentFactory
     */
    protected $factory;

    /**
     * @var conference\View\StudentView
     */
    protected $view;

    protected function loadView()
    {
        $this->view = new StudentView;
    }

    protected function loadFactory()
    {
        $this->factory = new StudentFactory;
    }

    protected function listHtml(Request $request)
    {
        return $this->view->scriptView('Student');
    }

    protected function listJson(Request $request)
    {
        $options = $this->factory->listingOptions($request);
        $checkImport = $request->pullGetBoolean('checkImport', true);

        $listing = $this->factory->listing($options);
        if (empty($listing['listing'])) {
            $import = $this->factory->bannerListing(['search' => $options['search'], 'limit' => 5, 'nodupes' => true]);
            if (!empty($import['banner'])) {
                $listing['import'] = $import['banner'];
            }
        }
        return $listing;
    }

    protected function hidePatch(Request $request)
    {
        $this->factory->hide($this->id);
        return ['success' => true];
    }

    protected function revealPatch(Request $request)
    {
        $this->factory->reveal($this->id);
        return ['success' => true];
    }

    protected function discountPatch(Request $request)
    {
        $student = $this->factory->load($this->id);
        $student->discountAmount = $request->pullPatchFloat('discountAmount');
        $student->discountLabel = (string) $request->pullPatchString('discountLabel');
        $this->factory->save($student);
        return ['success' => true];
    }

    protected function startDatePatch(Request $request)
    {
        $student = $this->factory->load($this->id);
        $student->startDate = $request->pullPatchInteger('startDate');
        $student->lockDate = true;
        $this->factory->save($student);
        return ['success' => true];
    }

    protected function unlockDatePatch(Request $request)
    {
        $student = $this->factory->load($this->id);
        $student->lockDate = false;
        $this->factory->save($student);
        return ['success' => true];
    }

    protected function bannerJson(Request $request)
    {
        $search = $request->pullGetString('search');
        return $this->factory->bannerListing(['search' => $search, 'limit' => 20, 'nodupes' => true]);
    }

    protected function importPost(Request $request)
    {
        $students = $request->pullPostArray('importList');
        if (count($students)) {
            $this->factory->importBannerStudents($students);
        }
        return ['success' => true];
    }

    protected function importAllPost(Request $request)
    {
        $search = $request->pullPostString('search', true);
        if (!empty($search)) {
            $result = $this->factory->bannerListing(['search' => $search, 'nodupes' => true]);
            $students = $result['banner'];
            if (!empty($students)) {
                foreach ($students as $student) {
                    $this->factory->saveBannerStudent($student);
                }
            }
        }
        return ['success' => true];
    }

    protected function byDateJson(Request $request)
    {
        $startDate = $request->pullGetInteger('startDate');
        return $this->factory->bannerListing(['startDate' => $startDate, 'limit' => 20, 'nodupes' => true]);
    }

}
