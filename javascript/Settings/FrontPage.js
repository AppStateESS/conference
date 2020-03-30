'use strict'
import React, {useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'

/* global $ */

const FrontPage = ({}) => {
  const [defaultConference, setDefaultConference] = useState(0)
  const [conferences, setConferences] = useState([])
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    $.ajax({
      url: 'conference/Admin/Settings/defaultConference',
      dataType: 'json',
      type: 'get',
      success: data => {
        setDefaultConference(data.defaultConference)
      }
    })
  }, [])

  useEffect(() => {
    $.ajax({
      url: 'conference/Admin/Conference',
      dataType: 'json',
      type: 'get',
      success: data => {
        setConferences(data.listing)
      },
      error: () => {}
    })
  }, [])

  const options = () => {
    const confArray = conferences.map(value => {
      return (
        <option key={value.id} value={value.id}>
          {value.title}
        </option>
      )
    })
    confArray.unshift(
      <option value="0" key="0">
        Show all conferences on front page.
      </option>
    )
    return confArray
  }

  const saveConference = () => {
    $.ajax({
      url: 'conference/Admin/Settings/defaultConference',
      data: {defaultConference},
      dataType: 'json',
      type: 'post',
      success: () => {
        setSaved(true)
      }
    })
  }

  const saveButton = () => {
    if (saved) {
      return (
        <button className="btn btn-success" onClick={saveConference}>
          <FontAwesomeIcon icon={faCheck} />
          &nbsp; Saved!
        </button>
      )
    } else {
      return (
        <button className="btn btn-success" onClick={saveConference}>
          Save
        </button>
      )
    }
  }

  return (
    <div className="mb-5">
      <h3>Set default conference</h3>
      <p>
        Instead of listing all conferences, you may prioritize one conference to
        show on the front page.
      </p>
      <select
        value={defaultConference}
        className="form-control"
        onChange={e => setDefaultConference(e.target.value)}>
        {options()}
      </select>
      {saveButton()}
    </div>
  )
}

FrontPage.propTypes = {}

export default FrontPage
