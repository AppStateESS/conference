'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import Listing from '@essappstate/canopy-listing'
import SessionForm from './SessionForm'
import loadLocations from '../Shared/Locations'
import {NavbarLink, NavbarSearch} from '@essappstate/react-navbar'
import '../Shared/style.css'

/* global $, conferenceId, locationId, sessionSoftCap */

const regLink = val => {
  return (
    <a href={`conference/Admin/Registration/?sessionId=${val.id}`}>
      {val.registrationCount}
    </a>
  )
}

const warning = row => {
  if (row.softCap == 0) {
    return <div className="badge badge-success">Under</div>
  }
  const registrationCount = parseInt(row.registrationCount)
  const softCap = row.softCap
  if (registrationCount > softCap) {
    return <div className="badge badge-danger">Over!</div>
  } else if (
    registrationCount != 0 &&
    registrationCount > softCap - sessionSoftCap
  ) {
    return <div className="badge badge-warning">Warning!</div>
  } else {
    return <div className="badge badge-success">Under</div>
  }
}

export default class Session extends Listing {
  constructor(props) {
    super(props)
    this.restUrl = 'conference/Admin/Session'
    this.label = 'Session'
    const coeff = 1000 * 60 * 30
    const now = (Math.round(Date.now() / coeff) * coeff) / 1000

    this.defaultResource = {
      id: 0,
      conferenceId: props.conferenceId,
      title: '',
      eventDate: now,
      startTime: '1200',
      endTime: '1300',
      signupStart: now - 86400,
      signupEnd: now,
      registerCost: 0.0,
      guestCost: 0.0,
      days: 1,
      softCap: 0,
      attendanceCap: 8,
      mealIncluded: 0,
      mealService: 0,
      mealCost: 0.0,
      allowGuest: 0,
      locationId: props.locationId,
      registrationCount: 0,
      capWarningSent: 0,
      active: 1
    }
    const dropdown = (key, row) => {
      const id = row.id
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
          <div
            className="dropdown-menu"
            aria-labelledby="dropdownMenuButton"
            style={{width: '200px'}}>
            <a
              className="dropdown-item pointer"
              href={`conference/Admin/Registration/?sessionId=${id}`}>
              <i className="fas fa-ticket-alt" />
              &nbsp;Registrations
            </a>
            <a
              className="dropdown-item pointer"
              href={`conference/Admin/Session/${id}/signin`}>
              <i className="fas fa-receipt" />
              &nbsp;Unpaid
            </a>
            <hr className="my-1" />
            <a
              className="dropdown-item pointer"
              href="#"
              onClick={this.editResource.bind(this, key)}>
              <i className="fas fa-edit" />
              &nbsp;Edit
            </a>
            <a
              className="dropdown-item pointer"
              href="#"
              onClick={this.copy.bind(this, key)}>
              <i className="fas fa-copy" />
              &nbsp;Copy
            </a>
            <a
              className="dropdown-item pointer"
              href="#"
              onClick={this.deleteResource.bind(this, key)}>
              <i className="fas fa-trash" />
              &nbsp;Delete
            </a>
          </div>
        </div>
      )
    }
    this.columns = [
      {
        column: 'options',
        callback: (row, key) => {
          return dropdown(key, row)
        },
        style: {
          width: '10%'
        }
      },
      {
        column: 'title',
        label: 'Title',
        sort: true
      },
      {
        column: 'registerCost',
        label: 'Cost / Guest / Meal',
        callback: row => {
          const mealCost =
            row.mealService === 1 ? (
              <span>${row.mealCost.toFixed(2)}</span>
            ) : (
              <span className="text-muted">N/A</span>
            )

          const guestCost =
            row.allowGuest === 1 ? (
              <span>${row.guestCost.toFixed(2)}</span>
            ) : (
              <span className="text-muted">N/A</span>
            )

          return (
            <span>
              ${row.registerCost.toFixed(2)} / {guestCost} / {mealCost}
            </span>
          )
        }
      },
      {
        column: 'registrationCount',
        label: <abbr title="Registrations">Reg.</abbr>,
        sort: true,
        style: {width: '100px'},
        className: 'text-right',
        callback: row => {
          return regLink(row)
        }
      },
      {
        label: 'Soft cap',
        callback: row => {
          return warning(row)
        }
      },
      {
        column: 'eventDate',
        label: 'Event date',
        sort: true,
        callback: session => {
          const eventDateObj = new Date()
          const now = new Date()
          eventDateObj.setTime(session.eventDate * 1000)
          if (
            eventDateObj.getDate() === now.getDate() &&
            eventDateObj.getFullYear() === now.getFullYear() &&
            eventDateObj.getMonth() === now.getMonth()
          ) {
            return (
              <a
                href={`conference/Admin/Session/${session.id}/signin`}
                className="btn btn-success btn-sm">
                Today!
              </a>
            )
          } else {
            return eventDateObj.toDateString()
          }
        }
      },
      {
        column: 'active',
        callback: (row, key) => {
          return this.activeButton(row, key)
        }
      }
    ]
    this.state.currentConference = {}
    this.state.currentConferenceKey = 0

