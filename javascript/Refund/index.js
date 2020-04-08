'use strict'
import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import RefundForm from './RefundForm'

/* global $, registrationId */

const Refund = ({registrationId}) => {
  const [registration, setRegistration] = useState({
    id: 0,
    amount: 0,
    registrationId,
  })
  const [session, setSession] = useState({id: 0})
  const [visitor, setVisitor] = useState({id: 0})
  const [guests, setGuests] = useState([])
  const [loading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    $.ajax({
      url: `conference/Admin/Registration/${registrationId}`,
      dataType: 'json',
      type: 'get',
      success: (data) => {
        setRegistration(data)
      },
      error: (data) => {
        showError(data)
      },
    })
  }, [])

  useEffect(() => {
    if (registration.id === 0) {
      return
    }
    $.ajax({
      url: `conference/Admin/Session/${registration.sessionId}`,
      dataType: 'json',
      type: 'get',
      success: (data) => {
        setSession(data)
      },
      error: (data) => {
        showError(data)
      },
    })

    $.ajax({
      url: `conference/Admin/Visitor/${registration.visitorId}`,
      dataType: 'json',
      type: 'get',
      success: (data) => {
        setVisitor(data)
      },
      error: () => {},
    })
  }, [registration])

  useEffect(() => {
    if (session.id === 0) {
      return
    }
    $.ajax({
      url: 'conference/Admin/Guest',
      data: {registrationId},
      dataType: 'json',
      type: 'get',
      success: (data) => {
        setGuests(data)
        setLoading(false)
      },
      error: (data) => {
        showError(data)
      },
    })
  }, [session])

  const showError = (e) => {
    setErrorMessage('Error: ' + e.responseJSON.exception.message)
    setLoading(false)
  }

  const getTitle = () => {
    return (
      <div>
        <h2 className="mb-1">
          Session: {session.title} {session.eventDateFormat}
        </h2>
        <h3 className="mb-4">
          Refund registration for {visitor.firstName} {visitor.lastName}
        </h3>
      </div>
    )
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (errorMessage) {
    return <div className="alert alert-danger">{errorMessage}</div>
  }
  if (registration.cancelledBy.length > 0) {
    return (
      <div>
        {getTitle()}
        <p>
          This registration was previously cancelled on{' '}
          {registration.cancelledDate} by {registration.cancelledBy}.
        </p>
        <p>
          <a
            href={`conference/Admin/Payment/?registrationId=${registration.id}`}>
            Return to registration payments
          </a>
        </p>
      </div>
    )
  }

  if (registration.refundAmount > 0 && registration.totalCost == 0) {
    return (
      <div>
        {getTitle()}
        <div>This registration was completely refunded.</div>
      </div>
    )
  }

  return (
    <div>
      {getTitle()}
      <RefundForm
        registration={registration}
        session={session}
        guests={guests}
      />
    </div>
  )
}

Refund.propTypes = {
  registrationId: PropTypes.number,
}

ReactDOM.render(
  <Refund registrationId={registrationId} />,
  document.getElementById('Refund')
)
