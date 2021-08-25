'use strict'
import React, {Component} from 'react'
import RelationshipSelect from '../Shared/RelationshipSelect'
import BigCheckbox from '@essappstate/canopy-react-bigcheckbox'
import yearOptions from '../Shared/YearOptions'
import PropTypes from 'prop-types'

export default class GuestForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: {first: false, last: false, email: false, badEmail: false},
      showInfo: true,
    }
    this.check = this.check.bind(this)
    this.updateRelationship = this.updateRelationship.bind(this)
  }

  componentDidMount() {
    this.updateRelationship(this.props.guest.relationship, this.props.count)
  }

  updateRelationship(value, count) {
    switch (value) {
      case 'Mother':
      case 'Father':
      case 'Parent':
      case 'Stepparent':
      case 'Guardian':
        this.setState({showInfo: true})
        break
      default:
        this.setState({showInfo: false})
    }

    this.props.update(count, 'relationship', {target: {value}})
  }

  check(errorName, e) {
    const {error} = this.state
    const {value} = e.currentTarget
    let errorFound = value == ''
    error[errorName] = errorFound
    if (errorName === 'email' && !error.email) {
      error.badEmail =
        value.match(/^[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,32}$/i) === null
      if (error.badEmail) {
        errorFound = true
      }
    }
    this.setState({error})
  }

  render() {
    const {guest, count, update} = this.props
    let parentInfo
    if (this.state.showInfo) {
      parentInfo = (
        <div>
          <hr />
          <div className="alert alert-primary text-center">
            Since this guest is the student&apos;s parent or guardian, please
            fill in their optional information below.
          </div>
          <div className="row">
            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <BigCheckbox
                    label="Is this guest an alum of this university?"
                    checked={guest.alum === 1}
                    handle={(e) => {
                      update(count, 'alum', e ? 1 : 0)
                      if (!e) {
                        update(count, 'gradYear', 0)
                      }
                    }}
                  />
                  <div style={{position: 'relative'}}>
                    {guest.alum === 0 && (
                      <div
                        style={{
                          backgroundColor: 'rgba(255,255,255,.7)',
                          position: 'absolute',
                          width: '100%',
                          height: '100%',
                        }}>
                        &nbsp;
                      </div>
                    )}
                    <div className="form-group mt-3">
                      <label htmlFor="gradYear">
                        If so, what year did they graduate?
                      </label>
                      <select
                        name="gradYear"
                        value={guest.gradYear}
                        onChange={(e) => {
                          update(count, 'gradYear', e.target.value)
                        }}
                        className="form-control">
                        {yearOptions()}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="employer">
                      Name of organization or company where employed
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="employer"
                      value={guest.employer}
                      onChange={(e) =>
                        update(count, 'employer', e.target.value)
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="position">
                      Guest&apos;s position title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="position"
                      value={guest.position}
                      onChange={(e) =>
                        update(count, 'position', e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="hometown">Guest&apos;s hometown</label>
                    <input
                      type="text"
                      placeholder="City, State"
                      className="form-control"
                      name="hometown"
                      value={guest.hometown}
                      onChange={(e) =>
                        update(count, 'hometown', e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="card mb-2">
        <div className="card-body">
          <div className="lead">
            <strong>Guest #{count + 1}</strong>
          </div>
          <div className="row">
            <div className="form-group col-md-4">
              <label htmlFor="firstName">
                First name<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                onBlur={(e) => this.check('first', e)}
                onChange={(e) => update(count, 'firstName', e)}
                value={guest.firstName}
              />
              {this.state.error.first ? (
                <span className="badge badge-danger">Please fill this in</span>
              ) : null}
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="lastName">
                Last name<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                onBlur={(e) => this.check('last', e)}
                onChange={(e) => update(count, 'lastName', e)}
                value={guest.lastName}
              />
              {this.state.error.last ? (
                <span className="badge badge-danger">Please fill this in</span>
              ) : null}
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="email">
                Email<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="email"
                onBlur={(e) => this.check('email', e)}
                onChange={(e) => {
                  if (!e.target.value.match(/ /)) {
                    update(count, 'email', e)
                  }
                }}
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
            <div className="form-group col-md-4">
              <strong>Relationship to student</strong>
              <RelationshipSelect
                relation={guest.relationship}
                update={(value) => {
                  this.updateRelationship(value, count)
                }}
              />
            </div>
            {parentInfo}
          </div>
        </div>
      </div>
    )
  }
}

GuestForm.propTypes = {
  guest: PropTypes.object,
  count: PropTypes.number,
  update: PropTypes.func,
}