    this.locations = []
    this.conferences = []
    this.state.resource = Object.assign({}, this.defaultResource)
    this.setCurrentConference = this.setCurrentConference.bind(this)
    this.activeButton = this.activeButton.bind(this)
  }

  componentDidMount() {
    loadLocations(this)
    this.loadConferences()
    super.componentDidMount()
  }

  deleteResource(key, e) {
    e.preventDefault()
    if (
      prompt(
        'Are you sure you want to delete this item along with all its contents (registrations, payments, etc.)?\nType DELETE if you are sure.'
      ) === 'DELETE'
    ) {
      this.sendDelete(key)
    }
  }

  copy(key, e) {
    e.preventDefault()
    const id = this.state.listing[key].id
    $.ajax({
      url: `conference/Admin/Session/copy`,
      data: {id},
      dataType: 'json',
      type: 'post',
      success: () => {
        this.load()
      },
      error: () => {
        this.setMessage('Could not create copy')
      }
    })
  }

  activeButton(row, key) {
    if (row.active === 1) {
      return (
        <button
          className="btn btn-success btn-sm"
          onClick={this.toggleActive.bind(this, key)}>
          Active
        </button>
      )
    } else {
      return (
        <button
          className="btn btn-danger btn-sm"
          onClick={this.toggleActive.bind(this, key)}>
          Not active
        </button>
      )
    }
  }

  toggleActive(key) {
    const {listing} = this.state
    const row = listing[key]
    row.active = row.active === 1 ? 0 : 1
    $.ajax({
      url: 'conference/Admin/Session/' + row.id,
      data: {varname: 'active', value: row.active},
      dataType: 'json',
      type: 'patch',
      success: () => {
        this.setState({listing})
      },
      error: () => {}
    })
  }

  load() {
    super.load({conferenceId: this.props.conferenceId})
  }

  loadConferences() {
    $.ajax({
      url: 'conference/Admin/Conference',
      dataType: 'json',
      type: 'get',
      success: data => {
        this.conferences = data.listing
        this.setState({currentConference: data.listing[0]})
      },
      error: () => {
        this.setMessage('Could not access server')
      }
    })
  }

  setCurrentConference(e) {
    const currentConferenceKey = e.target.value
    const currentConference = Object.assign(
      {},
      this.conferences[currentConferenceKey]
    )
    this.setState({currentConferenceKey, currentConference})
  }

  form() {
    return (
      <SessionForm
        resource={this.state.resource}
        conference={this.state.currentConference}
        update={this.update}
        locations={this.locations}
        save={this.save}
        close={this.finish}
      />
    )
  }

  getSearch() {
    return (
      <NavbarSearch
        value={this.state.search}
        placeholder="Search: title or date"
        onChange={e => {
          this.updateSearch(e.target.value)
        }}
      />
    )
  }

  navLeft() {
    const left = super.navLeft()
    left.push(
      <NavbarLink href="conference/Admin/Conference">
        Back to conferences
      </NavbarLink>
    )
    return left
  }

  title() {
    return <h2>Sessions for {this.state.currentConference.title}</h2>
  }

  overlay() {
    const {title} = this.state.currentConference
    return {
      content: <div className="session-form">{this.form()}</div>,
      title:
        (this.state.resource.id > 0 ? 'Update' : 'Create') +
        ' session for conference: ' +
        title,
      close: this.load
    }
  }
}

ReactDOM.render(
  <Session
    conferenceId={conferenceId}
    locationId={locationId}
    sessionSoftCap={sessionSoftCap}
  />,
  document.getElementById('Session')
)
