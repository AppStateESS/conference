'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Waiting from '@essappstate/react-waiting'

/* global $, visitorId */

const dateString = value => {
  const date = new Date(value * 1000)
  return date.toDateString()
}

export default class RegistrationHistory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listing: [],
      visitor: {},
      loading: true,
      message: null
    }
  }
  componentDidMount() {
    this.load()
  }

  load() {
    $.ajax({
      url: './conference/Admin/Registration/visitor',
      data: {
        visitorId: this.props.visitorId
      },
      dataType: 'json',
      type: 'get',
      success: data => {
        if (!data.listing) {
          this.setState({message: 'Unable to connect', loading: false})
        } else {
          this.setState({
            listing: data.listing,
            loading: false,
            message: null,
            visitor: data.visitor
          })
        }
      },
      error: () => {
        this.setState({message: 'Unable to connect', loading: false})
      }
    })
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
                  <i className="fas fa-clipboard-list"></i>&nbsp;Log
                </a>
              </div>
            </div>
          </td>
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
    return (
      <div>
        <h2>
          Registrations for {this.state.visitor.firstName}{' '}
          {this.state.visitor.lastName}
        </h2>
        {message}
        <div>{content}</div>
      </div>
    )
  }
}

RegistrationHistory.propTypes = {
  visitorId: PropTypes.number
}

ReactDOM.render(
  <RegistrationHistory visitorId={visitorId} />,
  document.getElementById('RegistrationHistory')
)
