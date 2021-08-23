'use strict'
import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

/* global $ */

const SessionChange = (props) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [sessionList, setSessionList] = useState([])
  const [changeSessionId, setChangeSession] = useState(0)

  useEffect(() => {
    let mounted = true
    $.ajax({
      url: 'conference/Visitor/Session/change',
      data: {
        registrationId: props.registrationId,
      },
      dataType: 'json',
      type: 'get',
      success: (data) => {
        if (mounted) {
          if (data.length) {
            setSessionList(data)
          }
          setLoading(false)
        }
      },
      error: () => {
        setError(true)
      },
    })
    return () => (mounted = false)
  }, [])

  if (loading) {
    return <div>Loading sessions...</div>
  }
  if (error) {
    return (
      <div className="alert alert-danger">Could not load other sessions.</div>
    )
  }

  let sessionSelect = (
    <div>
      <em>
        No alternative sessions available due to cost difference or signup
        deadlines.
      </em>
    </div>
  )
  let priceWarning
  if (props.completed === 1) {
    priceWarning = (
      <div className="badge badge-info text-white">
        Note: if you have already paid, you may only change to a session of the
        same cost.
      </div>
    )
  }
  if (sessionList.length) {
    let sessionOptions = []
    sessionOptions = sessionList.map((value, key) => {
      return (
        <option key={key} value={value.id}>
          {value.title} - {value.eventDateFormat} - {value.days} day session
        </option>
      )
    })

    sessionSelect = (
      <div>
        <div className="row">
          <div className="col-9">
            <select
              className="form-control"
              onChange={(e) => setChangeSession(e.target.value)}
              value={changeSessionId}>
              <option disabled defaultChecked value={0}>
                Prefer to change your session? Pick a different date below.
              </option>
              {sessionOptions}
            </select>
          </div>
          <div className="col-3">
            <button
              className="btn btn-primary"
              disabled={changeSessionId == 0}
              onClick={() => {
                props.changeSession(changeSessionId)
              }}>
              Change my session
            </button>
          </div>
        </div>
        {priceWarning}
      </div>
    )
  }

  return <div className="p-2 mb-2">{sessionSelect}</div>
}

SessionChange.propTypes = {
  registrationId: PropTypes.number,
  completed: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  changeSession: PropTypes.func,
}

export default SessionChange
