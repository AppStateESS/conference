'use strict'
import React from 'react'
import PropTypes from 'prop-types'

const Check = ({payment, update, save}) => {
  const disabled = payment.checkNumber.length === 0
  return (
    <div>
      <div className="row mb-3">
        <div className="col-sm-4">
          <label className="lead" htmlFor="checkNumber">
            Check number
          </label>
        </div>
        <div className="col-sm-8">
          <input
            type="text"
            className="form-control"
            id="checkNumber"
            name="checkNumber"
            onChange={update.bind(null, 'checkNumber')}
            value={payment.checkNumber}
          />
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-primary" onClick={save} disabled={disabled}>
          Complete registration payment
        </button>
      </div>
    </div>
  )
}

Check.propTypes = {
  payment: PropTypes.object,
  update: PropTypes.func,
  save: PropTypes.func
}

export default Check
