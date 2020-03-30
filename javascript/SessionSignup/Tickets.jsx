'use strict'
import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Tickets extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  guestOptions() {
    const {attendanceCap} = this.props.session
    const {registration, update} = this.props
    if (attendanceCap == 0) {
      return null
    }
    let options = []
    for (let i = 0; i < attendanceCap; i++) {
      options.push(<option key={i}>{i}</option>)
    }
    return (
      <div className="row">
        <div className="col-sm-9">
          <p>
            How many additional family members do you want to register?
            <br />
            <em className="small">
              Guests under 18 years of age may participate without being
              registered.
            </em>
          </p>
        </div>
        <div className="col-sm-3">
          <select
            className="form-control"
            value={registration.guestCount}
            onChange={update.bind(null, 'guestCount')}>
            {options.map(v => {
              return v
            })}
          </select>
        </div>
      </div>
    )
  }

  mealOptions() {
    const {mealIncluded, mealService, mealCost} = this.props.session
    const {registration, update} = this.props
    if (mealCost == 0 || mealService == 0) {
      return
    }
    const mealLabel = mealIncluded == 1 ? ' extra ' : ' '

    const mealIncludedMessage =
      mealIncluded == 1 ? (
        <span className="small">
          Each parent and guest receives a meal as part of their registration.
          Extra meals tickets are for those not registered or participating in
          orientation.
        </span>
      ) : (
        <span className="small">
          Meals are not included as part of registration. You may prepay now or
          wait until the day of the event.
        </span>
      )

    const veggieMessage =
      mealIncluded == 1 ? (
        <span className="small">Include your registration meal.</span>
      ) : null

    let veggieOptions = []
    const limit = Number(registration.mealTickets) + 1
    for (let i = 0; i <= limit; i++) {
      veggieOptions.push(<option key={i}>{i}</option>)
    }

    return (
      <div>
        <div className="row mt-3">
          <div className="col-sm-9">
            <label className="mb-0">
              How many{mealLabel}meal tickets do you need?
            </label>
            <div>{mealIncludedMessage}</div>
          </div>
          <div className="col-sm-3">
            <select
              className="form-control"
              value={registration.mealTickets}
              onChange={update.bind(null, 'mealTickets')}>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-sm-9">
            <label className="mb-0">
              How many vegetarian meals do you need?
            </label>
            {veggieMessage}
          </div>
          <div className="col-sm-3">
            <select
              className="form-control"
              value={registration.veggieMeals}
              onChange={update.bind(null, 'veggieMeals')}>
              {veggieOptions}
            </select>
          </div>
        </div>
      </div>
    )
  }

  veggieOptions() {
    return <div />
  }

  fixedDecimal(val) {
    return Number.parseFloat(val).toFixed(2)
  }

  pricing() {
    const {session, student, registration} = this.props
    let discount
    let finalPrice = session.registerCost
    if (student.discountAmount) {
      discount = <span> - ${student.discountAmount.toFixed(2)} discount</span>
      finalPrice =
        parseFloat(session.registerCost) - parseFloat(student.discountAmount)
    }
    let registrationCost = (
      <tr>
        <th>
          <span>Registration cost:</span>
          <br />
          <span className="small">
            Registration cost covers one parent&apos;s attendance
          </span>
        </th>
        <td>
          ${session.registerCost.toFixed(2)}
          {discount}
        </td>
        <td>${finalPrice.toFixed(2)}</td>
      </tr>
    )

    let guestCost
    if (session.guestCost !== 0 && registration.guestCount > 0) {
      const guestTotal = this.fixedDecimal(
        registration.guestCount * session.guestCost
      )
      guestCost = (
        <tr>
          <th>Guest cost:</th>
          <td>
            ${session.guestCost.toFixed(2)} x {registration.guestCount}
          </td>
          <td>${guestTotal}</td>
        </tr>
      )
    }

    let mealCost
    if (session.mealCost !== 0 && registration.mealTickets > 0) {
      const mealTotal = this.fixedDecimal(
        registration.mealTickets * session.mealCost
      )
      mealCost = (
        <tr>
          <th>Meal cost:</th>
          <td>
            ${session.mealCost.toFixed(2)} x {registration.mealTickets}
          </td>
          <td>${mealTotal}</td>
        </tr>
      )
    }

    return (
      <table className="table table-striped">
        <tbody>
          {registrationCost}
          {guestCost}
          {mealCost}
          <tr>
            <td colSpan="2">
              <span className="lead">Total session cost:</span>
            </td>
            <td>
              <span className="lead">
                ${this.fixedDecimal(this.props.totalCost())}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    )
  }

  render() {
    const guests = this.guestOptions()
    const meals = this.mealOptions()
    const veggie = this.veggieOptions()
    let backButton
    if (this.props.questions) {
      backButton = (
        <button
          className="btn btn-outline-primary mr-3"
          onClick={this.props.back}>
          Back to questions
        </button>
      )
    }
    return (
      <div>
        <h3>Additions</h3>
        {guests}
        {meals}
        {veggie}
        <hr />
        <div>{this.pricing()}</div>
        <div className="text-center">
          {backButton}
          <button className="btn btn-primary" onClick={this.props.save}>
            Save charges and continue
          </button>
        </div>
      </div>
    )
  }
}

Tickets.propTypes = {
  registration: PropTypes.object,
  save: PropTypes.func,
  session: PropTypes.object,
  update: PropTypes.func,
  totalCost: PropTypes.func,
  student: PropTypes.object,
  questions: PropTypes.bool,
  back: PropTypes.func
}

Tickets.defaultProps = {}
