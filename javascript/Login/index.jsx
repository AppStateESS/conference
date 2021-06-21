'use strict'
/* global $, emailFill */
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: emailFill,
      password: '',
      capWarning: '',
      emailError: false,
      loginError: false,
      errorReason: '',
    }
    this.post = this.post.bind(this)
    this.postOnEnter = this.postOnEnter.bind(this)
    this.reset = this.reset.bind(this)
    this.checkCaps = this.checkCaps.bind(this)
    this.updateEmail = this.updateEmail.bind(this)
    this.getEmailMessage = this.getEmailMessage.bind(this)
  }

  post() {
    const {email, password} = this.state
    $.ajax({
      url: './conference/User/Visitor/login',
      data: {
        email,
        password,
      },
      dataType: 'json',
      type: 'post',
      success: (data) => {
        if (data.success) {
          location.href = data.returnUrl
        } else {
          this.setState({loginError: true, errorReason: data.reason})
        }
      },
      error: () => {},
    })
  }

  postOnEnter(e) {
    if (e.key === 'Enter') {
      this.post()
    }
  }

  checkCaps(e) {
    if (e.getModifierState('CapsLock')) {
      this.setState({
        capWarning: e.keyCode !== 20,
      })
    } else {
      this.setState({capWarning: false})
    }
  }

  getEmailMessage() {
    if (this.state.email.length === 0) {
      return 'Enter your email address above'
    } else if (this.state.emailError) {
      return 'This email does not appear correct.'
    }
  }

  checkEmail() {
    const expression = /\S+@\S+/
    this.setState({
      emailError: !expression.test(String(this.state.email).toLowerCase()),
    })
  }

  updateEmail(e) {
    this.setState({email: e.target.value}, this.checkEmail)
  }

  reset() {
    this.setState({loginError: false, errorReason: ''})
  }

  errorMessage() {
    let content
    switch (this.state.errorReason) {
      case 'noemail':
        content = (
          <span>
            This email address is not recognized. Do you need to{' '}
            <a href="./conference/User/Visitor/signup">
              signup for an account?
            </a>
          </span>
        )
        break

      case 'nopassword':
        content = (
          <div className="text-center">
            <p>Password and email do not match.</p>
            <div>
              <a
                href="./conference/User/Visitor/forgotPassword"
                className="btn btn-outline-danger">
                Do you need to reset your password?
              </a>
            </div>
          </div>
        )
        break

      case 'missing':
        content = <span>Password and/or email must not be blank.</span>
        break

      case 'notactivated':
        content = (
          <span>
            It appears you have not activated your account. Check your email and
            click the activation link.
          </span>
        )
        break
    }
    return content
  }

  render() {
    let content
    if (this.state.loginError) {
      content = (
        <div className="login-error-message">
          <div className="alert alert-danger">
            <h5 className="alert-link text-center">
              Account not found or not activated.
            </h5>
            {this.errorMessage()}
          </div>
          <div>
            <button className="btn btn-primary btn-block" onClick={this.reset}>
              Try again
            </button>
          </div>
        </div>
      )
    } else {
      const disabled = !(
        this.state.email.length > 0 && this.state.password.length > 0
      )
      let capWarning
      if (this.state.capWarning) {
        capWarning = (
          <div className="badge badge-warning">
            Warning: you have caps lock enabled.
          </div>
        )
      }
      content = (
        <div>
          <div className="bg-light p-3">
            <p>
              If this is your first time here, you will need to{' '}
              <a href="conference/User/Visitor/signup">create an account</a> to
              access register for parent orientation.
            </p>
            <p className="text-center">
              <a
                href="conference/User/Visitor/signup"
                className="btn btn-primary btn-lg">
                Click here to create an account.
              </a>
            </p>
          </div>
          <hr />
          <p>
            If you are returning to our site after creating an account, please
            login below.
          </p>
          <label>Email address</label>
          <input
            type="text"
            name="email"
            className="form-control"
            value={this.state.email}
            onChange={this.updateEmail}
          />
          <div className="small">{this.getEmailMessage()}</div>
          <label className="mt-3">Password:</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={this.state.password}
            onKeyPress={this.postOnEnter}
            onChange={(e) => this.setState({password: e.target.value})}
            onKeyUp={this.checkCaps}
          />
          <span>{capWarning}</span>
          <a href="./conference/User/Visitor/forgotPassword">
            I forgot my password.
          </a>
          <div className="text-center">
            <button
              className="btn btn-success mt-3"
              onClick={this.post}
              disabled={disabled}>
              Log in
            </button>
          </div>
        </div>
      )
    }

    return (
      <div className="conference row justify-content-md-center">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Welcome!</h3>
              <div className="card-text login">{content}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Login.propTypes = {}

Login.defaultProps = {}

ReactDOM.render(<Login />, document.getElementById('Login'))
