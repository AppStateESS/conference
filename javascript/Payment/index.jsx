'use strict'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Overlay from '@essappstate/canopy-react-overlay'
import PaymentForm from './PaymentForm'
import RefundInformation from './RefundInformation'
import totalCost from '../Shared/totalCost'
import Refunds from './Refunds'

/* global $, registrationId */

const fixIt = (varName, value) => {
  return varName in value ? value[varName].toFixed(2) : null
}

export default class Payment extends Component {
  constructor(props) {
    super(props)
    this.registration = {}
    this.visitor = {}

    this.state = {
      conference: {},
      completed: [],
      registration: {},
      visitor: {},
      session: {},
      student: {},
      errorMessage: '',
      overlay: false,
      guests: [],
      overlayType: 'payment',
      currentPayment: {
        amount: 0,
        payerName: '',
        paymentType: 'unpaid',
        cardType: 0,
      },
      currentCost: 0,
      refunds: [],
    }
    this.overlayOn = this.overlayOn.bind(this)
    this.overlayOff = this.overlayOff.bind(this)
    this.update = this.update.bind(this)
    this.resetRegistration = this.resetRegistration.bind(this)
    this.save = this.save.bind(this)
    this.syncAccount = this.syncAccount.bind(this)
    this.init = this.init.bind(this)
  }

  componentDidMount() {
    this.init()
  }

  cancelSupplement() {
    if (
      confirm(
        'Are you sure you want to delete this supplement? You can always create another one after.'
      )
    ) {
      $.ajax({
        url: `conference/Admin/Supplement/${this.state.currentPayment.supplementId}`,
        dataType: 'json',
        type: 'delete',
        success: () => {
          this.init()
        },
        error: () => {},
      })
    }
  }

  init() {
    this.overlayOff()
    this.loadRegistration()
    this.load()
  }

  syncAccount() {
    $.ajax({
      url: `conference/Admin/Payment/${this.state.currentPayment.id}/syncAccount`,
      data: {accountId: this.state.conference.accountId},
      dataType: 'json',
      type: 'patch',
      success: () => {
        this.update('accountId', this.state.conference.accountId)
      },
      error: () => {},
    })
  }

  update(varname, value, callback = null) {
    if (typeof value === 'object') {
      value = value.target.value
    }
    const {currentPayment} = this.state
    currentPayment[varname] = value
    this.setState({currentPayment}, callback)
  }

  checkTotalCost() {
    this.setState({
      currentCost: totalCost(this.state.registration, this.state.session),
    })
  }

  loadRegistration() {
    $.ajax({
      url:
        'conference/Admin/Registration/' +
        this.props.registrationId +
        '/details',
      dataType: 'json',
      type: 'get',
      success: (data) => {
        this.setState({
          conference: data.conference,
          registration: data.registration,
          session: data.session,
          visitor: data.visitor,
          student: data.student,
          guests: data.guests,
        })
        this.checkTotalCost()
      },
      error: (data) => {
        this.setState({
          errorMessage: 'Error: ' + data.responseJSON.exception.message,
          registration: {id: 0},
        })
      },
    })
  }

  load() {
    const {registrationId} = this.props
    $.ajax({
      url: 'conference/Admin/Payment/status',
      data: {registrationId},
      dataType: 'json',
      type: 'get',
      success: (data) => {
        const currentPayment =
          data.currentPayment !== null
            ? data.currentPayment
            : {payerName: '', paymentType: 'unpaid', cardType: 0, amount: 0}
        currentPayment.cardType = 0
        this.setState({
          currentPayment: currentPayment,
          completed: data.completed,
        })
      },
      error: (data) => {
        this.setState({
          errorMessage: 'Error: ' + data.exception.message,
          registration: {id: 0},
        })
      },
    })
  }

  resetRegistration() {
    $.ajax({
      url: `conference/Admin/Registration/reset`,
      data: {id: this.state.registration.id},
      dataType: 'json',
      type: 'get',
      success: (data) => {
        this.setState({registration: data})
      },
      error: () => {},
    })
  }

  overlayOn() {
    this.setState({
      overlay: true,
    })
  }

  overlayOff() {
    this.setState({
      overlay: false,
      currentKey: 0,
    })
  }

  save() {
    $.ajax({
      url: `conference/Admin/Payment/${this.state.currentPayment.id}/paid`,
      data: {...this.state.currentPayment},
      dataType: 'json',
      type: 'put',
      success: () => {
        this.init()
        this.overlayOff()
      },
      error: () => {},
    })
  }

  closeFreePayment() {
    this.update('paymentType', 'free')
    this.update('amount', 0, this.save)
  }

