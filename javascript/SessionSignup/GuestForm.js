'use strict'
import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class GuestForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: {first: false, last: false, email: false, badEmail: false}
    }
    this.check = this.check.bind(this)
  }

  check(errorName, e) {
    const {error} = this.state
    const {value} = e.currentTarget
    let errorFound = value == ''
    error[errorName] = errorFound
    if (errorName === 'email' && !error.email) {
      error.badEmail =
        value.match(/^[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/) === null
      if (error.badEmail) {
        errorFound = true
      }
    }
    this.setState({error})
  }

  render() {
    const {guest, count, update} = this.props
    return (
      <div className="card mb-2">
        <div className="card-body">
          <div className="lead">
            <strong>Guest #{count + 1}</strong>
          </div>
          <div className="row">
            <div className="form-group col-md-4">
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                onBlur={e => this.check('first', e)}
                onChange={e => update(count, 'firstName', e)}
                value={guest.firstName}
              />
              {this.state.error.first ? (
                <span className="badge badge-danger">Please fill this in</span>
              ) : null}
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="lastName">Last name</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                onBlur={e => this.check('last', e)}
                onChange={e => update(count, 'lastName', e)}
                value={guest.lastName}
              />
              {this.state.error.last ? (
                <span className="badge badge-danger">Please fill this in</span>
              ) : null}
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                onBlur={e => this.check('email', e)}
                onChange={e => update(count, 'email', e)}
                value={guest.email}
              />
              {this.state.error.email ? (
                <span className="badge badge-danger">Please fill this in</span>
              ) : null}
              {this.state.error.badEmail ? (
                <span className="badge badge-danger">
                  Check your email address
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

GuestForm.propTypes = {
  guest: PropTypes.object,
  count: PropTypes.number,
  update: PropTypes.func
}
