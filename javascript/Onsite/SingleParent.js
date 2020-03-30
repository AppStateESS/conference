'use strict'
import React, {useState} from 'react'
import PropTypes from 'prop-types'

const SingleParent = ({createAccount}) => {
  return (
    <div>
      <h3>Create an account</h3>
      <p>No parent account is associated currently with this student.</p>
      <p className="text-center">
        <button className="btn btn-outline-success" onClick={createAccount}>
          Continue to create a quick account.
        </button>
      </p>
    </div>
  )
}

SingleParent.propTypes = {}

export default SingleParent
