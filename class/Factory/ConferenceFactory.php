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

namespace conference\Factory;

use phpws2\Database;
use Canopy\Request;
use conference\Resource\ConferenceResource as Resource;

class ConferenceFactory extends BaseFactory
{

    public function build()
    {
        $conference = new Resource;
        return $conference;
    }

    public function listing(array $options = null): array
    {
        $sortBy = $options['sortBy'] ?? null;
        $sortByDir = $options['sortByDir'] ?? null;
        $sortByDir = strtolower($sortByDir);
        if ($sortByDir !== 'asc' || $sortByDir !== 'desc') {
            $sortByDir = 'asc';
        }

        $db = Database::getDB();
        $tbl = $db->addTable('conf_conference');
        $tbl2 = $db->addTable('conf_location');
        $tbl2->addField('title', 'location');
        $tbl3 = $db->addTable('conf_session');
        $countField = $tbl3->addField('id', 'sessionCount');
        $countField->showCount();

        $join_conditional = $db->createConditional($tbl->getField('id'),
                $tbl3->getField('conferenceId'));
        $db->joinResources($tbl, $tbl3, $join_conditional, 'left');

        $conditional = new \phpws2\Database\Conditional($db,
                $tbl->getField('locationId'), $tbl2->getField('id'), '=');

        $db->joinResources($tbl, $tbl2, $conditional, 'left');

        /**
         * Only show deleted if true
         */
        if (empty($options['includeDeleted'])) {
            $tbl->addFieldConditional('deleted', 0);
        }

        if (isset($options['onlyDeleted']) && $options['onlyDeleted'] === true) {
            $tbl->addFieldConditional('deleted', 1);
        }

        if (!empty($options['activeOnly'])) {
            $tbl->addFieldConditional('active', 1);
        }

        if (!empty($options['search'])) {
            $this->addSearch($options['search'], ['title'], $db, $tbl);
        }
        if (empty($sortBy)) {
            $sortBy = 'title';
            $sortByDir = 'asc';
        }
        $db->setGroupBy($tbl->getField('id'));
        $tbl->addOrderBy($sortBy, $sortByDir);
        return $db->select();
    }

    public function post(Request $request)
    {
        $conference = $this->build();
        $conference->title = $request->pullPostString('title');
        $conference->description = $request->pullPostVar('description');
        $conference->locationId = $request->pullPostInteger('locationId');
        return $conference;
    }

    public function put(int $id, Request $request)
    {
        $conference = $this->load($id);
        $conference->loadPutByType($request);
        $conference->description = $request->pullPutVar('description');
        return $conference;
    }

    public function delete(int $id)
    {
        $conference = $this->load($id);
        $conference->deleted = true;
        $this->save($conference);
    }

}
