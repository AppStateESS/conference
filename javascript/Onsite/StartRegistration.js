'use strict'
import React, {useState} from 'react'
import PropTypes from 'prop-types'

const StartRegistration = ({sessionId, studentId}) => {
  return (
    <div>
      <p>You are ready to start registration.</p>
      <div>
        <a
          className="btn btn-primary btn-block"
          href={`conference/Visitor/Session/${sessionId}/signup/?studentId=${studentId}`}>
          Go to registration
        </a>
      </div>
    </div>
  )
}

StartRegistration.propTypes = {}

export default StartRegistration
