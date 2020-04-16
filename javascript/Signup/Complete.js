'use strict'
import React, {useState} from 'react'
import PropTypes from 'prop-types'

const Complete = ({parent}) => {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState(parent.emailAddress)

  const createAccount = () => {}

  const firstName = parent.prefFirstName ?? parent.firstName
  return (
    <div>
      <p className="lead">
        Hello, {firstName} {parent.lastName}
      </p>
      <div className="form-group">
        <label htmlFor="email">Your email address:</label>
        <input
          type="text"
          className="form-control"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          name="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Enter password once more</label>
        <input
          type="password"
          className="form-control"
          name="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        className="btn btn-primary btn-block"
        onClick={() => {
          createAccount()
        }}>
        Create my account
      </button>
    </div>
  )
}

Complete.propTypes = {parent: PropTypes.object}

export default Complete
