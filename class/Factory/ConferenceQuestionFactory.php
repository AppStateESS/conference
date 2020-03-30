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

use conference\Resource\ConferenceQuestionResource as Resource;
use Canopy\Request;
use phpws2\Database;

class ConferenceQuestionFactory extends BaseFactory
{

    public function build()
    {
        $conferenceQuestion = new Resource;
        return $conferenceQuestion;
    }

    public function post(int $conferenceId, array $info)
    {
        foreach ($info as $ei) {
            if ($ei['id'] > 0) {
                $eiResource = $this->load($ei['id']);
            } else {
                $eiResource = $this->build();
                $eiResource->sort = $this->getLastSort($conferenceId) + 1;
                $eiResource->conferenceId = $conferenceId;
            }
            $eiResource->question = $ei['question'];
            $eiResource->type = $ei['type'];
            if ($ei['type'] === 'checkbox') {
                $eiResource->required = 0;
            } else {
                $eiResource->required = $ei['required'];
            }
            $this->save($eiResource);
        }
    }

    private function getLastSort(int $conferenceId): int
    {
        $db = Database::getDB();
        $tbl = $db->addTable('conf_confquestion');
        $tbl->addField('sort');
        $tbl->addOrderBy('sort', 'desc');
        $tbl->addFieldConditional('deleted', 0);
        $tbl->addFieldConditional('conferenceId', $conferenceId);
        $db->setLimit(1);
        return (int) $db->selectColumn();
    }

    public function listing(array $options)
    {
        $db = Database::getDB();
        $tbl = $db->addTable('conf_confquestion');
        if (!empty($options['conferenceId'])) {
            $tbl->addFieldConditional('conferenceId', $options['conferenceId']);
        }
        
        if (empty($options['showDeleted'])) {
            $tbl->addFieldConditional('deleted', 0);
        }
        $tbl->addOrderBy('sort');
        return $db->select();
    }
    
    public function delete($id) {
        $conferenceQuestion = $this->load($id);
        $conferenceQuestion->deleted = true;
        $conferenceQuestion->sort = 0;
        $this->save($conferenceQuestion);
        $this->resort($conferenceQuestion->conferenceId);
    }
    
    private function resort($conferenceId)
    {
        $sortable = new \phpws2\Sortable('conf_confquestion', 'sort');
        $sortable->setAnchor('conferenceId', $conferenceId);
        $sortable->addTableConditional('deleted', 0);
        $sortable->reorder();
    }

}
