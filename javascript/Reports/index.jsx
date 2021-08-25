'use strict'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import dayjs from 'dayjs'
import BigCheckBox from '@essappstate/canopy-react-bigcheckbox'

/* global $ */

export default class Reports extends Component {
  constructor(props) {
    super(props)
    this.state = {
      conferences: null,
      sessions: null,
      currentConferenceKey: -1,
      currentSessionKey: -1,
      currentConference: {title: 'n/a'},
      currentSession: {title: 'n/a'},
      registrationCount: 0,
      showDeletedConferences: false,
    }
    this.setConference = this.setConference.bind(this)
    this.setSession = this.setSession.bind(this)
  }

  componentDidMount() {
    this.loadConferences()
  }

  resetAll() {
    this.setState({conferences: null, sessions: null})
    this.resetConference()
    this.resetSession()
    this.loadConferences()
  }

  loadConferences() {
    const data = {includeDeleted: this.state.showDeletedConferences}
    $.ajax({
      url: 'conference/Admin/Conference/',
      data,
      dataType: 'json',
      type: 'get',
      success: (response) => {
        this.setState({conferences: response.listing})
      },
      error: () => {},
    })
  }

  loadSessions() {
    if (this.state.currentConference.id === 0) {
      this.setState({sessions: null})
      return
    }
    $.ajax({
      url: 'conference/Admin/Session',
      data: {conferenceId: this.state.currentConference.id},
      dataType: 'json',
      type: 'get',
      success: (data) => {
        this.setState({sessions: data.listing, currentSession: {title: 'n/a'}})
      },
      error: () => {},
    })
  }

  loadRegistrationCount() {
    $.ajax({
      url: 'conference/Admin/Registration/count',
      data: {sessionId: this.state.currentSession.id},
      dataType: 'json',
      type: 'get',
      success: (data) => {
        this.setState({registrationCount: data.count})
      },
      error: () => {},
    })
  }

  setConference(e) {
    const key = parseInt(e.target.value)
    if (key === -1) {
      this.resetConference()
      this.setState({currentConferenceKey: key})
      return
    }
    this.setState(
      {
        currentConference: this.state.conferences[key],
        currentConferenceKey: key,
      },
      this.loadSessions
    )
  }

  resetSession() {
    this.setState({currentSession: {title: 'n/a'}, currentSessionKey: -1})
  }

  resetConference() {
    this.setState(
      {
        currentConference: {title: 'n/a'},
        currentConferenceKey: -1,
      },
      this.resetSession
    )
  }

  setSession(e) {
    const key = parseInt(e.target.value)
    if (key === -1) {
      this.resetSession()
      this.setState({currentSessionKey: key})
      return
    }
    this.setState(
      {currentSession: this.state.sessions[key], currentSessionKey: key},
      this.loadRegistrationCount
    )
  }

  sessionList() {
    const {sessions} = this.state
    if (sessions === null) {
      return
    }
    const sessOptions = sessions.map((value, key) => {
      return (
        <option key={value.id} value={key}>
          {value.title} - {dayjs(value.eventDate * 1000).format('MMMM D, YYYY')}
        </option>
      )
    })
    return (
      <div>
        <div className="mb-4">
          <select
            className="form-control"
            value={this.state.currentSessionKey}
            onChange={this.setSession}>
            <option value="-1">Choose session</option>
            {sessOptions}
          </select>
        </div>

        <div className="d-flex justify-content-around">
          <div>{this.downloadRegistrationsButton()}</div>
          <div>{this.downloadEmailsButton()}</div>
          <div>{this.downloadPaymentsButton()}</div>
          <div>{this.downloadRefundsButton()}</div>
        </div>
      </div>
    )
  }

  conferenceList() {
    const {conferences, currentConferenceKey} = this.state
    if (conferences === null) {
      return
    }

    const confOptions = conferences.map((value, key) => {
      return (
        <option key={value.id} value={key}>
          {value.title}
        </option>
      )
    })

    let summaryButton
    let allEmailsButton
    if (currentConferenceKey > -1) {
      const sessionDownloadLink = `conference/Admin/Reports/sessions/?cid=${this.state.currentConference.id}`
      const allEmailDownloadLink = `conference/Admin/Reports/allEmails/?cid=${this.state.currentConference.id}`
      summaryButton = (
        <a className="btn btn-primary" href={sessionDownloadLink}>
          <i className="fas fa-download"></i>&nbsp;Download session summary
        </a>
      )
      allEmailsButton = (
        <a className="btn btn-primary" href={allEmailDownloadLink}>
          <i className="fas fa-download"></i>&nbsp;Download all emails
        </a>
      )
    }

    return (
      <div className="row">
        <div className="col-sm-6">
          <select
            className="form-control"
            value={this.state.currentConferenceKey}
            onChange={this.setConference}>
            <option value="-1">Choose a conference</option>
            {confOptions}
          </select>
        </div>
        <div className="col-sm-6">
          {summaryButton}&nbsp;{allEmailsButton}
        </div>
      </div>
    )
  }

  downloadEmailsButton() {
    if (this.state.currentSession.id === undefined) {
      return
    }
    if (this.state.registrationCount === 0) {
      return
    }

    const downloadLink = `conference/Admin/Reports/emails/?sid=${this.state.currentSession.id}`
    return (
      <a className="btn btn-primary" href={downloadLink}>
        <i className="fas fa-download" />
        &nbsp;Download completed registration emails
      </a>
    )
  }

  downloadPaymentsButton() {
    if (this.state.currentSession.id === undefined) {
      return
    }
    if (this.state.registrationCount === 0) {
      return
    }
    const downloadLink = `conference/Admin/Reports/payments/?sid=${this.state.currentSession.id}`
    return (
      <a className="btn btn-primary" href={downloadLink}>
        <i className="fas fa-download" />
        &nbsp;Download payments
      </a>
    )
  }

  downloadRegistrationsButton() {
    if (this.state.currentSession.id === undefined) {
      return
    }
    if (this.state.registrationCount === 0) {
      return <p>No registrations found for this session.</p>
    }
    const downloadLink = `conference/Admin/Reports/registrations/?sid=${this.state.currentSession.id}`
    return (
      <a className="btn btn-primary" href={downloadLink}>
        <i className="fas fa-download" />
        &nbsp;Download registrations
      </a>
    )
  }

  downloadRefundsButton() {
    if (this.state.currentSession.id === undefined) {
      return
    }
    if (this.state.registrationCount === 0) {
      return <p>No registrations found for this session.</p>
    }
    const downloadLink = `conference/Admin/Reports/refunds/?sid=${this.state.currentSession.id}`
    return (
      <a className="btn btn-primary" href={downloadLink}>
        <i className="fas fa-download" />
        &nbsp;Download refunds
      </a>
    )
  }

  render() {
    const {showDeletedConferences} = this.state
    return (
      <div>
        <h2>Reports</h2>
        <BigCheckBox
          label="Show deleted conferences"
          checked={showDeletedConferences}
          handle={() => {
            this.setState(
              {showDeletedConferences: !showDeletedConferences},
              this.resetAll
            )
          }}
        />
        <div className="mb-5">{this.conferenceList()}</div>
        <div className="mb-5">{this.sessionList()}</div>
      </div>
    )
  }
}

ReactDOM.render(<Reports />, document.getElementById('Reports'))
