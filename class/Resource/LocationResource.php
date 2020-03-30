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

namespace conference\Resource;

class LocationResource extends AbstractResource
{

    protected $title;
    protected $description;
    protected $directions;
    protected $url;
    protected $image;
    protected $deleted;
    protected $table = 'conf_location';

    public function __construct()
    {
        parent::__construct();
        $this->title = new \phpws2\Variable\TextOnly(null, 'title');
        $this->title->allowEmpty(false);
        $this->description = new \phpws2\Variable\StringVar(null, 'description');
        $this->directions = new \phpws2\Variable\StringVar(null, 'directions');
        $this->url = new \phpws2\Variable\Url(null, 'url');
        $this->url->setPrependHttp(true);
        $this->image = new \phpws2\Variable\FileVar(null, 'image');
        $this->deleted = new \phpws2\Variable\BooleanVar(false, 'deleted');
    }

    public function setDescription($value)
    {
        $this->description->set($this->strip($value));
    }

    public function setDirections($value)
    {
        $this->directions->set($this->strip($value));
    }

}
