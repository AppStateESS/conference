'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import StateDropdown from '@essappstate/react-state-dropdown'

const Visitor = ({visitor, update, errors, check, save}) => {
  const errorMessage = (value) => {
    if (errors[value]) {
      if (value === 'phone') {
        return (
          <div className="badge badge-danger">
            Please check your phone number.
          </div>
        )
      } else {
        return (
          <div className="badge badge-danger">Please complete the above.</div>
        )
      }
    }
  }

  const updateAltPhone = (e) => {
    let value = e.target.value
    value = value.replace(/[^\.\-\d]/, '')
    update('altPhone', value)
  }

  const updatePhone = (e) => {
    let value = e.target.value
    value = value.replace(/[^\.\-\d]/, '')
    update('phone', value)
  }

  return (
    <div>
      <p>Please enter your contact information below.</p>
      <div className="row">
        <div className="col-sm-6">
          <label>
            First name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            onChange={update.bind(null, 'firstName')}
            onBlur={() => {
              check('firstName')
            }}
            value={visitor.firstName}
          />
          <div>{errorMessage('firstName')}</div>
        </div>
        <div className="col-sm-6">
          <label>
            Last name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            onChange={update.bind(null, 'lastName')}
            onBlur={() => check('lastName')}
            value={visitor.lastName}
          />
          <div>{errorMessage('lastName')}</div>
        </div>
      </div>
      <div className="mt-3">
        <label>
          Address <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          name="address1"
          className="form-control"
          onChange={update.bind(null, 'address1')}
          onBlur={() => check('address1')}
          value={visitor.address1}
        />
        <div>{errorMessage('address1')}</div>
        <input
          type="text"
          name="address2"
          className="form-control mt-3"
          onChange={update.bind(null, 'address2')}
          value={visitor.address2}
        />
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-6 mt-3">
          <label>
            City <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            name="city"
            className="form-control"
            onChange={update.bind(null, 'city')}
            onBlur={() => check('city')}
            value={visitor.city}
          />
          <div>{errorMessage('city')}</div>
        </div>
        <div className="col-md-4 col-sm-6 mt-3">
          <label>State</label>
          <StateDropdown
            value={visitor.state}
            handle={update.bind(null, 'state')}
          />
        </div>
        <div className="col-md-4 mt-3">
          <label>
            Zip code <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            name="zip"
            className="form-control"
            onChange={update.bind(null, 'zip')}
            onBlur={() => check('zip')}
            value={visitor.zip}
          />
          <div>{errorMessage('zip')}</div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm-6">
          <label>
            Phone number <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            name="phone"
            className="form-control"
            onChange={updatePhone}
            onBlur={() => check('phone')}
            value={visitor.phone}
          />
          <div>{errorMessage('phone')}</div>
        </div>
        <div className="col-sm-6">
          <label>Alternate phone number</label>
          <input
            type="text"
            name="altPhone"
            placeholder="Office phone, mobile, etc."
            className="form-control"
            onChange={updateAltPhone}
            onBlur={() => check('altPhone')}
            value={visitor.altPhone}
          />
          <div>{errorMessage('altPhone')}</div>
        </div>
      </div>
      <div className="mt-3 text-center">
        <button
          className="btn btn-primary"
          onClick={() => {
            check('firstName')
            check('lastName')
            check('address1')
            check('city')
            check('zip')
            check('phone')
            save()
          }}>
          Save my contact information
        </button>
      </div>
    </div>
  )
}

Visitor.propTypes = {
  visitor: PropTypes.object,
  save: PropTypes.func,
  update: PropTypes.func,
  errors: PropTypes.object,
  check: PropTypes.func,
}

export default Visitor
