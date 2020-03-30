'use strict'
import React from 'react'
import PropTypes from 'prop-types'

const CC = ({payment, update, save}) => {
  const disabled = payment.cardType === 0 || payment.payerName.length === 0
  return (
    <div>
      <div className="text-center mb-2">
        <div className="badge badge-danger">
          Do not complete payment until you have successful confirmation from
          the credit card payment service.
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-sm-4">
          <label className="lead">Card type</label>
        </div>
        <div className="col-sm-8">
          <select
            className="form-control"
            value={payment.cardType}
            onChange={update.bind(null, 'cardType')}>
            <option disabled value="0">
              Choose credit card below
            </option>
            <option value="Mastercard">MasterCard</option>
            <option value="Visa">Visa</option>
            <option value="Discover">Discover</option>
            <option value="American Express">American Express</option>
          </select>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-sm-4">
          <label className="lead">Receipt</label>
        </div>
        <div className="col-sm-8">
          <input
            placeholder="Credit card company's transaction id or other information."
            type="text"
            className="form-control"
            name="receipt"
            value={payment.receipt}
            onChange={update.bind(null, 'receipt')}
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

CC.propTypes = {
  payment: PropTypes.object,
  update: PropTypes.func,
  save: PropTypes.func
}

export default CC
