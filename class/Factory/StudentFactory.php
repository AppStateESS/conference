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

use phpws2\Database;
use Canopy\Request;
use conference\Resource\StudentResource;

class StudentFactory extends BaseFactory
{

    public function build()
    {
        $student = new StudentResource;
        return $student;
    }

    public function listing(array $options = []): array
    {
        if (!empty($options['sortBy']) && !empty($options['sortByDir'])) {
            $sortDir = strtolower($options['sortByDir']);
            if ($sortDir !== 'asc' && $sortDir !== 'desc') {
                $sortDir = 'asc';
            }
            $sortBy = $options['sortBy'];
        } else {
            $sortBy = $sortDir = null;
        }
        if (empty($sortBy)) {
            $sortBy = 'lastName';
            $sortDir = 'asc';
        }
        $db = Database::getDB();
        $tbl = $db->addTable('conf_student');
        // banner id is always a search. If specific banner id is needed, then
        // load by banner id should be done.
        if (!empty($options['bannerId'])) {
            $tbl->addFieldConditional('bannerId', $options['bannerId'] . '%',
                    'like');
        }
        if (!empty($options['search'])) {
            $search = $options['search'];
            if (is_numeric($options['search'])) {
                $tbl->addFieldConditional('bannerId', $search . '%', 'like');
            } else {
                if (preg_match('@\d{4}[/\-]\d{2}[/\-]\d{2}@', $search)) {
                    $tbl->addFieldConditional('startDate', strtotime($search));
                } else {
                    $search .= '%';
                    $cond1 = new Database\Conditional($db,
                            $tbl->getField('username'), $search, 'like');
                    $cond2 = new Database\Conditional($db,
                            $tbl->getField('lastName'), $search, 'like');
                    $cond3 = new Database\Conditional($db, $cond1, $cond2, 'or');
                    $db->addConditional($cond3);
                }
            }
        }
        $limit = $options['limit'] + 1;
        $offset = $options['limit'] * $options['offset'];
        $db->setLimit($limit, $offset);
        $tbl->addOrderBy($sortBy, $sortDir);
        $listing = $db->select() ?? [];
        if ($more = count($listing) > 10) {
            array_pop($listing);
        }

        return ['listing' => $listing, 'more' => $more];
    }

    public function loadByBannerId(int $bannerId)
    {
        $student = $this->build();
        $db = Database::getDB();
        $tbl = $db->addTable('conf_student');
        $tbl->addFieldConditional('bannerId', $bannerId);
        $result = $db->selectInto($student);
        if ($result) {
            if (!$student->lockDate) {
                $bannerStudent = $this->pullBannerStudent($bannerId);
                if ($bannerStudent['start_date'] != $student->getBannerStartDate()) {
                    $student->startDate = strtotime($bannerStudent['start_date']);
                    $this->save($student);
                }
            }
            return $student;
        } else {
            return null;
        }
    }

    /**
     * Loads a student from database if exists. If not, checks banner and creates it.
     * If not in banner, return false.
     * @param int $bannerId
     * @param string $bannerUsername
     * @return array|boolean
     */
    public function getBannerStudent(int $bannerId, string $bannerUsername)
    {
        $student = $this->loadByBannerId($bannerId);
        if (empty($student)) {
            $bannerStudent = $this->pullBannerStudent($bannerId, $bannerUsername);
            if (!empty($bannerStudent)) {
                $student = $this->saveBannerStudent($bannerStudent);
                return $student;
            }
        } elseif ($student->username == $bannerUsername && !$student->hidden) {
            return $student;
        } else {
            return false;
        }
    }

    /**
     * Returns the student orientation data from the Banner student table.
     */
    public function pullBannerStudent(int $bannerId,
            string $bannerUsername = null)
    {
        $db = Database::getDB();
        $tbl = $db->addTable(STUDENT_ORIENTATION_TABLE);
        $tbl->addField('start_date');
        $tbl->addField('first_name');
        $tbl->addField('last_name');
        $tbl->addField('banner_id');
        $tbl->addField('banner_username');
        $tbl->addField('email_address');
        $tbl->addFieldConditional('banner_id', $bannerId);
        if ($bannerUsername !== null) {
            $tbl->addFieldConditional('banner_username', $bannerUsername);
        }
        return $db->selectOneRow();
    }

    public function matchSessionDate(int $conferenceId, string $startDate): int
    {
        $unixtime = strtotime($startDate);
        $startDateFormat = date('Y-m-d', $unixtime);
        $db = Database::getDB();
        $tbl = $db->addTable('conf_session');
        $tbl->addField('id');
        $tbl->addFieldConditional('conferenceId', $conferenceId);
        $tbl->addFieldConditional('eventDate', $unixtime);
        return $db->selectColumn();
    }

