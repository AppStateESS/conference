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

namespace conference\service;

use conference\Resource\PaymentResource;
use conference\Resource\AccountResource;
use conference\ServiceInterface;

class TouchNet implements ServiceInterface
{

    const path = PHPWS_SOURCE_DIR . 'mod/conference/service/TouchNet/';

    public static function getValidationKey(AccountResource $account,
            PaymentResource $payment): string
    {
        $preHash = $account->validateSend . $payment->transactionId . $payment->amount;
        $postHash = md5($preHash, true);
        $encoded = base64_encode($postHash);
        return $encoded;
    }

    public static function getParameterName(string $param): string
    {
        static $parameterList;

        if (empty($parameterList)) {
            $parameterList = self::getParameterList();
        }

        return $parameterList[$param] ?? null;
    }

    public static function getParameterList()
    {
        $info = file_get_contents(self::path . 'parameters.json');
        $infoObj = json_decode($info);
        if (empty($infoObj)) {
            throw new \Exception('Service file does not contain data.');
        }
        return $infoObj;
    }

    public static function successPost()
    {
        \Canopy\Http::http_response_code(200);
        echo <<<EOF
<!DOCTYPE html>
<html>
  <head>
    <title>Post success</title>
    <meta charset="UTF-8">
  </head>
  <body>
    <div>Post updated payment record.</div>
  </body>
</html>
EOF;
    }

    public static function failurePost()
    {
        \Canopy\Http::http_response_code(500);
        echo <<<EOF
<!DOCTYPE html>
<html>
  <head>
    <title>Post failed</title>
    <meta charset="UTF-8">
  </head>
  <body>
    <div>Post failed to update payment record.</div>
  </body>
</html>
EOF;
    }

}