  paymentListing() {
    const {completed} = this.state
    if (completed.length === 0) {
      return (
        <span>
          <em>No previously completed payments</em>
        </span>
      )
    }

    const payments = completed.map((value) => {
      let payType
      switch (value.paymentType) {
        case 'cc-onsite':
          payType = `Onsite CC: ${value.cardType} / ${value.receipt}`
          break

        case 'cc-offsite':
          payType = `Offsite CC: ${value.cardType} / ${value.receipt}`
          break

        case 'check':
          payType = `Check #${value.checkNumber}`
          break

        case 'cash':
          payType = 'Cash'
          break

        case 'free':
          payType = 'Free'
          break
      }

      const type =
        parseInt(value.supplementId) > 0 ? (
          'Supplemental charge'
        ) : (
          <a
            href={`conference/Admin/Registration/${this.state.registration.id}`}>
            Initial Registration
          </a>
        )

      const timestamp = new Date(value.timestamp * 1000)

      return (
        <tr key={value.id}>
          <td>${value.amount.toFixed(2)}</td>
          <td>{timestamp.toLocaleString()}</td>
          <td>{type}</td>
          <td>{value.payerName}</td>
          <td>{payType}</td>
        </tr>
      )
    })

    const content = (
      <table className="table table-sm">
        <tbody>
          <tr>
            <th>Amount</th>
            <th>Date</th>
            <th>Type</th>
            <th>Payer</th>
            <th>Payment Type</th>
          </tr>
          {payments}
        </tbody>
      </table>
    )
    return content
  }

