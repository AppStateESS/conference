'use strict'
import React from 'react'
import PropTypes from 'prop-types'

const Duplicate = ({setStatus}) => {
  return (
    <div>
      <h3>Sorry</h3>
      <p>An account with this email address is already in the system.</p>
      <button
        className="btn btn-primary btn-block mb-2"
        onClick={() => {
          setStatus('form')
        }}>
        Create a new account with a different email address.
      </button>
    </div>
  )
}

Duplicate.propTypes = {setStatus: PropTypes.func}

export default Duplicate
