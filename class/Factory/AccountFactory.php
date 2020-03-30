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
use conference\Resource\AccountResource;


class AccountFactory extends BaseFactory
{

    public function build()
    {
        $account = new AccountResource;
        return $account;
    }

    public function listing()
    {
        $db = Database::getDB();
        $tbl = $db->addTable('conf_account');
        $tbl->addOrderBy('title');
        return $db->select();
    }

    public function post(Request $request)
    {
        $account = $this->build();
        $account->loadPostByType($request);
        if (!preg_match('@^(https?:)?//@', $account->url)) {
            $account->url = '//' . $account->url;
        }
        return $account;
    }

    public function put(int $id, Request $request)
    {
        $account = $this->load($id);
        $account->loadPutByType($request);
        if (!preg_match('@^(https?:)?//@', $account->url)) {
            $account->url = '//' . $account->url;
        }
        return $account;
    }

    /**
     * Returns the AccountResource set to a conference by its id.
     * @param type $conferenceId
     * @return AccountResource
     */
    public function loadByConferenceId($conferenceId)
    {
        $accountResource = $this->build();
        $db = Database::getDB();
        $accountTable = $db->addTable('conf_account');
        $confTable = $db->addTable('conf_conference', null, false);
        $cond = new Database\Conditional($db, $accountTable->getField('id'),
                $confTable->getField('accountId'), '=');
        $confTable->addFieldConditional('id', $conferenceId);
        $db->joinResources($accountTable, $confTable, $cond, 'left');
        $result = $db->selectInto($accountResource);
        return $result ? $accountResource : false;
    }

}
