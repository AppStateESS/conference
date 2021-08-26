'use strict'
import React, {useState} from 'react'
import PropTypes from 'prop-types'

/* global $ */

const CreateAccount = ({setStage, setVisitor}) => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const saveAccount = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      emailInUse()
    } else {
      setError('Email address incorrectly formatted.')
    }
  }

  const createQuickVisitor = () => {
    $.ajax({
      url: 'conference/User/Onsite/createQuick',
      data: {email},
      dataType: 'json',
      type: 'post',
      success: (data) => {
        setVisitor(data.visitor)
        setStage('startRegistration')
      },
      error: () => {},
    })
  }

  const emailInUse = () => {
    $.ajax({
      url: 'conference/User/Onsite/checkEmail',
      data: {email},
      dataType: 'json',
      type: 'get',
      success: (data) => {
        if (data.found) {
          setVisitor(data.visitor)
          setStage('login')
        } else {
          createQuickVisitor()
        }
      },
      error: () => {},
    })
  }

  return (
    <div>
      <div className="mb-3">
        Your email address:
        <input
          className="form-control"
          type="text"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {error != '' ? <div className="badge badge-danger">{error}</div> : null}
      </div>

      <button
        className="btn btn-success mr-3"
        onClick={() => {
          saveAccount()
        }}>
        Create my account
      </button>
    </div>
  )
}

CreateAccount.propTypes = {setStage: PropTypes.func, setVisitor: PropTypes.func}

export default CreateAccount
