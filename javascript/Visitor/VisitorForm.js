'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import StateDropdown from '@essappstate/react-state-dropdown'

const VisitorForm = ({update, resource, save}) => {
  return (
    <div className="container">
      <div className="row">
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
          <div className="row">
            <div className="col-sm-6">
              <label>State</label>
              <StateDropdown
                value={resource.state}
                handle={update.bind(null, 'state')}
              />
            </div>
            <div className="col-sm-6">
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
        </div>
      </div>
      <button className="btn btn-success" onClick={save}>
        Save visitor
      </button>
    </div>
  )
}

VisitorForm.propTypes = {
  update: PropTypes.func,
  resource: PropTypes.object,
  save: PropTypes.func
}

export default VisitorForm
