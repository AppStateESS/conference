<?php

/**
 * MIT License
 * Copyright (c) 2017 Electronic Student Services @ Appalachian State University
 *
 * See LICENSE file in root directory for copyright and distribution permissions.
 *
 * @author Matthew McNaney <mcnaneym@appstate.edu>
 * @license https://opensource.org/licenses/MIT
 */

namespace conference\Resource;

use \phpws2\Database;
use conference\Exception\MissingInput;

abstract class AbstractResource extends \phpws2\Resource
{

    public function __set($name, $value)
    {
        if ((!$this->$name->allowNull() &&
                (method_exists($this->$name, 'allowEmpty') && !$this->$name->allowEmpty())) &&
                ( (is_string($value) && $value === '') || is_null($value))) {
            throw new MissingInput("$name may not be empty");
        }

        $method_name = self::walkingCase($name, 'set');
        if (method_exists($this, $method_name)) {
            return $this->$method_name($value);
        } else {
            return $this->$name->set($value);
        }
    }

    public function __get($name)
    {
        $method_name = self::walkingCase($name, 'get');
        if (method_exists($this, $method_name)) {
            return $this->$method_name();
        } else {
            return $this->$name->get();
        }
    }

    public function __isset($name)
    {
        return isset($this->$name);
    }

    public function isEmpty($name)
    {
        return $this->$name->isEmpty();
    }

    protected function strip($text)
    {
        $allowed = implode('', CONFERENCE_ALLOWED_TAGS);
        return strip_tags($text, $allowed);
    }

    public function stripBadChars(array $varArray)
    {
        foreach ($varArray as $valName) {
            $this->$valName->set(\preg_replace('/[!@#$%^&*()_=+\[\]\\\|<>,?;:"\'{}]/', '', $this->$valName->get()));
        }
    }

}
