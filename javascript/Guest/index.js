'use strict'
import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Overlay from '@essappstate/canopy-react-overlay'
import GuestForm from './GuestForm'

/* global $, registrationId */

const Guest = ({registrationId}) => {
  const emptyGuest = {
    id: 0,
    firstName: '',
    lastName: '',
    email: ''
  }
  const [guestList, setGuestList] = useState([])
  const [loading, setloading] = useState(true)
  const [registration, setRegistration] = useState({})
  const [session, setSession] = useState({})
  const [visitor, setVisitor] = useState({})
  const [showOverlay, setShowOverlay] = useState(false)
  const [guestKey, setGuestKey] = useState(-1)
  const [currentGuest, setCurrentGuest] = useState(emptyGuest)

  useEffect(() => {
    loadRegistration().then(data => {
      loadSession(data.sessionId)
      loadVisitor(data.visitorId)
      loadGuests()
    })
  }, [])

  useEffect(() => {
    if (guestKey === -1) {
      resetGuest()
    } else {
      setCurrentGuest(Object.assign({}, guestList[guestKey]))
    }
  }, [guestKey])

  const resetGuest = () => {
    setCurrentGuest(Object.assign(emptyGuest, {}))
    setGuestKey(-1)
  }

  const loadRegistration = () => {
    return $.ajax({
      url: 'conference/Admin/Registration/' + registrationId,
      dataType: 'json',
      type: 'get',
      success: data => {
        setRegistration(data)
      },
      error: () => {}
    })
  }

  const loadVisitor = visitorId => {
    return $.ajax({
      url: 'conference/Admin/Visitor/' + visitorId,
      dataType: 'json',
      type: 'get',
      success: data => {
        setVisitor(data)
      },
      error: () => {}
    })
  }

  const loadSession = sessionId => {
    return $.ajax({
      url: 'conference/Admin/Session/' + sessionId,
      dataType: 'json',
      type: 'get',
      success: data => {
        setSession(data)
      },
      error: () => {}
    })
  }

  const loadGuests = () => {
    $.ajax({
      url: 'conference/Admin/Guest/',
      data: {registrationId},
      dataType: 'json',
      type: 'get',
      success: data => {
        setGuestList(data)
        setloading(false)
      },
      error: () => {}
    })
  }
  if (loading) {
    return <p>Loading guests</p>
  } else if (guestList.length === 0) {
    return (
      <div>
        No guests found for {visitor.firstName} {visitor.lastName}
      </div>
    )
  } else {
    const overlay = (
      <Overlay
        show={showOverlay}
        close={() => {
          setShowOverlay(false)
          resetGuest()
        }}
        width="500px"
        title="Update Guest Information">
        <GuestForm
          guest={currentGuest}
          saveComplete={() => {
            setShowOverlay(false)
            resetGuest()
            loadGuests()
          }}
        />
      </Overlay>
    )
    const listing = guestList.map((value, key) => {
      const guestName = (
        <span>
          {value.firstName} {value.lastName}
        </span>
      )
      return (
        <tr key={value.id}>
          <td style={{width: '100px'}}>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => {
                setShowOverlay(true)
                setGuestKey(key)
              }}>
              <i className="fas fa-edit"></i>&nbsp; Edit
            </button>
          </td>
          <td>{guestName}</td>
          <td>
            <a href="mailto:{value.email}">{value.email}</a>
          </td>
        </tr>
      )
    })
    return (
      <div>
        {overlay}
        <h3>
          Guests of {visitor.firstName} {visitor.lastName} at session{' '}
          <a href={`conference/Admin/Registration/?sessionId=${session.id}`}>
            {session.title}
          </a>
        </h3>
        <div>
          <table className="table">
            <tbody>{listing}</tbody>
          </table>
        </div>
      </div>
    )
  }
}

Guest.propTypes = {
  registrationId: PropTypes.number
}

export default Guest

ReactDOM.render(
  <Guest registrationId={registrationId} />,
  document.getElementById('Guest')
)
