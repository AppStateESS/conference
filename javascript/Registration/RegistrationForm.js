'use strict'
import React, {useState} from 'react'
import PropTypes from 'prop-types'

/* global $ */

const RegistrationForm = ({registration, availableSessions, done}) => {
  if (availableSessions.length === 0) {
    return (
      <div className="alert alert-warning">
        No sessions are available due to cost diference or date.
      </div>
    )
  }

  const [newSessionId, setNewSessionId] = useState(availableSessions[0].id)

  const updateSession = () => {
    $.ajax({
      url: `conference/Admin/Registration/${registration.id}/changeSession`,
      data: {sessionId: newSessionId},
      dataType: 'json',
      type: 'patch',
      success: () => {
        done()
      },
      error: () => {}
    })
  }

  const optionList = availableSessions.map(value => {
    return (
      <option key={value.id} value={value.id}>
        {value.eventDateFormat}&#32;&ndash;&#32;{value.title}
      </option>
    )
  })

  const options = (
    <select
      className="form-control"
      value={newSessionId}
      onChange={e => setNewSessionId(e.target.value)}>
      {optionList}
    </select>
  )

  return (
    <div className="container">
      {registration.completed === 1 ? (
        <p>
          This registration is complete so only sessions of the same cost may be
          chosen.
        </p>
      ) : (
        <p>Registration is unpaid so any future session may be chosen.</p>
      )}
      {options}
      <hr />
      <button className="btn btn-success" onClick={updateSession}>
        Update
      </button>
    </div>
  )
}

RegistrationForm.propTypes = {
  registration: PropTypes.object,
  availableSessions: PropTypes.array,
  done: PropTypes.func
}

export default RegistrationForm
