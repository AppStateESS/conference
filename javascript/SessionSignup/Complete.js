'use strict'
import React from 'react'
import PropTypes from 'prop-types'

const Complete = ({registration, signupAllowed}) => {
  const supplementButton = () => {
    if (signupAllowed) {
      return (
        <span>
          &nbsp; - or -&nbsp;
          <a
            className="btn btn-primary"
            href={`conference/Visitor/Supplement/?registrationId=${registration.id}`}>
            Add another guest or meal
          </a>
        </span>
      )
    } else {
      return null
    }
  }
  return (
    <div>
      <p className="lead">Your registration is complete!</p>
      <p>
        You may&nbsp;
        <a
          className="btn btn-outline-dark"
          href={`conference/Visitor/Registration/${registration.id}`}>
          Review your registration
        </a>
        {supplementButton()}
      </p>
      <div></div>
    </div>
  )
}

Complete.propTypes = {
  registration: PropTypes.object,
  signupAllowed: PropTypes.bool
}

export default Complete
