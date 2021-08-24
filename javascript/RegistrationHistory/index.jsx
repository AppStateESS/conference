'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Waiting from '@essappstate/react-waiting'
import Overlay from '@essappstate/canopy-react-overlay'
/* global $, visitorId */

const dateString = (value) => {
  const date = new Date(value * 1000)
  return date.toDateString()
}

export default class RegistrationHistory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listing: [],
      visitor: {},
      show: false,
      loading: true,
      message: null,
      registration: {},
      newSessionId: 0,
      availableSessions: [],
    }
    this.changeSession = this.changeSession.bind(this)
    this.updateSession = this.updateSession.bind(this)
    this.cancelOrRefund = this.cancelOrRefund.bind(this)
    this.cancel = this.cancel.bind(this)
  }
  componentDidMount() {
    this.load()
  }

  loadAvailable() {
    $.ajax({
      url: 'conference/Admin/Session/available',
      data: {
        conferenceId: this.state.registration.conferenceId,
        registrationId: this.state.registration.id,
      },
      dataType: 'json',
      type: 'get',
      success: (data) => {
        if (data.listing !== null) {
          this.setState({
            availableSessions: data.listing,
            newSessionId: data.listing[0].id,
          })
        }
      },
      error: () => {},
    })
  }

  changeSession(key) {
    const registration = this.state.listing[key]
    this.setState({registration}, () => {
      this.loadAvailable()
      this.setState({show: true})
    })
  }

  setNewSessionId(sessionId) {
    this.setState({newSessionId: sessionId})
  }

  updateSession() {
    $.ajax({
      url: `conference/Admin/Registration/${this.state.registration.id}/changeSession`,
      data: {sessionId: this.state.newSessionId},
      dataType: 'json',
      type: 'patch',
      success: () => {
        this.load()
        this.setState({show: false})
      },
      error: () => {},
    })
  }

  load() {
    $.ajax({
      url: './conference/Admin/Registration/visitor',
      data: {
        visitorId: this.props.visitorId,
      },
      dataType: 'json',
      type: 'get',
      success: (data) => {
        if (!data.listing) {
          this.setState({
            message: 'Unable to connect',
            loading: false,
          })
        } else {
          this.setState({
            listing: data.listing,
            loading: false,
            message: null,
            visitor: data.visitor,
          })
        }
      },
      error: () => {
        this.setState({
          message: 'Unable to connect',
          loading: false,
        })
      },
    })
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

  cancelOrRefund(registration, key) {
    if (registration.completed && registration.totalCost > 0) {
      return (
        <a
          href={`conference/Admin/Refund/?registrationId=${registration.id}`}
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

  getListing() {
    let content = this.state.listing.map((value, key) => {
      return (
        <tr key={key}>
          <td>
            <div className="dropdown">
              <button
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                className="btn btn-outline-secondary btn-sm"
                id="dropdownMenuButton">
                <i className="fas fa-bars" />
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton">
                <a
                  href={`conference/Admin/Payment/?registrationId=${value.id}`}
                  className="dropdown-item">
                  <i className="far fa-credit-card" />
                  &nbsp;Payments
                </a>
                <a
                  href={`conference/Admin/Guest/?registrationId=${value.id}`}
                  className="dropdown-item">
                  <i className="fas fa-users" />
                  &nbsp;Guests
                </a>
                <hr className="my-0" />
                <a
                  className="dropdown-item pointer"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    this.changeSession(key)
                  }}>
                  <i className="fas fa-exchange-alt" />
                  &nbsp;Change session
                </a>
                <a
                  href={`conference/Admin/Visitor/loginAs?visitorId=${value.visitorId}&amp;registrationId=${value.id}`}
                  className="dropdown-item">
                  <i className="fas fa-sign-in-alt" />
                  &nbsp;Sign in as visitor
                </a>
                <a
                  className="dropdown-item pointer"
                  href={`conference/Admin/Supplement/add/?registrationId=${value.id}`}>
                  <i className="fas fa-plus"></i>&nbsp;Add guest or meals
                </a>
                <a
                  href={`./conference/Admin/Log/visitor/?vid=${value.visitorId}`}
                  className="dropdown-item pointer">
                  <i className="fas fa-clipboard-list"></i>
                  &nbsp;Log
                </a>
                {this.cancelOrRefund(value, key)}
              </div>
            </div>
          </td>
          <td>{value.id}</td>
          <td>{value.completed === 1 ? 'Completed' : 'Incomplete'}</td>
          <td>
            {dateString(value.eventDate)} &ndash; {value.sessionTitle}
          </td>
          <td>${parseFloat(value.totalCost).toFixed(2)}</td>
          <td>${parseFloat(value.amountPaid).toFixed(2)}</td>
        </tr>
      )
    })
    return (
      <table className="table table-striped">
        <tbody>
          <tr>
            <th>&nbsp;</th>
            <th>ID</th>
            <th>Status</th>
            <th>Session</th>
            <th>Cost</th>
            <th>Paid</th>
          </tr>
          {content}
        </tbody>
      </table>
    )
  }

  render() {
    let message
    const {newSessionId} = this.state
    if (this.state.message !== null) {
      message = (
        <div className="alert alert-danger">
          <i className="fas fa-exclamation-circle" />
          &nbsp;{this.state.message}
        </div>
      )
    }
    let content
    if (this.state.loading) {
      content = <Waiting />
    } else if (this.state.listing.length === 0) {
      content = <p>No registrations found for this account.</p>
    } else {
      content = this.getListing()
    }

    const optionList = this.state.availableSessions.map((value) => {
      return (
        <option key={value.id} value={value.id}>
          {value.eventDateFormat}&#32;&ndash;&#32;{value.title}
        </option>
      )
    })

    const options = (
      <div>
        <select
          className="form-control"
          value={this.state.newSessionId}
          onChange={(e) => this.setNewSessionId(e.target.value)}>
          {optionList}
        </select>
        <hr />
        <button className="btn btn-success" onClick={this.updateSession}>
          Update
        </button>
      </div>
    )

    return (
      <div>
        <h2>
          Registrations for {this.state.visitor.firstName}{' '}
          {this.state.visitor.lastName}
        </h2>
        {message}
        <div>{content}</div>
        <Overlay
          show={this.state.show}
          close={() => this.setState({show: false})}
          width="500px"
          title="My Overlay">
          {options}
        </Overlay>
      </div>
    )
  }
}

RegistrationHistory.propTypes = {
  visitorId: PropTypes.number,
}

ReactDOM.render(
  <RegistrationHistory visitorId={visitorId} />,
  document.getElementById('RegistrationHistory')
)
