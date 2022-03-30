'use strict'
import React, {useState, useEffect, Fragment} from 'react'
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
    email: '',
    phone: '',
    hometown: '',
    alum: 0,
    gradYear: 0,
    employer: '',
    position: '',
  }
  const [guestList, setGuestList] = useState([])
  const [loading, setloading] = useState(true)
  const [session, setSession] = useState({})
  const [visitor, setVisitor] = useState({})
  const [showOverlay, setShowOverlay] = useState(false)
  const [guestKey, setGuestKey] = useState(-1)
  const [currentGuest, setCurrentGuest] = useState(emptyGuest)
  const [registration, setRegistration] = useState({completed: null})

  useEffect(() => {
    loadRegistration().then((data) => {
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

  const confirmGuestDeletion = (guestId) => {
    if (registration.completed === 0 || registration.totalCost === 0) {
      if (
        confirm(
          'Are you certain you wish to remove this guest from this registration?'
        )
      ) {
        $.ajax({
          url: `conference/Admin/Registration/${registration.id}/removeGuest`,
          data: {guestId},
          dataType: 'json',
          type: 'patch',
          success: () => {
            loadGuests()
          },
        })
      }
    }
  }

  const resetGuest = () => {
    setCurrentGuest(Object.assign(emptyGuest, {}))
    setGuestKey(-1)
  }

  const loadRegistration = () => {
    return $.ajax({
      url: 'conference/Admin/Registration/' + registrationId,
      dataType: 'json',
      type: 'get',
      success: (data) => {
        setRegistration(data)
      },
      error: () => {},
    })
  }

  const loadVisitor = (visitorId) => {
    return $.ajax({
      url: 'conference/Admin/Visitor/' + visitorId,
      dataType: 'json',
      type: 'get',
      success: (data) => {
        setVisitor(data)
      },
      error: () => {},
    })
  }

  const loadSession = (sessionId) => {
    return $.ajax({
      url: 'conference/Admin/Session/' + sessionId,
      dataType: 'json',
      type: 'get',
      success: (data) => {
        setSession(data)
      },
      error: () => {},
    })
  }

  const loadGuests = () => {
    $.ajax({
      url: 'conference/Admin/Guest/',
      data: {registrationId},
      dataType: 'json',
      type: 'get',
      success: (data) => {
        setGuestList(data)
        setloading(false)
      },
      error: () => {},
    })
  }

  const headerInfo = (
    <Fragment>
      <h3>
        <a
          href={`./conference/Admin/Payment/?registrationId=${registration.id}`}>
          Registration
        </a>{' '}
        guests of{' '}
        <a
          href={`./conference/Admin/Registration/visitor?visitorId=${visitor.id}`}>
          {visitor.firstName} {visitor.lastName}
        </a>{' '}
        at session{' '}
        <a href={`conference/Admin/Registration/?sessionId=${session.id}`}>
          {session.title}
        </a>
      </h3>
      <p>
        Registration is currently{' '}
        {registration.completed === 1 ? (
          <span className="text-success">complete.</span>
        ) : (
          <span className="text-warning">incomplete.</span>
        )}
      </p>
    </Fragment>
  )

  if (loading) {
    return <p>Loading guests</p>
  } else if (guestList.length === 0) {
    return (
      <div>
        {headerInfo}
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

    let allowRemove =
      registration.completed === 0 || registration.totalCost === 0

    const listing = guestList.map((value, key) => {
      const guestName = (
        <span>
          {value.firstName} {value.lastName}
        </span>
      )
      return (
        <tr key={value.id}>
          <td>
            <button
              className="btn btn-primary btn-sm mr-1"
              onClick={() => {
                setShowOverlay(true)
                setGuestKey(key)
              }}>
              <i className="fas fa-edit"></i>&nbsp; Edit
            </button>
            {allowRemove ? (
              <button
                className="btn btn-danger btn-sm"
                onClick={() => {
                  confirmGuestDeletion(value.id)
                }}>
                <i className="fas fa-user-alt-slash"></i>&nbsp;Remove
              </button>
            ) : null}
          </td>
          <td>{guestName}</td>
          <td>{value.relationship}</td>
          <td>
            <a href="mailto:{value.email}">{value.email}</a>
          </td>
        </tr>
      )
    })
    return (
      <div>
        {overlay}
        {headerInfo}
        <div>
          <table className="table table-striped">
            <tbody>
              <tr>
                <th>&nbsp;</th>
                <th>Name</th>
                <th>Relationship</th>
                <th>Email</th>
              </tr>
              {listing}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

Guest.propTypes = {
  registrationId: PropTypes.number,
}

export default Guest

ReactDOM.render(
  <Guest registrationId={registrationId} />,
  document.getElementById('Guest')
)
