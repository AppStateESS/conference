'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import Listing from '@essappstate/canopy-listing'
import ConferenceForm from './ConferenceForm'
import loadLocations from '../Shared/Locations'

/* global $ */

const defaultResource = {
  id: 0,
  title: '',
  description: '',
  locationId: 0,
  active: 1,
}

const defaultInfo = {
  id: 0,
  type: 'text',
  question: '',
  required: 0,
  sort: 1,
}

class Conference extends Listing {
  constructor(props) {
    super(props)
    this.restUrl = 'conference/Admin/Conference/'
    this.label = 'Conference'
    this.defaultResource = Object.assign({}, defaultResource)
    this.defaultInfo = Object.assign({}, defaultInfo)
    this.locations = null

    this.state.conferenceQuestion = []

    this.addInfo = this.addInfo.bind(this)
    this.updateInfo = this.updateInfo.bind(this)
    this.dropInfo = this.dropInfo.bind(this)
    this.loadConferenceQuestion = this.loadConferenceQuestion.bind(this)

    const titleCallback = (val) => {
      return (
        <a href={`./conference/Admin/Session/?conferenceId=${val.id}`}>
          {val.title}
        </a>
      )
    }

    const dropdown = (key) => {
      const conferenceId = this.state.listing[key].id
      const accountId = this.state.listing[key].accountId
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
              className="dropdown-item pointer"
              href={'./conference/Admin/Session/?conferenceId=' + conferenceId}>
              <i className="fas fa-list" />
              &nbsp;Sessions
            </a>
            <hr className="my-1" />
            <a
              className="dropdown-item pointer"
              href={'./conference/User/Conference/' + conferenceId}>
              <i className="fas fa-eye" />
              &nbsp;View
            </a>

            {accountId > 0 ? (
              <a
                className="dropdown-item pointer"
                href={`conference/Admin/Payment/syncAccount/?conferenceId=${conferenceId}`}>
                <i className="fas fa-money-check-alt"></i> Force service
              </a>
            ) : null}
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
              onClick={this.deletePrompt.bind(this, key)}>
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
          return dropdown(key)
        },
        style: {
          width: '10%',
        },
      },
      {
        column: 'title',
        label: 'Title',
        callback: titleCallback,
        sort: true,
      },
      {
        column: 'location',
        label: 'Location',
      },
      {
        column: 'sessionCount',
        label: 'Sessions',
        className: 'text-right',
        callback: (row) => {
          return (
            <a href={`conference/Admin/Session/?conferenceId=${row.id}`}>
              {row.sessionCount}
            </a>
          )
        },
      },
    ]
    this.state.resource = Object.assign({}, this.defaultResource)
    this.locations = null
    this.state.services = []
  }

  componentDidMount() {
    super.componentDidMount()
    loadLocations(this)
    this.loadServices()
  }

  loadResource(key) {
    super.loadResource(key)
    this.loadConferenceQuestion(key)
  }

  loadServices() {
    $.ajax({
      url: 'conference/Admin/Account/',
      data: {},
      dataType: 'json',
      type: 'get',
      success: (data) => {
        this.setState({services: data.listing})
      },
      error: () => {},
    })
  }

  loadConferenceQuestion(key) {
    const conferenceId = this.state.listing[key].id
    $.ajax({
      url: 'conference/Admin/ConferenceQuestion/conference',
      data: {id: conferenceId},
      dataType: 'json',
      type: 'get',
      success: (data) => {
        this.setState({conferenceQuestion: data.conferenceQuestion})
      },
      error: () => {},
    })
  }

  deletePrompt(key, e) {
    e.preventDefault()
    const confirm = prompt(
      'Are you sure you want to delete this conference and all its sessions, registrations, and payments? If you are sure, type "DELETE" below.'
    )
    if (confirm === 'DELETE') {
      this.sendDelete(key)
    }
  }

  sendDelete(key) {
    $.ajax({
      url: 'conference/Admin/Conference/' + this.state.listing[key].id,
      data: {},
      dataType: 'json',
      type: 'delete',
      success: () => {
        this.load()
      },
      error: () => {},
    })
  }

  addInfo() {
    const {conferenceQuestion} = this.state
    const info = Object.assign({}, this.defaultInfo)
    if (conferenceQuestion.length > 0) {
      info.sort = String(
        parseInt(conferenceQuestion[conferenceQuestion.length - 1].sort) + 1
      )
    }
    conferenceQuestion.push(info)
    this.setState({conferenceQuestion})
  }

  dropInfo(key) {
    const {conferenceQuestion} = this.state
    const info = conferenceQuestion[key]
    conferenceQuestion.splice(key, 1)
    this.setState({conferenceQuestion})
    if (info.id) {
      $.ajax({
        url: 'conference/Admin/ConferenceQuestion/' + info.id,
        data: {},
        dataType: 'json',
        type: 'delete',
        success: () => {},
        error: () => {
          this.setMessage('Could not delete extra info')
        },
      })
    }
  }

  updateInfo(value, section, key) {
    const {conferenceQuestion} = this.state
    conferenceQuestion[key][section] = value
    this.setState({conferenceQuestion})
  }

  form(overlay) {
    if (!overlay) {
      return <div></div>
    } else {
      return (
        <ConferenceForm
          services={this.state.services}
          conferenceQuestion={this.state.conferenceQuestion}
          updateInfo={this.updateInfo}
          dropInfo={this.dropInfo}
          addInfo={this.addInfo}
          save={this.save}
          close={this.finish}
          resource={this.state.resource}
          update={this.update}
          locations={this.locations}
        />
      )
    }
  }

  success(data) {
    if (data.success) {
      this.saveConferenceQuestion(data.id)
      this.load()
      this.setMessage(
        <div>
          <i className="far fa-thumbs-up" />
          &nbsp;Save successful.
        </div>,
        'success'
      )
      this.reset()
    } else {
      this.setMessage(
        <div>
          <i className="fas fa-exclamation-triangle" />
          &nbsp;Unable to save:&#32;
          {data.error}
        </div>
      )
    }
  }

  reset() {
    super.reset()
    this.setState({conferenceQuestion: []})
  }

  saveConferenceQuestion(conferenceId) {
    const {conferenceQuestion} = this.state
    if (conferenceQuestion.length === 0) {
      return
    }
    $.ajax({
      url: 'conference/Admin/ConferenceQuestion/',
      data: {conferenceQuestion, conferenceId},
      dataType: 'json',
      type: 'post',
      success: () => {},
      error: () => {
        this.setMessage('Could not save extra information data.')
      },
    })
  }

  title() {
    let warning
    if (this.locations !== null && this.locations.length === 0) {
      warning = (
        <div className="alert alert-warning">
          <i className="fas fa-exclamation-triangle" />
          You should <a href="conference/Admin/Location">
            create a location
          </a>{' '}
          to assign to your conferences.
        </div>
      )
    }
    return (
      <div>
        <h2>Conferences</h2>
        {warning}
      </div>
    )
  }

  overlay() {
    return {
      content: (
        <div className="conference-form">{this.form(this.state.overlay)}</div>
      ),
      width: '90%',
      title:
        this.state.resource.id > 0 ? 'Update conference' : 'Create conference',
      close: this.load,
    }
  }
}

ReactDOM.render(<Conference />, document.getElementById('Conference'))
