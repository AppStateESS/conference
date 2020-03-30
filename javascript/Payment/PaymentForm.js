'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import ButtonGroup from '@essappstate/canopy-react-buttongroup'
import Check from './Check'
import CC from './CC'

const PaymentForm = ({payment, update, save}) => {
  if (payment.id === undefined) {
    return <div />
  }
  const buttons = [
    {value: 'cash', label: 'Cash'},
    {value: 'cc', label: 'Credit/Debit Card'},
    {value: 'check', label: 'Check'}
  ]

  let paymentDetails

  switch (payment.paymentType) {
    case 'cc':
      paymentDetails = <CC payment={payment} update={update} save={save} />
      break
    case 'check':
      paymentDetails = <Check payment={payment} update={update} save={save} />
      break
  }

  return (
    <div className="container">
      <div className="row mb-3">
        <div className="col-sm-4">
          <span className="lead">Amount due</span>
        </div>
        <div className="col-sm-8 lead">${payment.amount.toFixed(2)}</div>
      </div>
      <div className="row mb-3">
        <div className="col-sm-4">
          <label className="lead">Payer name</label>
        </div>
        <div className="col-sm-8">
          <input
            type="text"
            className="form-control"
            name="payerName"
            onChange={update.bind(null, 'payerName')}
            value={payment.payerName}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-sm-4">
          <label className="lead">Payment type</label>
        </div>
        <div className="col-sm-8">
          <ButtonGroup
            name="paymentType"
            buttons={buttons}
            match={payment.paymentType}
            handle={update.bind(null, 'paymentType')}
            activeColor="primary"
            color="outline-primary"
          />
        </div>
      </div>
      {paymentDetails}
    </div>
  )
}

PaymentForm.propTypes = {
  payment: PropTypes.object,
  update: PropTypes.func,
  registration: PropTypes.object,
  save: PropTypes.func
}

PaymentForm.defaultProps = {}
export default PaymentForm
