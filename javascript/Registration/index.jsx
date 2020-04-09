'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import Listing from '@essappstate/canopy-listing'
import RegistrationForm from './RegistrationForm'
import {NavbarLink} from '@essappstate/react-navbar'
import PropTypes from 'prop-types'

/* global $, sessionId */

export default class Registration extends Listing {
  constructor(props) {
    super(props)
    this.restUrl = 'conference/Admin/Registration'
    this.label = 'Registration'
    this.state.session = {}
    this.state.availableSessions = []
    this.state.limit = 20
    this.changeSession = this.changeSession.bind(this)

    this.defaultResource = {
      createDate: 0,
      updateDate: 0,
      cancelledDate: 0,
      cancelledBy: '',
      sessionId: 0,
      conferenceId: 0,
      guestCount: 0,
      mealTickets: 0,
      veggieMeals: 0,
      completed: 0,
      id: 0,
      visitorId: 0,
      totalCost: 0,
      amountPaid: 0,
      visitorName: '',
      signedIn: 0,
    }

    const dropdown = (key) => {
      const registrationId = this.state.listing[key].id
      const registration = this.state.listing[key]
      const cancelOrRefund = () => {
        if (registration.completed && registration.totalCost > 0) {
          return (
            <a
              href={`conference/Admin/Refund/?registrationId=${registrationId}`}
              className="dropdown-item">
              <i className="fas fa-cash-register" />
              &nbsp;Refund
            </a>
          )
        } else {
          return (
            <a
              href="#"
              className="dropdown-item pointer"
              onClick={this.cancel.bind(this, key)}>
              <i className="fas fa-ban text-danger" />
              &nbsp;Cancel
            </a>
          )
        }
      }
      return (
        <div className="dropdown">
          <button
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            className="btn btn-outline-secondary btn-sm"
            id="dropdownMenuButton">
            <i className="fas fa-bars" />
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a
              href={`conference/Admin/Payment/?registrationId=${registrationId}`}
              className="dropdown-item">
              <i className="far fa-credit-card" />
              &nbsp;Payments
            </a>
            <a
              href={`conference/Admin/Guest/?registrationId=${registrationId}`}
              className="dropdown-item">
              <i className="fas fa-users" />
              &nbsp;Guests
            </a>
            <hr className="my-0" />
            <a
              href={`conference/Admin/Visitor/loginAs?visitorId=${registration.visitorId}&amp;registrationId=${registration.id}`}
              className="dropdown-item">
              <i className="fas fa-sign-in-alt" />
              &nbsp;Sign in as visitor
            </a>
            <a
              className="dropdown-item pointer"
              href={`conference/Admin/Supplement/add/?registrationId=${registrationId}`}>
              <i className="fas fa-plus"></i>&nbsp;Add guest or meals
            </a>
            <a
              className="dropdown-item pointer"
              href="#"
              onClick={this.changeSession.bind(this, key)}>
              <i className="fas fa-exchange-alt" />
              &nbsp;Change session
            </a>
            {cancelOrRefund()}
          </div>
        </div>
      )
    }

    this.columns = [
      {
        column: 'options',
        callback: (row, key) => {
          return dropdown(key, row.id)
        },
      },
      {column: 'id', label: 'Id'},
      {
        column: 'lastName',
        callback: (row) => {
          if (row.firstName === null || row.firstName.length === 0) {
            return <em>Incomplete</em>
          } else {
            return (
              <a
                href={`conference/Admin/Registration/visitor?visitorId=${row.visitorId}`}>
                {row.firstName} {row.lastName}
              </a>
            )
          }
        },
        label: 'Parent name',
        sort: true,
      },
      {
        column: 'studentLastName',
        callback: (row) => {
          return (
            <span>
              {row.studentFirstName}&nbsp;{row.studentLastName}
            </span>
          )
        },
        label: 'Student name',
        sort: true,
      },
      {
        column: 'totalCost',
        label: 'Cost',
        callback: (row) => {
          const totalCost = parseFloat(row.totalCost).toFixed(2)
          return `$${totalCost}`
        },
      },
      {
        column: 'amountPaid',
        label: 'Paid',
        callback: (row) => {
          const amountPaid = parseFloat(row.amountPaid).toFixed(2)
          return `$${amountPaid}`
        },
      },
      {
        column: 'refundAmount',
        label: 'Refunded',
        callback: (row) => {
          return `$${parseFloat(row.refundAmount).toFixed(2)}`
        },
      },
      {
        column: 'completed',
        callback: (row) => {
          return row.completed === 1 ? (
            <span className="text-success">Yes</span>
          ) : (
            <span className="text-danger">No</span>
          )
        },
        label: 'Completed',
        sort: true,
      },
    ]
    this.state.resource = Object.assign({}, this.defaultResource)
    this.loadSession = this.loadSession.bind(this)
    this.loadAvailable = this.loadAvailable.bind(this)
  }

  load() {
    super.load({sessionId: this.props.sessionId})
    this.loadSession()
  }

  changeSession(key, e) {
    e.preventDefault()
    this.loadResource(key, this.loadAvailable)
    this.overlayOn('form')
  }

  cancel(key, e) {
    e.preventDefault()
    const registration = this.state.listing[key]
    if (
      prompt(
        'You sure you want to cancel this registration? If so type CANCEL below.'
      ) === 'CANCEL'
    ) {
      $.ajax({
        url: `conference/Admin/Registration/${registration.id}/cancel`,
        dataType: 'json',
        type: 'patch',
        success: () => {
          this.load()
        },
        error: () => {},
      })
    }
  }

  loadAvailable() {
    $.ajax({
      url: 'conference/Admin/Session/available',
      data: {
        conferenceId: this.state.session.conferenceId,
        registrationId: this.state.resource.id,
      },
      dataType: 'json',
      type: 'get',
      success: (data) => {
        if (data.listing !== null) {
          this.setState({availableSessions: data.listing})
        }
      },
      error: () => {},
    })
  }

  loadSession() {
    $.ajax({
      url: 'conference/Admin/Session/' + this.props.sessionId,
      dataType: 'json',
      type: 'get',
      success: (data) => {
        this.setState({session: data})
      },
      error: () => {},
    })
  }

  registrationOverlay() {
    return {
      content: (
        <div className="registration-form">
          <RegistrationForm
            registration={this.state.resource}
            availableSessions={this.state.availableSessions}
            done={() => {
              this.reset()
              this.load()
            }}
          />
        </div>
      ),
      width: '80%',
      title: 'Update registration',
      close: this.load,
    }
  }

  overlay() {
    return this.registrationOverlay()
  }

  navLeft() {
    const navLeft = []
    navLeft.push(
      <NavbarLink
        href={`conference/Admin/Session/?conferenceId=${this.state.session.conferenceId}`}>
        <i className="fas fa-arrow-left"></i> Back to sessions
      </NavbarLink>
    )
    return navLeft
  }

  title() {
    return (
      <h3>
        Registrations for {this.state.session.title}&nbsp;&ndash;&nbsp;
        {this.state.session.eventDateFormat}{' '}
        <a
          className="btn btn-outline-dark"
          href={`conference/Admin/Session/${this.state.session.id}/signin`}>
          View unpaid
        </a>
      </h3>
    )
  }
}

Registration.propTypes = {
  sessionId: PropTypes.number,
}

ReactDOM.render(
  <Registration sessionId={sessionId} />,
  document.getElementById('Registration')
)
