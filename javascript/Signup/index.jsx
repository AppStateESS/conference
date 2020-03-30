'use strict'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {getPasswordMessage} from '../Shared/Password'

/* global $ */

export default class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: '',
      status: 'form',
      showPassword: false,
      password: '',
      checkPassword: '',
      email: '',
      emailError: false,
      toggleShow: false,
      allowSave: false
    }
    this.toggleShow = this.toggleShow.bind(this)
    this.createAccount = this.createAccount.bind(this)
    this.comparePassword = this.comparePassword.bind(this)
    this.checkEmail = this.checkEmail.bind(this)
    this.getEmailMessage = this.getEmailMessage.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
    this.updateCheckPassword = this.updateCheckPassword.bind(this)
    this.updateEmail = this.updateEmail.bind(this)
  }

  toggleShow() {
    this.setState({
      toggleShow: !this.state.toggleShow
    })
  }

  checkEmail() {
    this.setState({
      emailError: !this.emailFormatCorrect()
    })
  }

  emailFormatCorrect() {
    const expression = /\S+@\S+/
    return expression.test(String(this.state.email).toLowerCase())
  }

  getEmailMessage() {
    if (this.state.email.length === 0) {
      return 'Enter your email address above'
    } else if (this.state.emailError) {
      return 'This email does not appear correct.'
    }
  }

  isBadAccount() {
    const {password, email, checkPassword} = this.state
    return (
      !this.emailFormatCorrect() ||
      email.length === 0 ||
      password.length < 8 ||
      password !== checkPassword ||
      password.search(/[^a-z]/) === -1
    )
  }

  save() {
    if (this.isBadAccount()) {
      return
    }
    $.ajax({
      url: './conference/User/Visitor/',
      data: {
        email: this.state.email,
        password: this.state.password
      },
      dataType: 'json',
      type: 'post',
      success: data => {
        if (data.success) {
          this.setState({status: 'success', error: ''})
        } else {
          this.setState({status: 'error', error: data.error})
        }
      },
      error: () => {
        this.setState({status: 'error'})
      }
    })
  }

  createAccount() {
    if (this.isBadAccount()) {
      return
    }
    $.ajax({
      url: './conference/User/Visitor/checkEmail',
      data: {
        email: this.state.email
      },
      dataType: 'json',
      type: 'get',
      success: data => {
        if (!data.found) {
          this.save()
        } else {
          this.setState({status: 'duplicate'})
        }
      },
      error: () => {
        this.setState({status: 'error'})
      }
    })
  }

  comparePassword() {
    if (this.state.password === this.state.checkPassword) {
      this.setState({allowSave: this.state.email.length > 0})
    } else {
      this.setState({allowSave: false})
    }
  }

  updatePassword(e) {
    this.setState({password: e.target.value}, this.comparePassword)
  }

  updateCheckPassword(e) {
    this.setState({checkPassword: e.target.value}, this.comparePassword)
  }

  updateEmail(e) {
    this.setState({email: e.target.value}, this.checkEmail)
  }

  form() {
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
            value={this.state.email}
            onChange={this.updateEmail}
          />
          <div className="small">{this.getEmailMessage()}</div>
          <label className="mt-3">Password:</label>
          <div className="input-group">
            <input
              type={this.state.toggleShow ? 'text' : 'password'}
              className="form-control"
              value={this.state.password}
              onChange={this.updatePassword}
              aria-label="Password"
            />
            <div className="input-group-append">
              <div
                className={`input-group-text pointer ${
                  this.state.toggleShow ? ' bg-success text-white' : null
                }`}
                onClick={this.toggleShow}>
                <i className="fas fa-eye" />
              </div>
            </div>
          </div>
          <div className="small">
            {getPasswordMessage(this.state.password, this.state.checkPassword)}
          </div>
          <label className="mt-3">Re-enter password:</label>
          <input
            type={this.state.toggleShow ? 'text' : 'password'}
            name="checkPassword"
            className="form-control"
            value={this.state.checkPassword}
            onChange={this.updateCheckPassword}
          />
          <div className="text-center">
            <button
              disabled={!this.state.allowSave || this.state.emailError}
              className="btn btn-success mt-3"
              onClick={this.createAccount}>
              Create my account
            </button>
          </div>
        </div>
      </div>
    )
  }

  duplicate() {
    return (
      <div>
        <h3>Hmmm...</h3>
        <p>
          We already have an account using the email{' '}
          <span className="text-success">
            <strong>{this.state.email}</strong>
          </span>
          .
        </p>
        <p>
          Did you mean to&nbsp;
          <a href="./conference/User/Visitor/login">log in instead?</a>
        </p>
        <p>
          Or maybe you&nbsp;
          <a href="./conference/User/Visitor/forgotPassword">
            forgot your password?
          </a>
        </p>
      </div>
    )
  }

  success() {
    return (
      <div>
        <h3>Almost done!</h3>
        <p>
          Your account has been created, we just need verification. Please check
          your email and click the authorization link we sent you.
        </p>
        <p>
          Once you have done that,&nbsp;
          <a href="./conference/User/Visitor/login">you can log in</a>.
        </p>
      </div>
    )
  }

  error() {
    return (
      <div>
        <p>Error: {this.state.error}</p>
        <p>
          <a href="./conference/User/Visitor/signup">Go back to signup</a>
        </p>
      </div>
    )
  }

  getStatusRender() {
    switch (this.state.status) {
      case 'form':
        return this.form()

      case 'duplicate':
        return this.duplicate()

      case 'success':
        return this.success()

      case 'error':
        return this.error()
    }
  }

  render() {
    return (
      <div>
        <div className="row justify-content-md-center">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">{this.getStatusRender()}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Signup.propTypes = {}

Signup.defaultProps = {}

ReactDOM.render(<Signup />, document.getElementById('Signup'))
