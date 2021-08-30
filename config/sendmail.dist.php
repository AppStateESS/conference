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
define('CONFERENCE_SENDMAIL_COMMAND', '/usr/sbin/sendmail -t -i');

/**
 * If SwiftMailer is less than version 6, set this to true.
 * Version 5 has a different way of instantiating objects.
 * Find out which you have with:
 * > composer show swiftmailer/swiftmailer
 * 
 */
define('CONFERENCE_SWIFT_OLD_VERSION', false);
