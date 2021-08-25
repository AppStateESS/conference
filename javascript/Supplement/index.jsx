'use strict'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import GuestListing from './GuestListing'
import SessionChange from '../Shared/SessionChange'

/* global $, registrationId */

export default class Supplement extends Component {
  constructor(props) {
    super(props)
    this.state = {
      registration: {},
      addOnInfo: {},
      conference: {},
      session: {},
      loading: true,
      supplement: {
        id: 0,
        newGuests: 0,
        newMeals: 0,
        newVeggie: 0,
      },
      totalGuests: 0,
      totalMeals: 0,
      totalVeggie: 0,
      totalGuestCost: 0,
      totalMealCost: 0,
      guests: [],
      errorScreen: false,
      guestScreen: false,
    }
    this.defaultGuest = {
      firstName: '',
      lastName: '',
      email: '',
      relationship: 'Other',
      employer: '',
      position: '',
      hometown: '',
      id: 0,
      registrationId: 0,
      supplementId: 0,
    }
    this.increaseMeals = this.increaseMeals.bind(this)
    this.decreaseMeals = this.decreaseMeals.bind(this)
    this.increaseGuests = this.increaseGuests.bind(this)
    this.decreaseGuests = this.decreaseGuests.bind(this)
    this.increaseVeggie = this.increaseVeggie.bind(this)
    this.decreaseVeggie = this.decreaseVeggie.bind(this)
    this.updateGuest = this.updateGuest.bind(this)
    this.guestScreen = this.guestScreen.bind(this)
    this.cancelSupplement = this.cancelSupplement.bind(this)
    this.goBack = this.goBack.bind(this)
    this.save = this.save.bind(this)
    this.changeSession = this.changeSession.bind(this)
  }

  componentDidMount() {
    this.load()
  }

