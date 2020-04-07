'use strict'
import React, {useState, useEffect} from 'react'
import {getPasswordMessage} from '../Shared/Password'
import PropTypes from 'prop-types'

/* global $ */

const Form = ({setStatus}) => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [password, setPassword] = useState('')
  const [toggleShow, setToggleShow] = useState(false)
  const [checkPassword, setCheckPassword] = useState('')
  const [allowSave, setAllowSave] = useState(false)
  const [duplicate, setDuplicate] = useState(false)

  useEffect(() => {
    setEmailError(!emailFormatCorrect())
    setDuplicate(false)
  }, [email])

  useEffect(() => {
    comparePassword()
  }, [password, checkPassword])

  const emailFormatCorrect = () => {
    const expression = /\S+@\S+\.\S+/
    return expression.test(String(email).toLowerCase())
  }

  const getEmailMessage = () => {
    if (email.length === 0) {
      return (
        <div className="d-block badge badge-light">
          Enter your email address above
        </div>
      )
    } else if (emailError) {
      return (
        <div className="d-block badge badge-warning">
          This email does not appear correct.
        </div>
      )
    } else if (duplicate) {
      return (
        <div className="d-block badge badge-danger">
          This email address is already in use. You can&nbsp;
          <a href="./conference/User/Visitor/login" className="text-light">
            login
          </a>{' '}
          or{' '}
          <a
            href="./conference/User/Visitor/forgotPassword"
            className="text-light">
            reset your password
          </a>
        </div>
      )
    } else {
      return (
        <div className="d-block badge badge-success">
          Email format looks good
        </div>
      )
    }
  }

  const save = () => {
    if (isBadAccount()) {
      return
    }
    $.ajax({
      url: './conference/User/Visitor/',
      data: {
        email,
        password,
      },
      dataType: 'json',
      type: 'post',
      success: (data) => {
        if (data.success) {
          setStatus('success')
        } else {
          setStatus('error')
        }
      },
      error: () => {
        setStatus('error')
      },
    })
  }

  const isBadAccount = () => {
    return (
      !emailFormatCorrect() ||
      email.length === 0 ||
      password.length < 8 ||
      password !== checkPassword ||
      password.search(/[^a-z]/) === -1
    )
  }

  const comparePassword = () => {
    setAllowSave(password === checkPassword && email.length > 0)
  }

  const createAccount = () => {
    if (isBadAccount()) {
      return
    }
    $.ajax({
      url: './conference/User/Visitor/checkEmail',
      data: {
        email,
      },
      dataType: 'json',
      type: 'get',
      success: (data) => {
        if (!data.found) {
          save()
        } else {
          setDuplicate(true)
        }
      },
      error: () => {
        setStatus('error')
      },
    })
  }

  const showDuplicate = () => {
    if (!duplicate) {
      return
    }
    return (
      <div className="alert alert-danger mt-4">
        We already have an account using the email address&nbsp;
        <span className="text-success">
          <strong>{email}</strong>
        </span>
        .
        <br />
        Did you mean to&nbsp;
        <a href="./conference/User/Visitor/login">log in instead?</a>
        <br />
        Or maybe you&nbsp;
        <a href="./conference/User/Visitor/forgotPassword">
          forgot your password?
        </a>
      </div>
    )
  }

  return (
    <div>
      <div className="card-title">
        <h3>Signup for a new account</h3>
      </div>
      <div className="card-text">
        <label>Email address</label>
        <input
          type="text"
          name="emailAddress"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {getEmailMessage()}
        <label className="mt-3">Password:</label>
        <div className="input-group">
          <input
            type={toggleShow ? 'text' : 'password'}
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-label="Password"
          />
          <div className="input-group-append">
            <div
              className={`input-group-text pointer ${
                toggleShow ? ' bg-success text-white' : null
              }`}
              onClick={() => setToggleShow(!toggleShow)}>
              <i className="fas fa-eye" />
            </div>
          </div>
        </div>
        <div className="small">
          {getPasswordMessage(password, checkPassword)}
        </div>
        <label className="mt-3">Re-enter password:</label>
        <input
          type={toggleShow ? 'text' : 'password'}
          name="checkPassword"
          className="form-control"
          value={checkPassword}
          onChange={(e) => {
            setCheckPassword(e.target.value)
          }}
        />
        <div className="text-center">
          <button
            disabled={!allowSave || emailError}
            className="btn btn-success mt-3"
            onClick={createAccount}>
            Create my account
          </button>
        </div>
      </div>
    </div>
  )
}

Form.propTypes = {}

export default Form
