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

use conference\Resource\SettingsResource;
use phpws2\Database;
use phpws2\Settings;

class SettingsFactory
{

    public static function saveContact($name, $email)
    {
        Settings::set('conference', 'contactName', $name);
        Settings::set('conference', 'contactEmail', $email);
    }

    /**
     * Returns contactName and contactEmail in an array
     * @return array
     */
    public static function getContact()
    {
        return ['contactName' => Settings::get('conference', 'contactName'),
            'contactEmail' => Settings::get('conference', 'contactEmail')];
    }

    public static function getDefaultConference()
    {
        return Settings::get('conference', 'defaultConference');
    }

    public static function setDefaultConference(int $conferenceId)
    {
        Settings::set('conference', 'defaultConference', $conferenceId);
    }

    public static function getBannerApi()
    {
        return Settings::get('conference', 'bannerApi');
    }

    public static function isDisabled()
    {
        return (bool) Settings::get('conference', 'disabled');
    }

    public static function setBannerApi($api)
    {
        Settings::set('conference', 'bannerApi', (bool) $api);
    }

    public static function setDisabled($disabled)
    {
        Settings::set('conference', 'disabled', (bool) $disabled);
    }

    public static function getDisabled()
    {
        return Settings::get('conference', 'disabled');
    }

    /**
     * Returns a SwiftMailer ready reply-to address
     * @param bool $onlyNoReply If true, return the no-reply version
     * @return string
     */
    public static function getSwiftMailReply(bool $onlyNoReply = false)
    {
        $contact = self::getContact();
        if ($onlyNoReply || empty($contact['contactEmail'])) {
            $contact['email'] = 'noreply@' . \Canopy\Server::getSiteUrl(false,
                            false, false);
        }

        if ($onlyNoReply || empty($contact['contactName'])) {
            return [$contact['contactEmail']];
        } else {
            return [$contact['contactEmail'] => $contact['contactName']];
        }
    }

    public static function getEmailAddressOnly()
    {
        $contact = self::getContact();
        if (empty($contact['email'])) {
            return 'noreply@' . \Canopy\Server::getSiteUrl(false, false, false);
        } else {
            return $contact['email'];
        }
    }

}
