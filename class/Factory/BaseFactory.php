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

use conference\Exception\ResourceNotFound;
use Canopy\Request;

require_once PHPWS_SOURCE_DIR . 'mod/conference/config/sendmail.php';

/**
 *
 * @author Matthew McNaney <mcnaneym@appstate.edu>
 */
abstract class BaseFactory extends \phpws2\ResourceFactory
{

    abstract public function build();

    public function load(int $id, $throwException = true)
    {
        if (empty($id)) {
            throw new ResourceNotFound;
        }
        $resource = $this->build();
        $resource->setId($id);
        if (!parent::loadByID($resource)) {
            if ($throwException) {
                throw new ResourceNotFound($id);
            } else {
                return null;
            }
        }
        return $resource;
    }

    public static function getSwiftTransport()
    {
        return \Swift_SendmailTransport::newInstance(CONFERENCE_SENDMAIL_COMMAND);
    }

    public function save(\phpws2\Resource $resource)
    {
        return self::saveResource($resource);
    }

    protected function addSearch(string $searchPhrase, array $columns,
            \phpws2\Database\DB $db, \phpws2\Database\Table $tbl)
    {
        foreach ($columns as $c) {
            $cond = $db->createConditional($tbl->getField($c),
                    '%' . $searchPhrase . '%', 'like');
            if (isset($prevCond)) {
                $prevCond = $db->createConditional($cond, $prevCond, 'or');
            } else {
                $prevCond = $cond;
            }
        }
        $db->addConditional($prevCond);
    }

    public function listingOptions(Request $request)
    {
        $options['search'] = $request->pullGetString('search', true);
        $options['sortBy'] = $request->pullGetString('sortBy', true);
        $options['sortByDir'] = $request->pullGetString('sortByDir', true);
        $options['limit'] = $request->pullGetString('limit', true);
        $options['offset'] = $request->pullGetString('offset', true);
        return $options;
    }

    protected function sendEmail($subject, array $from, $to, $content)
    {
        $transport = \Swift_SendmailTransport::newInstance('/usr/sbin/sendmail -t -i');
        $message = \Swift_Message::newInstance();
        $message->setSubject($subject);
        $message->setFrom($from);
        $message->setTo($to);
        $message->setBody($content, 'text/html');
        $mailer = new \Swift_Mailer($transport);
        $mailer->send($message);
    }

}