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

use conference\Resource\VisitorInfoResource as Resource;
use Canopy\Request;
use phpws2\Database;
use phpws2\Database\Expression;
use conference\Factory\VisitorInfoFactory;

class VisitorInfoFactory extends BaseFactory
{

    public function build()
    {
        $visitorInfo = new Resource;
        return $visitorInfo;
    }

    public function listing(array $options)
    {
        $db = Database::getDB();
        $tbl = $db->addTable('conf_visitorinfo');
        if (!empty($options['conferenceId'])) {
            $tbl->addFieldConditional('conferenceId', $options['conferenceId']);
        }
        if (!empty($options['registrationId'])) {
            $tbl->addFieldConditional('registrationId', $options['registrationId']);
        }
        return $db->select();
    }

    public function indexByRegistration(array $info)
    {
        $indexedInfo = [];

        foreach ($info as $i) {
            $indexedInfo[$i['registrationId']][$i['questionId']] = $i['answer'];
        }
        return $indexedInfo;
    }

    /**
     * Lists extra info with current answers from the visitor
     * @param int $registrationId
     */
    public function visitorListing(int $registrationId): array
    {
        $regFactory = new RegistrationFactory;
        $registration = $regFactory->load($registrationId);
        $conferenceId = $registration->conferenceId;
        $db = Database::getDB();
        $qTbl = $db->addTable('conf_confquestion');
        $vTbl = $db->addTable('conf_visitorinfo');

        $qTbl->addField('id', 'questionId');
        $qTbl->addField('question');
        $qTbl->addField('required');
        $qTbl->addField('type');
        $qTbl->addOrderBy('sort');
        $vTbl->addField('id');
        $qTbl->addFieldConditional('deleted', 0);
        $qTbl->addFieldConditional('conferenceId', $conferenceId);

        $exp = new Expression("IFNULL(" . $vTbl->getField('answer') . ",'')", 'answer');
        $vTbl->addField($exp);

        $cond = new \phpws2\Database\Conditional($db, $qTbl->getField('id'),
                $vTbl->getField('questionId'), '=');
        $cond2 = new \phpws2\Database\Conditional($db, $vTbl->getField('registrationId'),
                $registrationId, '=');
        $cond3 = new \phpws2\Database\Conditional($db, $cond, $cond2, 'and');

        $db->joinResources($qTbl, $vTbl, $cond3, 'left');
        $db->setGroupBy($qTbl->getField('id'));
        return $db->select();
    }

    /**
     *
     * @param int $visitorId
     * @param Request $request
     */
    public function post(int $visitorId, Request $request)
    {
        $info = $request->pullPostArray('info');
        $registrationId = $request->pullPostInteger('registrationId');
        $conferenceId = $request->pullPostInteger('conferenceId');
        foreach ($info as $result) {
            if (!empty($result['id'])) {
                $vInfo = $this->load($result['id']);
            } else {
                $vInfo = $this->build();
            }
            $vInfo->visitorId = $visitorId;
            $vInfo->questionId = $result['questionId'];
            $vInfo->registrationId = $registrationId;
            $vInfo->conferenceId = $conferenceId;
            $vInfo->answer = $result['answer'];
            $this->save($vInfo);
        }
    }

}
