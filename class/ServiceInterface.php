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

namespace conference;

use conference\Resource\PaymentResource;
use conference\Resource\AccountResource;

interface ServiceInterface
{

    public static function getValidationKey(AccountResource $account,
            PaymentResource $payment): string;

    public static function getParameterName(string $param): string;

    public static function getParameterList();

    public static function successPost();

    public static function failurePost();
}
