'use strict'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

/* global $, conferenceId */

class SessionMatchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      student: null,
      bannerId: '',
      bannerUsername: '',
      idError: false,
      message: null,
      sessionFound: false,
      session: null,
    }
    this.messageRef = React.createRef()
    this.submit = this.submit.bind(this)
    this.updateId = this.updateId.bind(this)
    this.updateUsername = this.updateUsername.bind(this)
    this.checkBannerId = this.checkBannerId.bind(this)
    this.loginErrorMessage = this.loginErrorMessage.bind(this)
    this.checkEnter = this.checkEnter.bind(this)
  }

  updateId(e) {
    let bannerId = e.target.value
    if (bannerId.search(/^\d*$/) !== -1 && bannerId.length < 10) {
      this.setState({bannerId, idError: false})
    }
  }

  updateUsername(e) {
    let bannerUsername = e.target.value
    if (bannerUsername.search(/^\w*$/) !== -1 && bannerUsername.length < 20) {
      this.setState({bannerUsername})
    }
  }

  checkBannerId() {
    if (this.state.bannerId.length !== 9) {
      this.setState({idError: true})
      return false
    } else {
      return true
    }
  }

  loginErrorMessage() {
    const message = (
      <div>
        Your log in session has timed out.&nbsp;
        <a href="./conference/User/Visitor/login">
          Please log back in to the system.
        </a>
      </div>
    )
    this.setState({message})
  }

  getSessionLink() {
    const {session, student} = this.state
    return (
      <div className="text-center">
        <div className="alert alert-success mb-4">
          {student.firstName} {student.lastName} is registered for student
          orientation on
          <br />
          <strong>{session.eventDateFormat}</strong>.
        </div>
        <a
          className="btn btn-primary btn-block btn-lg"
          href={`./conference/Visitor/Session/${session.id}/signup?studentId=${student.id}`}>
          Click to sign up for the corresponding Parent Orientation session!
        </a>
      </div>
    )
  }

  submit() {
    // match banner because adblock
    if (this.checkBannerId()) {
      $.ajax({
        url: './conference/Visitor/Student/match',
        data: {
          conferenceId: this.props.conferenceId,
          matchBannerId: this.state.bannerId,
          bannerUsername: this.state.bannerUsername,
        },
        dataType: 'json',
        type: 'get',
        success: (data) => {
          this.setState({student: data.student})
          if (data.session) {
            this.setState({sessionFound: true, session: data.session})
          } else if (data.message === 'login expired') {
            this.loginErrorMessage()
          } else {
            this.messageRef.current.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            })
            this.setState({message: data.message})
          }
        },
        error: () => {
          this.setState({
            message:
              'Our server has experienced a unknown problem with your request.',
          })
        },
      })
    }
  }

  checkEnter(e) {
    if (e.which === 13) {
      console.log('wtf')
      this.submit()
    }
  }

  getForm() {
    let idError
    if (this.state.idError) {
      idError = (
        <div className="badge badge-danger">
          Banner id should be nine characters in length.
        </div>
      )
    }
    let message
    if (this.state.message) {
      message = <div className="alert alert-danger">{this.state.message}</div>
    }
    return (
      <div>
        {message}
        <p className="card-text">
          Parent Orientation coincides with Student Orientation. Please enter
          your student&apos;s Banner ID and user name below to automatically
          pick the correct session.
        </p>
        <p className="card-text">
          If you do not know where to find your student&apos;s banner ID or
          username, contact the{' '}
          <a
            href="//admissions.appstate.edu"
            target="_blank"
            rel="nofollow noreferrer noopener">
            Office Of Admissions
          </a>
          .&nbsp;
          <em>
            Note: please expect to wait at least one hour after student
            registration to sync orientation schedules.
          </em>
        </p>
        <div className="row">
          <div className="col-sm-6 mb-3">
            <label>
              <strong>Banner Id</strong>
            </label>
            <input
              type="text"
              name="bannerId"
              className="form-control"
              value={this.state.bannerId}
              onChange={this.updateId}
              onBlur={this.checkBannerId}
              placeholder="e.g. 900000001"
            />
            <div>{idError}</div>
          </div>
          <div className="col-sm-6">
            <label>
              <strong>Banner user name</strong>
            </label>
            <input
              type="text"
              name="bannerUsername"
              className="form-control"
              onKeyDown={this.checkEnter}
              value={this.state.bannerUsername}
              onChange={this.updateUsername}
              placeholder="e.g. lastnamefm"
            />
          </div>
        </div>
        <div className="mt-3 text-center">
          <button className="btn btn-primary" onClick={this.submit}>
            Search for session
          </button>
        </div>
      </div>
    )
  }

  render() {
    const content = this.state.sessionFound
      ? this.getSessionLink()
      : this.getForm()

    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title" ref={this.messageRef}>
            Search for my student&apos;s orientation
          </h3>
          {content}
        </div>
      </div>
    )
  }
}

SessionMatchForm.propTypes = {
  conferenceId: PropTypes.number,
  sessionId: PropTypes.number,
}

ReactDOM.render(
  <SessionMatchForm conferenceId={conferenceId} />,
  document.getElementById('SessionMatchForm')
)
