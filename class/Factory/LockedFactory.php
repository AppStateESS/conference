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
use conference\Resource\LockedResource;

class LockedFactory extends BaseFactory
{

    public function build()
    {
        $locked = new LockedResource;
        return $locked;
    }

    public function listing(array $options = []): array
    {
        extract($options);
        $db = Database::getDB();
        $tbl = $db->addTable('conf_locked');
        if (!empty($includeSession)) {
            $sessionTbl = $db->addTable('conf_session');
            $sessionTbl->addField('title');
            $sessionTbl->addField('eventDate');
            $cond = $db->createConditional($tbl->getField('sessionId'),
                    $sessionTbl->getField('id'), '=');
            $db->joinResources($tbl, $sessionTbl, $cond, 'left');
        }
        $tbl->addOrderBy('ip', 'asc');
        return $db->select();
    }

    public function selfLock(int $sessionId)
    {
        $ip = $_SERVER['REMOTE_ADDR'];
        $locked = $this->build();
        $locked->ip = $ip;
        $locked->sessionId = $sessionId;
        return $this->save($locked);
    }

    public function delete(int $id)
    {
        $db = Database::getDB();
        $tbl = $db->addTable('conf_locked');
        $tbl->addFieldConditional('id', $id);
        return $db->delete();
    }

    public static function lockedSessionId()
    {
        if (self::isLocked()) {
            return $_SESSION['ConferenceClientLocked'];
        } else {
            return false;
        }
    }

    public static function isLocked()
    {
        if (isset($_SESSION['ConferenceClientLocked'])) {
            return true;
        } else {
            $db = Database::getDB();
            $tbl = $db->addTable('conf_locked');
            $tbl->addFieldConditional('ip', $_SERVER['REMOTE_ADDR']);
            $locked = $db->selectOneRow();
            if ($locked) {
                $_SESSION['ConferenceClientLocked'] = $locked['sessionId'];
                return true;
            } else {
                return false;
            }
        }
    }

}
