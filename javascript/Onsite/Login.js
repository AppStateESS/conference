'use strict'
import React, {useState} from 'react'
import PropTypes from 'prop-types'

/* global $ */

const Login = ({setStage, email, hasRegistration}) => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const login = () => {
    $.ajax({
      url: 'conference/User/Visitor/login',
      data: {email, password},
      dataType: 'json',
      type: 'post',
      success: (data) => {
        if (data.success === true) {
          setStage('startRegistration')
        } else {
          setError(
            <div className="badge badge-danger">Password not accepted.</div>
          )
        }
      },
      error: () => {},
    })
  }

  let registrationInfo
  if (hasRegistration.completed === 0) {
    registrationInfo = (
      <div className="mb-3">
        <p>
          You may log in below to complete your registration. If you created
          this account today, your password was sent to your email address.
        </p>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
          {error}
        </div>
        <div className="mb-3">
          <button className="btn btn-primary btn-block mb-2" onClick={login}>
            Log in as {email}
          </button>
          <button
            className="btn btn-outline-danger btn-block"
            onClick={() => {
              setStage('createAccount')
            }}>
            Go back to email entry
          </button>
        </div>
      </div>
    )
  } else {
    registrationInfo = (
      <div>
        <p>You have a completed registration for this event. You are done!</p>
      </div>
    )
  }
  return (
    <div>
      <p>
        This email address ({email}) associated with this parent already has an
        account.
      </p>
      {registrationInfo}
    </div>
  )
}

Login.propTypes = {
  setStage: PropTypes.func,
  email: PropTypes.string,
  visitor: PropTypes.object,
  hasRegistration: PropTypes.object,
  sessionId: PropTypes.number,
}

export default Login
