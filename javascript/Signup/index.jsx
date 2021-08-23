'use strict'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Form from './Form'
import StudentLogin from './StudentLogin'
import Duplicate from './Duplicate'
import PropTypes from 'prop-types'

/* global bannerApi */

export default class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: '',
      status: 'form',
      parentEmail: '',
    }
    this.setStatus = this.setStatus.bind(this)
    this.setError = this.setError.bind(this)
    this.setParentEmail = this.setParentEmail.bind(this)
  }

  toggleShow() {
    this.setState({
      toggleShow: !this.state.toggleShow,
    })
  }

  setError(error) {
    this.setState({error})
  }

  setParentEmail(parentEmail) {
    this.setState({parentEmail})
    this.setStatus('form')
  }

  setStatus(status) {
    this.setState({status})
  }

  success(parentEmail) {
    return (
      <div>
        <h4>Almost done!</h4>
        <p>Your account has been created, we just need verification.</p>
        <div className="alert alert-danger text-center">
          <strong>
            Please check your email and
            <br /> click the authorization link we sent you.
          </strong>
        </div>
        <p>
          Once you have verified your account,{' '}
          <a href={`./conference/User/Visitor/login?email=${parentEmail}`}>
            you can log in.
          </a>
        </p>
      </div>
    )
  }

  error() {
    return (
      <div>
        <p className="alert alert-danger">Error: {this.state.error}</p>
        <p>
          <a href="./conference/User/Visitor/signup">Go back to signup</a>
        </p>
      </div>
    )
  }

  getStatusRender() {
    console.log(
      'this.state.status:',
      this.state.status,
      `[${typeof this.state.status}]`
    )
    switch (this.state.status) {
      case 'form':
        return (
          <Form
            setStatus={this.setStatus}
            parentEmail={this.state.parentEmail}
            setParentEmail={this.setParentEmail}
            setError={this.setError}
          />
        )

      case 'success':
        return this.success(this.state.parentEmail)

      case 'student':
        return (
          <StudentLogin
            topStatus={this.setStatus}
            goBack={() => this.setStatus('form')}
            setParentEmail={this.setParentEmail}
          />
        )

      case 'duplicate':
        return <Duplicate setStatus={this.setStatus} />

      case 'error':
        return this.error()
    }
  }

  render() {
    const {status} = this.state
    let navButton
    if (this.props.bannerApi > 0 && status == 'form') {
      navButton = (
        <button
          className="btn btn-primary btn-block"
          onClick={() => {
            this.setState({status: 'student'})
          }}>
          Enter my student&apos;s information to create my account
        </button>
      )
    }

    return (
      <div>
        <div className="row justify-content-md-center">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <h3>Signup for a new account</h3>
                  <div>{navButton}</div>
                </div>
                {this.getStatusRender()}
              </div>
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