  render() {
    const {
      visitor,
      conference,
      session,
      registration,
      guests,
      student,
      currentPayment,
    } = this.state
    let costWarning
    if (registration.id === undefined) {
      return <div>Loading...</div>
    }
    if (this.state.errorMessage.length > 0) {
      return <div className="alert alert-danger">{this.state.errorMessage}</div>
    }
    if (
      registration.id > 0 &&
      registration.cancelled == 0 &&
      this.state.currentCost !== registration.totalCost
    ) {
      costWarning = (
        <div className="alert alert-danger mb-3">
          <strong>Warning!</strong> The current session pricing for this
          registration should be ${this.state.currentCost.toFixed(2)}.{' '}
          {registration.completed === 0 ? (
            <span>
              You may&nbsp;
              <button
                className="btn btn-primary btn-sm"
                onClick={this.resetRegistration}>
                Reset the Cost
              </button>
            </span>
          ) : (
            <span>Registration is complete so it can not be adjusted.</span>
          )}
        </div>
      )
    }
    let accountWarning

    if (
      currentPayment.id > 0 &&
      currentPayment.accountId !== this.state.conference.accountId
    ) {
      accountWarning = (
        <div className="alert alert-danger mb-3">
          <strong>Warning!</strong> The account associated to the current
          payment is different than assigned to the conference. Do you want to:
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={this.syncAccount}>
            <span className="text-dark">
              Update the payment to the current account
            </span>
          </button>
        </div>
      )
    }

    const guestComplete = registration.guestCount == guests.length
    const payments = this.paymentListing()

    let cancelSupplement
    let payButton
    if (currentPayment.id !== undefined) {
      let buttonLabel
      if (!guestComplete) {
        payButton = (
          <div className="alert alert-warning">
            This registration may not be paid until guest information is
            completed.
          </div>
        )
      } else {
        if (session.registerCost == 0 && registration.totalCost == 0) {
          payButton = (
            <button
              className="btn btn-danger btn-block"
              onClick={() => {
                this.closeFreePayment()
              }}>
              Close out free payment
            </button>
          )
        } else {
          if (currentPayment.supplementId > 0) {
            buttonLabel = `Complete current supplemental payment: $${currentPayment.amount.toFixed(
              2
            )}`
            cancelSupplement = (
              <div className="mb-3 text-center">
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    this.cancelSupplement()
                  }}>
                  Cancel the current supplement
                </button>
              </div>
            )
          } else {
            buttonLabel = `Complete current registration payment: $${currentPayment.amount.toFixed(
              2
            )}`
          }
          payButton = (
            <button
              className="btn btn-success btn-block"
              onClick={() => {
                this.setState({overlay: true, overlayType: 'payment'})
              }}>
              {buttonLabel}
            </button>
          )
        }
      }
    }

    let additionButton
    if (
      (registration.cancelled === 0 &&
        currentPayment.supplementId === undefined) ||
      currentPayment.supplementId === 0
    ) {
      additionButton = (
        <a
          className="btn btn-primary"
          href={`./conference/Admin/Supplement/add/?registrationId=${registration.id}`}>
          <i className="fas fa-plus"></i>&nbsp; Add meals and/or guests
        </a>
      )
    }

    let refundInfo
    if (registration.refunded > 0) {
      refundInfo = (
        <button
          className="btn btn-info btn-sm ml-5"
          onClick={() => {
            this.setState({
              overlay: true,
              overlayType: 'refundInfo',
            })
          }}>
          Refund information
        </button>
      )
    }

    let refundButton
    if (
      registration.completed > 0 &&
      registration.refundAmount !== registration.totalCost &&
      registration.totalCost > 0
    ) {
      refundButton = (
        <a
          href={`conference/Admin/Refund/?registrationId=${registration.id}`}
          className="btn btn-danger ml-5 btn-sm">
          Refund
        </a>
      )
    }

    let savePayment
    if (currentPayment.paymentType === 'cash') {
      savePayment = (
        <div className="text-center">
          <button className="btn btn-primary" onClick={this.save}>
            Complete registration payment
          </button>
        </div>
      )
    }

    let overlay
    switch (this.state.overlayType) {
      case 'payment':
        overlay = (
          <Overlay
            show={this.state.overlay}
            close={this.overlayOff}
            width="80%"
            title={`Payment for registration: ${this.state.session.title}`}>
            <PaymentForm
              session={this.state.session}
              registration={registration}
              payment={currentPayment}
              save={this.save}
              update={this.update}
            />
            {savePayment}
          </Overlay>
        )
        break

      case 'refundInfo':
        overlay = (
          <Overlay
            show={this.state.overlay}
            close={this.overlayOff}
            width="80%"
            title="Refund information">
            <div>
              <RefundInformation
                refundId={registration.refundId}
                close={this.overlayOff}
              />
            </div>
          </Overlay>
        )
        break
    }

    let refunded
    if (registration.refundAmount > 0) {
      refunded = (
        <tr>
          <th>Refunded</th>
          <td className="text-danger">
            ${fixIt('refundAmount', registration)}
          </td>
        </tr>
      )
    }
    // const sessionDay = dayjs(session.eventDate * 1000).format('MM-DD-YYYY')
    // const today = dayjs().format('MM-DD-YYYY')
    let guestList = <div>No registered guests</div>
    if (guests.length > 0) {
      guestList = (
        <ul>
          {guests.map((value) => {
            return (
              <li key={`guest-${value.id}`}>
                {value.firstName} {value.lastName} -{' '}
                <a href={`mailto:${value.email}`}>{value.email}</a>
              </li>
            )
          })}
        </ul>
      )
    }

    return (
      <div>
        {costWarning}
        {accountWarning}
        <h3>
          Registration payment status for {visitor.firstName} {visitor.lastName}{' '}
          <a
            className="btn btn-info"
            href={`./conference/Admin/Visitor/loginAs?visitorId=${visitor.id}`}>
            <i className="fas fa-sign-in-alt"></i> Log in as visitor
          </a>
        </h3>

        <h4>
          Conference: {conference.title}
          <br />
          Session:&nbsp;
          {session.title} - {session.eventDateFormat}
          <a
            href={`conference/Admin/Registration/?sessionId=${session.id}`}
            className="btn btn-outline-dark btn-sm ml-3">
            Registrations list
          </a>
          <a
            href={`conference/Admin/Session/${session.id}/signin`}
            className="btn btn-outline-dark btn-sm ml-3">
            Unpaid list
          </a>
        </h4>
        <h4>
          Student: {student.firstName} {student.lastName} - {student.bannerId} -{' '}
          <a href={`mailto:${student.email}`}>{student.username}</a>
        </h4>
        {registration.cancelledBy.length > 0 ? (
          <div className="alert alert-danger">
            Cancelled on {registration.cancelledDate} by{' '}
            {registration.cancelledBy}
          </div>
        ) : null}
        <h4>Guests:</h4>
        {guestList}
        <hr />
        <table className="table table-striped">
          <tbody>
            <tr>
              <th style={{width: '10%'}}>Cost:</th>
              <td>
                ${fixIt('totalCost', registration)}
                <span className="ml-5 ">{additionButton}</span>
              </td>
            </tr>
            <tr>
              <th>Paid:</th>
              <td>
                ${fixIt('amountPaid', registration)} {refundButton} {refundInfo}
              </td>
            </tr>
            {refunded}
            <tr>
              <th>Due:</th>
              <td>${fixIt('amountDue', registration)}</td>
            </tr>
          </tbody>
        </table>

        <div className="mb-2">{payButton}</div>
        {cancelSupplement}
        <h4>Completed payments</h4>
        <div>{payments}</div>
        <Refunds registrationId={registrationId} />
        {overlay}
      </div>
    )
  }
}

Payment.propTypes = {
  registrationId: PropTypes.number,
}

ReactDOM.render(
  <Payment registrationId={registrationId} />,
  document.getElementById('Payment')
)