  updateGuest(count, property, event) {
    let value
    if (typeof event === 'object') {
      value = event.target.value
    } else {
      value = event
    }
    const {guests} = this.state
    const guest = guests[count]
    guest[property] = value
    guest.complete =
      guest.firstName.length > 0 &&
      guest.lastName.length > 0 &&
      guest.email.length > 0 &&
      guest.email.match(/^[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/) !== null
    this.setState({guests})
  }

  cancelSupplement() {
    const {supplement, registration} = this.state

    if (supplement.id > 0) {
      $.ajax({
        url: `conference/Visitor/Supplement/${supplement.id}/incomplete`,
        dataType: 'json',
        type: 'delete',
        success: () => {
          window.location.href =
            'conference/Visitor/Registration/' + supplement.registrationId
        },
        error: () => {
          this.setState({errorScreen: true})
        },
      })
    } else {
      window.location.href =
        'conference/Visitor/Registration/' + registration.id
    }
  }

  load() {
    $.ajax({
      url: `conference/Visitor/Supplement/current`,
      data: {registrationId: this.props.registrationId},
      dataType: 'json',
      type: 'get',
      success: (data) => {
        const {registration, session, supplement, guests} = data
        const totalGuests =
          parseInt(supplement.newGuests) + parseInt(registration.guestCount)
        const totalMeals =
          parseInt(supplement.newMeals) + parseInt(registration.mealTickets)
        const totalVeggie =
          parseInt(supplement.newVeggie) + parseInt(registration.veggieMeals)

        const totalMealCost = parseFloat(session.mealCost) * supplement.newMeals
        const totalGuestCost =
          parseFloat(session.guestCost) * supplement.newGuests

        if (guests.length === 0) {
          guests.push(Object.assign({}, this.defaultGuest))
        }
        this.setState({
          registration: data.registration,
          supplement: data.supplement,
          session: data.session,
          conference: data.conference,
          loading: false,
          guests,
          totalGuests,
          totalMeals,
          totalVeggie,
          totalMealCost,
          totalGuestCost,
        })
      },
      error: () => {
        this.setState({errorScreen: true})
      },
    })
  }

  save() {
    const {supplement, registration, guests} = this.state
    let url = 'conference/Visitor/Supplement'
    let type = 'post'
    if (supplement.id > 0) {
      url = url + '/' + supplement.id
      type = 'put'
    }
    $.ajax({
      url,
      data: {
        registrationId: registration.id,
        newGuests: supplement.newGuests,
        newMeals: supplement.newMeals,
        newVeggie: supplement.newVeggie,
        guests,
      },
      dataType: 'json',
      type,
      success: (data) => {
        window.location.href =
          'conference/Visitor/Supplement/' + data.id + '/complete'
      },
      error: () => {
        alert('Server error prevented registration update.')
      },
    })
  }

  goBack() {
    this.setState({guestScreen: false})
  }

  increaseMeals() {
    let {supplement, session, totalMeals, totalMealCost} = this.state
    const {mealCost} = session
    supplement.newMeals++
    totalMeals++
    totalMealCost += parseFloat(mealCost)
    this.setState({supplement, totalMeals, totalMealCost})
  }

  decreaseMeals() {
    if (this.state.supplement.newMeals > 0) {
      let {supplement, session, totalMeals, totalMealCost, totalVeggie} =
        this.state
      const {mealCost} = session
      supplement.newMeals--
      if (supplement.newVeggie > supplement.newMeals) {
        supplement.newVeggie = supplement.newMeals
      }
      totalMeals--
      if (totalVeggie > totalMeals) {
        totalVeggie = totalMeals
      }
      totalMealCost -= parseFloat(mealCost)
      this.setState({
        supplement,
        totalMeals,
        totalMealCost,
        totalVeggie,
      })
    }
  }

  increaseGuests() {
    const {supplement, session, guests} = this.state
    let {totalGuests, totalGuestCost} = this.state
    const attendanceCap = parseInt(session.attendanceCap)
    const {guestCost} = session
    if (totalGuests >= attendanceCap) {
      return
    }
    supplement.newGuests++
    if (guests.length < supplement.newGuests) {
      guests.push(Object.assign({}, this.defaultGuest))
    }
    totalGuests = parseInt(totalGuests) + 1
    totalGuestCost += parseFloat(guestCost)
    this.setState({supplement, totalGuests, totalGuestCost})
  }

  decreaseGuests() {
    const {supplement, session} = this.state
    if (supplement.newGuests > 0) {
      let {totalGuests, totalGuestCost} = this.state
      const {guestCost} = session
      supplement.newGuests--
      totalGuests--
      totalGuestCost -= parseFloat(guestCost)
      this.setState({supplement, totalGuests, totalGuestCost})
    }
  }

  increaseVeggie() {
    const attendanceCap = parseInt(this.state.registration.attendanceCap)
    let {supplement, totalVeggie} = this.state
    if (totalVeggie >= attendanceCap) {
      return
    }

    supplement.newVeggie++
    totalVeggie++
    this.setState({supplement, totalVeggie})
  }

  decreaseVeggie() {
    if (parseInt(this.state.supplement.newVeggie > 0)) {
      let {supplement, totalVeggie} = this.state
      supplement.newVeggie--
      totalVeggie--
      this.setState({supplement, totalVeggie})
    }
  }

  disableMealMinus() {
    return parseInt(this.state.supplement.newMeals) === 0
  }

  disableGuestMinus() {
    return parseInt(this.state.supplement.newGuests) === 0
  }

  disableVeggieMinus() {
    return parseInt(this.state.supplement.newVeggie) === 0
  }

  /**
   * Maximum meal tickets is total guests plus 4
   */
  disableMealPlus() {
    return (
      parseInt(this.state.totalMeals) >= parseInt(this.state.totalGuests) + 4
    )
  }

  disableGuestPlus() {
    return (
      parseInt(this.state.totalGuests) >=
      parseInt(this.state.session.attendanceCap)
    )
  }

  disableVeggiePlus() {
    return parseInt(this.state.totalVeggie) >= parseInt(this.state.totalMeals)
  }

  submitButton() {
    const {newMeals, newGuests} = this.state.supplement
    if (newGuests == 0 && newMeals == 0) {
      return <div></div>
    }

    const plural = (count, word) => {
      return count > 1 ? `${word}s` : word
    }

    let buttonText
    if (newGuests > 0 && newMeals > 0) {
      buttonText =
        newGuests +
        ' ' +
        plural(newGuests, 'guest') +
        ' and ' +
        newMeals +
        ' ' +
        plural(newMeals, 'meal ticket')
    } else if (newGuests > 0) {
      buttonText = newGuests + ' ' + plural(newGuests, 'guest')
    } else {
      buttonText = newMeals + ' ' + plural(newMeals, 'meal')
    }

    return (
      <button className="btn btn-success" onClick={this.guestScreen}>
        Add {buttonText}&nbsp;to my registration
      </button>
    )
  }

  guestScreen() {
    if (this.state.supplement.newGuests > 0) {
      this.setState({guestScreen: true})
    } else {
      this.save()
    }
  }

  changeSession(sessionId) {
    const {registration} = this.state
    $.ajax({
      url: `conference/Visitor/Registration/${registration.id}/changeSession`,
      data: {
        sessionId: sessionId,
      },
      dataType: 'json',
      type: 'patch',
      success: () => {
        window.location.href = `conference/Visitor/Registration/${registration.id}`
      },
      error: () => {
        this.setState({errorScreen: true})
      },
    })
  }

  render() {
    let sessionChange = null
    if (this.state.registration.id > 0) {
      sessionChange = (
        <SessionChange
          registrationId={this.state.registration.id}
          changeSession={this.changeSession}
        />
      )
    }
    if (this.state.errorScreen) {
      return (
        <div>
          <h2 className="text-danger">Error</h2>
          <p>
            This page experienced an unrecoverable error. Please contact the
            site administrators.
          </p>
        </div>
      )
    }
    if (this.state.loading) {
      return <div>Loading...</div>
    }

    if (this.state.guestScreen) {
      return (
        <div>
          <h2>{this.state.conference.title}</h2>
          <GuestListing
            count={this.state.supplement.newGuests}
            goBack={this.goBack}
            guests={this.state.guests}
            update={this.updateGuest}
            saveGuests={this.save}
          />
        </div>
      )
    }
    const {supplement, session, conference} = this.state
    const {guestCount, mealTickets, veggieMeals} = this.state.registration
    const {
      totalGuestCost,
      totalMealCost,
      totalGuests,
      totalMeals,
      totalVeggie,
    } = this.state

    const mealMessage = () => {
      return session.mealIncluded === 1 ? (
        <div>
          <span>Extra meal tickets</span>
          <span className="small d-block">
            A meal is included with each registration.
            <br />
            Extra meals are for unregistered participants.
          </span>
        </div>
      ) : (
        <div>
          {' '}
          <span>Meal tickets</span>
          <span className="small d-block">
            Meals are not included with registration.
            <br />
            You may prepay here or wait for the day of the event.
          </span>
        </div>
      )
    }
    return (
      <div>
        <h2>{conference.title}</h2>
        <h3>
          {session.title} - {session.eventDateRange}
        </h3>
        {sessionChange}
        {this.state.registration.guestCount >= session.attendanceCap ? (
          <div className="alert alert-danger">
            Sorry, no additional guests are permitted.
          </div>
        ) : null}
        {this.setState()}
        <table className="table table-striped">
          <tbody>
            <tr>
              <th />
              <th>Price</th>
              <th>Current</th>
              <th>Additional</th>
              <th>Total</th>
              <th />
            </tr>
            <tr className="lead">
              <th>Guests</th>
              <td>${session.guestCost.toFixed(2)}</td>
              <td>{guestCount}</td>
              <td>{supplement.newGuests}</td>
              <td>{totalGuests}</td>
              <td>
                <button
                  className="btn btn-danger mr-1"
                  onClick={this.decreaseGuests}
                  disabled={this.disableGuestMinus()}>
                  <i className="fas fa-minus" />
                </button>
                <button
                  className="btn btn-success"
                  onClick={this.increaseGuests}
                  disabled={this.disableGuestPlus()}>
                  <i className="fas fa-plus" />
                </button>
              </td>
            </tr>
            {session.mealService === 1 ? (
              <tr className="lead">
                <th>{mealMessage()}</th>
                <td>${session.mealCost.toFixed(2)}</td>
                <td>{mealTickets}</td>
                <td>{supplement.newMeals}</td>
                <td>{totalMeals}</td>
                <td>
                  <button
                    className="btn btn-danger mr-1"
                    onClick={this.decreaseMeals}
                    disabled={this.disableMealMinus()}>
                    <i className="fas fa-minus" />
                  </button>
                  <button
                    className="btn btn-success"
                    onClick={this.increaseMeals}
                    disabled={this.disableMealPlus()}>
                    <i className="fas fa-plus" />
                  </button>
                </td>
              </tr>
            ) : null}

            {session.mealService === 1 ? (
              <tr className="lead">
                <th>Vegetarian meals</th>
                <td></td>
                <td>{veggieMeals}</td>
                <td>{supplement.newVeggie}</td>
                <td>{totalVeggie}</td>
                <td>
                  <button
                    className="btn btn-danger mr-1"
                    onClick={this.decreaseVeggie}
                    disabled={this.disableVeggieMinus()}>
                    <i className="fas fa-minus" />
                  </button>
                  <button
                    className="btn btn-success"
                    onClick={this.increaseVeggie}
                    disabled={this.disableVeggiePlus()}>
                    <i className="fas fa-plus" />
                  </button>
                </td>
              </tr>
            ) : null}
            <tr className="lead">
              <th>Total cost</th>
              <td colSpan="5">
                ${(totalMealCost + totalGuestCost).toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="text-center mb-3">{this.submitButton()}</div>
        <div className="text-center">
          <button className="btn btn-danger" onClick={this.cancelSupplement}>
            Cancel registration additions
          </button>
        </div>
      </div>
    )
  }
}

Supplement.propTypes = {
  registrationId: PropTypes.number,
}

ReactDOM.render(
  <Supplement registrationId={registrationId} />,
  document.getElementById('Supplement')
)
