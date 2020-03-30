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
use conference\Resource\LocationResource as Resource;

class LocationFactory extends BaseFactory
{

    public function build()
    {
        $location = new Resource;
        return $location;
    }

    public function listing(array $options = []): array
    {
        extract($options);
        if (empty($sortBy)) {
            $sortBy = 'title';
        }
        if (empty($sortByDir)) {
            $sortByDir = 'ASC';
        }

        $db = Database::getDB();
        $tbl = $db->addTable('conf_location');
        if (!empty($search)) {
            $tbl->addFieldConditional('title', '%' . strip_tags($search) . '%',
                    'like');
        }
        $tbl->addOrderBy($sortBy, $sortByDir);
        $tbl->addFieldConditional('deleted', 0);
        return $db->select();
    }

    public function post(Request $request)
    {
        $location = $this->build();
        $location->title = $request->pullPostString('title');
        $location->description = $request->pullPostVar('description');
        $location->directions = $request->pullPostVar('directions');
        $location->url = $request->pullPostString('url');
        return $location;
    }

    public function put(int $id, Request $request)
    {
        $location = $this->load($id);
        $location->title = $request->pullPutString('title');
        $location->description = $request->pullPutVar('description');
        $location->directions = $request->pullPutVar('directions');
        $location->url = $request->pullPutString('url');
        return $location;
    }

    public function delete(int $id)
    {
        $db = Database::getDB();
        $locationTbl = $db->addTable('conf_location');
        $locationTbl->addFieldConditional('id', $id);
        $locationTbl->addValue('deleted', 1);
        $db->update();
    }

}
