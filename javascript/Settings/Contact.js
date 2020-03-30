'use strict'
import React, {useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck, faSpinner} from '@fortawesome/free-solid-svg-icons'

/* global $ */

const Contact = () => {
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [buttonState, setButtonState] = useState('save')

  useEffect(() => {
    $.ajax({
      url: 'conference/Admin/Settings/contact',
      dataType: 'json',
      type: 'get',
      success: data => {
        setContactName(data.contactName)
        setContactEmail(data.contactEmail)
      }
    })
  }, [])

  const saveContact = () => {
    setButtonState('saving')
    $.ajax({
      url: 'conference/Admin/Settings/contact',
      data: {
        contactName: contactName,
        contactEmail: contactEmail
      },
      dataType: 'json',
      type: 'post',
      success: () => {
        setButtonState('saved')
      },
      error: () => {}
    })
  }

  const saveContactButton = () => {
    switch (buttonState) {
      case 'save':
        return (
          <button className="btn btn-success" onClick={saveContact}>
            Save contact
          </button>
        )

      case 'saving':
        return (
          <button className="btn btn-outline-success">
            <FontAwesomeIcon icon={faSpinner} spin /> Saving...
          </button>
        )

      case 'saved':
        return (
          <button className="btn btn-success">
            <FontAwesomeIcon icon={faCheck} /> Saved!
          </button>
        )
    }
  }

  return (
    <div className="mb-4">
      <h3>Contact</h3>
      <p>The person or entity sent in emails to visitors.</p>
      <div className="row mb-3">
        <div className="col-sm-6">
          <label>Contact name</label>
          <input
            name="contactName"
            onFocus={() => setButtonState('save')}
            className="form-control"
            value={contactName}
            onChange={e => {
              setContactName(e.target.value)
            }}
          />
        </div>
        <div className="col-sm-6">
          <label>Contact email</label>
          <input
            name="contactEmail"
            onFocus={() => setButtonState('save')}
            className="form-control"
            value={contactEmail}
            onChange={e => {
              setContactEmail(e.target.value)
            }}
          />
        </div>
      </div>
      <div className="text-center">{saveContactButton()}</div>
    </div>
  )
}

export default Contact
