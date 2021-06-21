'use strict'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {getPasswordMessage} from '../Shared/Password'
import PropTypes from 'prop-types'
/* global $, visitorId, hash */

export default class Reset extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: '',
      showPassword: false,
      password: '',
      checkPassword: '',
      toggleShow: false,
      allowSave: false,
      complete: false,
    }
    this.toggleShow = this.toggleShow.bind(this)
    this.comparePassword = this.comparePassword.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
    this.updateCheckPassword = this.updateCheckPassword.bind(this)
    this.saveNewPassword = this.saveNewPassword.bind(this)
  }

  saveNewPassword() {
    if (this.state.allowSave) {
      $.ajax({
        url: 'conference/User/Visitor/' + visitorId + '/password',
        data: {password: this.state.password, hash: this.props.hash},
        dataType: 'json',
        type: 'patch',
        success: () => {
          this.setState({complete: true})
        },
        error: () => {},
      })
    }
  }

  toggleShow() {
    this.setState({
      toggleShow: !this.state.toggleShow,
    })
  }

  comparePassword() {
    if (this.state.password === this.state.checkPassword) {
      this.setState({allowSave: true})
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

  render() {
    let content
    let title
    if (this.state.complete) {
      title = 'Password change complete'
      content = (
        <p className="card-text">
          <a href="conference/User/Visitor/login">You may now log in.</a>
        </p>
      )
    } else {
      title = 'Change password'
      content = (
        <div className="card-text">
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
          <label className="mt-3">Check password:</label>
          <input
            type={this.state.toggleShow ? 'text' : 'password'}
            name="checkPassword"
            className="form-control"
            value={this.state.checkPassword}
            onChange={this.updateCheckPassword}
          />
          <div className="text-center">
            <button
              disabled={!this.state.allowSave}
              className="btn btn-success mt-3"
              onClick={this.saveNewPassword}>
              Change password
            </button>
          </div>
        </div>
      )
    }
    return (
      <div className="conference row justify-content-md-center">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-header">
              <h3 className="my-0">{title}</h3>
            </div>
            <div className="card-body">{content}</div>
          </div>
        </div>
      </div>
    )
  }
}

Reset.propTypes = {hash: PropTypes.string}

ReactDOM.render(
  <Reset visitorId={visitorId} hash={hash} />,
  document.getElementById('Reset')
)
