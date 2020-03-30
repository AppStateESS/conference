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
function conference_uninstall(&$content)
{
    $db = \phpws2\Database::getDB();
    $db->buildTable('conf_supplement')->drop(true);
    $db->buildTable('conf_visitorinfo')->drop(true);
    $db->buildTable('conf_visitor')->drop(true);
    $db->buildTable('conf_payment')->drop(true);
    $db->buildTable('conf_registration')->drop(true);
    $db->buildTable('conf_guest')->drop(true);
    $db->buildTable('conf_session')->drop(true);
    $db->buildTable('conf_confquestion')->drop(true);
    $db->buildTable('conf_conference')->drop(true);
    $db->buildTable('conf_location')->drop(true);
    $db->buildTable('conf_account')->drop(true);
    $db->buildTable('conf_locked')->drop(true);
    $db->buildTable('conf_student')->drop(true);
    $db->buildTable('conf_log')->drop(true);
    $db->buildTable('conf_refund')->drop(true);
    $db->buildTable('conf_account')->drop(true);

    return true;
}
