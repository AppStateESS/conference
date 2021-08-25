'use strict'
import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import StateDropdown from '@essappstate/react-state-dropdown'
import RelationshipSelect from '../Shared/RelationshipSelect'
import yearOptions from '../Shared/YearOptions'

/* global $ */

const noChange = <div className="badge badge-info">No password change</div>
const acceptedPassword = (
  <div className="badge badge-success"> Password accepted</div>
)

const VisitorForm = ({update, resource, save}) => {
  const [password, setPassword] = useState('')
  const [passwordMessage, setPasswordMessage] = useState(noChange)
  const [usernameError, setUsernameError] = useState(false)
  const [allowSave, setAllowSave] = useState(true)

  useEffect(() => {
    setPassword('')
  }, [resource.id])

  useEffect(() => {
    update('password', password)
    if (password.length > 0) {
      if (password.length < 8 || password.search(/[^a-z]/) === -1) {
        setAllowSave(false)
        setPasswordMessage(
          <div className="badge badge-danger">
            Password must be at least 8 characters and with a non-alpha
            character
          </div>
        )
      } else {
        setAllowSave(true)
        setPasswordMessage(acceptedPassword)
      }
    } else {
      setAllowSave(true)
      setPasswordMessage(noChange)
    }
  }, [password])

  const preSave = () => {
    $.ajax({
      url: 'conference/Admin/Visitor/checkEmail',
      data: {email: resource.email, id: resource.id},
      dataType: 'json',
      type: 'get',
      success: (data) => {
        if (data.allow == true) {
          setUsernameError(false)
          save()
        } else {
          setUsernameError(true)
        }
      },
      error: () => {},
    })
  }

  const usedEmailMessage = usernameError ? (
    <div className="badge badge-danger">
      Another visitor is using this address
    </div>
  ) : null

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="email">Email (login)</label>
            <input
              id="email"
              type="text"
              className="form-control"
              name="email"
              value={resource.email}
              onChange={update.bind(null, 'email')}
            />
            {usedEmailMessage}
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
            {passwordMessage}
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="firstName">First name</label>
            <input
              id="firstName"
              type="text"
              className="form-control"
              name="firstName"
              value={resource.firstName}
              onChange={update.bind(null, 'firstName')}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="lastName">Last name</label>
            <input
              id="lastName"
              type="text"
              className="form-control"
              name="lastName"
              value={resource.lastName}
              onChange={update.bind(null, 'lastName')}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="address1">Address</label>
            <input
              id="address1"
              type="text"
              className="form-control"
              name="address1"
              value={resource.address1}
              onChange={update.bind(null, 'address1')}
            />
          </div>
          <div className="form-group">
            <input
              id="address2"
              type="text"
              className="form-control"
              name="address2"
              value={resource.address2}
              onChange={update.bind(null, 'address2')}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  id="city"
                  type="text"
                  className="form-control"
                  name="city"
                  value={resource.city}
                  onChange={update.bind(null, 'city')}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>State</label>
                <StateDropdown
                  value={resource.state}
                  handle={update.bind(null, 'state')}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Zip</label>
                <input
                  id="zip"
                  type="text"
                  className="form-control"
                  name="zip"
                  value={resource.zip}
                  onChange={update.bind(null, 'zip')}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Phone</label>
                <input
                  id="phone"
                  type="text"
                  className="form-control"
                  name="phone"
                  value={resource.phone}
                  onChange={update.bind(null, 'phone')}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Alternate phone</label>
                <input
                  id="altPhone"
                  type="text"
                  className="form-control"
                  name="altPhone"
                  value={resource.altPhone}
                  onChange={update.bind(null, 'altPhone')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-6">
          <label>Relationship</label>
          <RelationshipSelect
            relation={resource.relation}
            update={(e) => update('relation', e)}
          />
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="employer">Employer</label>
            <input
              type="text"
              className="form-control"
              name="employer"
              value={resource.employer}
              onChange={update.bind(null, 'employer')}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="position">Position title</label>
            <input
              type="text"
              className="form-control"
              name="position"
              value={resource.position}
              onChange={update.bind(null, 'position')}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                value="1"
                name="alum"
                onChange={() => update('alum', resource.alum === 1 ? 0 : 1)}
                checked={resource.alum === 1}
              />{' '}
              Is alum
            </label>
            <select
              name="gradYear"
              className="form-control"
              value={resource.gradYear}
              onChange={(e) => update('gradYear', e)}>
              {yearOptions()}
            </select>
          </div>
        </div>
      </div>
      <button
        className="btn btn-success"
        onClick={preSave}
        disabled={!allowSave}>
        Save visitor
      </button>
    </div>
  )
}

VisitorForm.propTypes = {
  update: PropTypes.func,
  resource: PropTypes.object,
  save: PropTypes.func,
}

export default VisitorForm
