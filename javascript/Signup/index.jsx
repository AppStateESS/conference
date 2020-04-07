'use strict'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Form from './Form'
import PropTypes from 'prop-types'

/* global $, bannerApi */

export default class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: '',
      status: 'form',
    }
    this.setStatus = this.setStatus.bind(this)
  }

  toggleShow() {
    this.setState({
      toggleShow: !this.state.toggleShow,
    })
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

  setStatus(status) {
    this.setState({status})
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
        return <Form setStatus={this.setStatus} />

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

Signup.propTypes = {bannerApi: PropTypes.number}

ReactDOM.render(
  <Signup bannerApi={bannerApi} />,
  document.getElementById('Signup')
)