    public function saveBannerStudent(array $bannerStudent)
    {
        $student = $this->build();
        $student->firstName = $bannerStudent['first_name'];
        $student->lastName = $bannerStudent['last_name'];
        $student->username = $bannerStudent['banner_username'];
        $student->bannerId = $bannerStudent['banner_id'];
        $student->startDate = strtotime($bannerStudent['start_date']);
        $student->email = $bannerStudent['email_address'];
        $this->save($student);
        return $student;
    }

    public function bannerListing(array $options = [])
    {
        $db = Database::getDB();
        $tbl = $db->addTable(STUDENT_ORIENTATION_TABLE);
        $tbl->addField('first_name');
        $tbl->addField('last_name');
        $tbl->addField('start_date');
        $tbl->addField('banner_username');
        $tbl->addField('email_address');
        $bannerIdField = $tbl->addField('banner_id');
        $tbl->addOrderBy('banner_id');

        // banner id is always a search. If specific banner id is needed, then
        // load by banner id should be done.
        if (!empty($options['search'])) {
            $search = $options['search'];
            if (preg_match('/\d{4,}/', $search)) {
                $tbl->addFieldConditional($tbl->getField('banner_id'),
                        $search . '%', 'like');
            } elseif ($dateSearch = strtotime($search)) {
                $startDate = strftime('%Y-%m-%d', $dateSearch);
                $tbl->addFieldConditional($tbl->getField('start_date'),
                        $startDate);
            } else {
                $cond1 = $db->createConditional($tbl->getField('last_name'),
                        $search . '%', 'like');
                $cond2 = $db->createConditional($tbl->getField('banner_username'),
                        $search . '%', 'like');
                $cond3 = $db->createConditional($cond1, $cond2, 'or');
                $db->addConditional($cond3);
            }
        }
        if (!empty($options['limit'])) {
            $db->setLimit($options['limit']);
        }

        if (!empty($options['nodupes'])) {
            $tbl2 = $db->addTable('conf_student', null, false);
            $db->joinResources($tbl, $tbl2,
                    $db->createConditional($tbl->getField('banner_id'),
                            $tbl2->getField('bannerId'), '='), 'left');
            $tbl2->addFieldConditional('bannerId', null);
            $db->setGroupBy($bannerIdField);
        }

        $listing = $db->select() ?? [];
        $total = count($listing);
        if (isset($options['limit']) && $total == $options['limit']) {
            $tbl->resetFields();
            $expression = new \phpws2\Database\Expression('count(' . $tbl->getField('banner_id') . ') as total');
            $tbl->addField($expression);
            $db->clearGroupBy();
            $total = $db->selectColumn();
        }
        return ['banner' => $listing, 'total' => $total];
    }

    public function hide(int $studentId)
    {
        $student = $this->load($studentId);
        $student->hidden = true;
        return $this->save($student);
    }

    public function reveal(int $studentId)
    {
        $student = $this->load($studentId);
        $student->hidden = false;
        return $this->save($student);
    }

    public function importBannerStudents(array $students)
    {
        foreach ($students as $bannerId) {
            $bannerId = (int) $bannerId;
            $bannerStudent = $this->pullBannerStudent($bannerId);
            $this->saveBannerStudent($bannerStudent);
        }
    }

    /**
     * Imports student using alternate API to get parent information.
     * Returns null if no result is found or settings not set.
     */
    public function importBannerStudent()
    {
        if (!defined('STUDENT_BANNER_URL')) {
            return false;
        }
        $connection = curl_init();
        curl_setopt($connection, CURLOPT_URL, STUDENT_BANNER_URL);
        curl_setopt($connection, CURLOPT_RETURNTRANSFER, true);
        $studentResult = curl_exec($connection);

        curl_close($connection);
        if ($studentResult === false) {
            return false;
        }
        $student = json_decode($studentResult)->response;
        if (!is_object($student)) {
            return false;
        }

        $parents = [];
        if (isset($student->aprxrefParents)) {
            foreach ($student->aprxrefParents as $parent) {
                if (strtolower($parent->deceasedIndicator) === 'y') {
                    continue;
                }
                if (!empty($parent->emailAddresses)) {
                    foreach ($parent->emailAddresses as $email) {
                        if (empty($parent->emailAddress) || $email->preferredIndicator === 'Y') {
                            $parent->emailAddress = $email->emailAddress;
                        }
                    }
                }
                $parents[] = $parent;
            }
        }
        $student->parents = $parents;
        return $student;
    }

}
