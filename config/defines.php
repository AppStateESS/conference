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
//require_once PHPWS_SOURCE_DIR . 'mod/conference/config/system_defines.php';
/**
 * Do not change the below unless developing
 */
define('CONFERENCE_SYSTEM_SETTINGS',
        [
            'productionMode' => false,
            'friendlyErrors' => false
]);

define('CONFERENCE_DEFAULTS', [
    'state' => 'NC'
]);
define('CONFERENCE_ALLOWED_TAGS',
        ['<p>', '<h3>', '<h4>', '<strong>', '<em>', '<blockquote>', '<ul>', '<ol>', '<li>', '<a>']);

define('CONFERENCE_SERVICE', 'TouchNet');

define('STUDENT_ORIENTATION_TABLE', 'po_admissions_pros_data');

define('STUDENT_BANNER_URL', 'http://localhost/canopy/student.json');
