'use strict'
import React, {useState, useEffect, useRef} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Registrations from './Registrations'
import useInterval from './useInterval'

/* global $, sessionId */

const Signin = ({sessionId}) => {
  const delay = 30000
  const [loading, setLoading] = useState(true)
  const [session, setSession] = useState({id: 0})
  const [registrations, setRegistrations] = useState([])
  const [search, setSearch] = useState('')
  const [isRunning, setIsRunning] = useState(true)

  useInterval(
    () => {
      loadRegistrations()
    },
    isRunning ? delay : null
  )

  useEffect(() => {
    if (search.length > 0) {
      setIsRunning(false)
    } else {
      loadRegistrations()
    }
  }, [search])

  useEffect(() => {
    $.ajax({
      url: `conference/Admin/Session/${sessionId}`,
      dataType: 'json',
      type: 'get',
      success: data => {
        setSession(data)
      },
      error: () => {}
    })
  }, [])

  const loadRegistrations = () => {
    setLoading(true)
    $.ajax({
      url: 'conference/Admin/Registration/unpaid',
      data: {sessionId, search},
      dataType: 'json',
      type: 'get',
      success: data => {
        setLoading(false)
        setRegistrations(data.listing)
        setIsRunning(data.listing.length > 0 && search.length === 0)
      },
      error: () => {
        setIsRunning(false)
      }
    })
  }

  const searchRegistrations = () => {
    loadRegistrations()
  }

  if (loading) {
    return (
      <h2 className="text-center mt-5">
        <i className="fas fa-spinner fa-spin"></i>&nbsp;Loading...
      </h2>
    )
  }

  return (
    <div>
      <div className="input-group">
        <div className="input-group-append">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button
            className="btn btn-outline-primary"
            type="button"
            onClick={() => searchRegistrations()}>
            Search
          </button>
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => setSearch('')}>
            Clear
          </button>
        </div>
      </div>
      {!isRunning && registrations.length > 0 ? (
        <span className="badge badge-info text-light">
          List refresh suspended while searching. Clear search to resume.
        </span>
      ) : null}

      <h2 className="mt-3">
        {session.title} - Unpaid&nbsp;
        <a
          className="btn btn-outline-dark"
          href={`conference/Admin/Registration/?sessionId=${session.id}`}>
          View all registrations
        </a>
      </h2>

      <Registrations listing={registrations} />
    </div>
  )
}

Signin.propTypes = {
  sessionId: PropTypes.number
}

ReactDOM.render(
  <Signin sessionId={sessionId} />,
  document.getElementById('Signin')
)
