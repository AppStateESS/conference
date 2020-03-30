'use strict'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Tickets from './Tickets'
import Visitor from './Visitor'
import Complete from './Complete'
import Guest from './Guest'
import ConferenceQuestion from './ConferenceQuestion'
import Review from './Review'
import SessionChange from '../Shared/SessionChange'

import '../Shared/style.css'

/* global $, session, studentId, registrationId, onsite */

export default class SessionSignup extends Component {
  constructor(props) {
    super(props)
    this.lastStage = ''
    this.questions = false
    this.state = {
      registration: {
        id: 0,
        conferenceId: 0,
        visitorId: 0,
        sessionId: 0,
        studentId: 0,
        guestCount: 0,
        mealTickets: 0,
        veggieMeals: 0,
        completed: 0
      },
      student: null,
      signupAllowed: true,
      guests: [],
      newRegistration: true,
      visitorInfo: null,
      visitor: {firstName: '', lastName: ''},
      stage: 'start',
      errorMessage: false,
      errors: {
        firstName: false,
        lastName: false,
        address1: false,
        city: false,
        phone: false,
        zip: false
      },
      proceed: true
    }
    this.updateVisitor = this.updateVisitor.bind(this)
    this.updateRegistration = this.updateRegistration.bind(this)
    this.updateInfo = this.updateInfo.bind(this)
    this.forward = this.forward.bind(this)
    this.totalCost = this.totalCost.bind(this)
    this.checkContact = this.checkContact.bind(this)
    this.saveContact = this.saveContact.bind(this)
    this.saveRegistration = this.saveRegistration.bind(this)
    this.checkInfo = this.checkInfo.bind(this)
    this.updateGuest = this.updateGuest.bind(this)
    this.saveGuests = this.saveGuests.bind(this)
    this.changeSession = this.changeSession.bind(this)
  }

  componentDidMount() {
    this.loadVisitor().then(() => {
      this.loadRegistration().then(() => {
        this.loadStudent().then(() => {
          this.loadVisitorInfo().then(() => {
            this.loadGuests().then(() => {
              this.determineStage()
            })
          })
        })
      })
    })
  }

  determineStage() {
    let stage = 'review'
    if (this.registrationComplete()) {
      stage = 'complete'
    } else {
      if (!this.visitorDemographicsComplete()) {
        stage = 'contact'
      } else if (!this.questionsComplete()) {
        stage = 'conferenceQuestion'
      } else if (!this.guestsComplete()) {
        stage = 'guest'
      }
    }
    this.lastState = stage
    this.setState({stage})
  }

  guestsComplete() {
    const guestCount = parseInt(this.state.registration.guestCount)
    return (
      guestCount === 0 ||
      (guestCount == this.state.guests.length &&
        this.state.guests[0].firstName.length > 0)
    )
  }

  loadVisitorInfo() {
    return $.ajax({
      url: 'conference/Visitor/VisitorInfo/',
      data: {registrationId: this.state.registration.id},
      dataType: 'json',
      type: 'get',
      success: data => {
        this.setState({visitorInfo: data.listing})
      },
      error: () => {}
    })
  }

  loadStudent() {
    return $.ajax({
      url: 'conference/Visitor/Student/' + this.state.registration.studentId,
      dataType: 'json',
      type: 'get',
      success: data => {
        this.setState({student: data})
      },
      error: () => {}
    })
  }

  loadVisitor() {
    return $.ajax({
      url: 'conference/Visitor/Visitor/current',
      data: {},
      dataType: 'json',
      type: 'get',
      success: data => {
        this.setState({visitor: data})
      },
      error: () => {
        this.setState({errorMessage: true})
      }
    })
  }

  loadRegistration() {
    const {registrationId} = this.props
    return $.ajax({
      url: 'conference/Visitor/Registration/' + registrationId,
      data: {},
      dataType: 'json',
      type: 'get',
      success: data => {
        this.setState({registration: data})
      },
      error: () => {}
    })
  }

  loadGuests() {
    const {guestCount, id} = this.state.registration
    return $.ajax({
      url: 'conference/Visitor/Guest/',
      data: {registrationId: this.state.registration.id},
      dataType: 'json',
      type: 'get',
      success: ({listing}) => {
        let guests = listing
        const guestLength = guests.length
        if (guestLength > 0) {
          guests.forEach(element => {
            element.complete =
              element.firstName.length > 0 &&
              element.lastName.length > 0 &&
              element.email.length > 0 &&
              registrationId > 0
          })
          const guestPad = guestCount - guestLength
          if (guestPad > 0) {
            for (let i = 0; i < guestPad; i++) {
              guests.push({
                firstName: '',
                lastName: '',
                email: '',
                registrationId: id,
                complete: false
              })
            }
          }
        } else {
          guests = this.buildGuests(this.state.registration.guestCount)
        }
        this.setState({guests})
      },
      error: () => {}
    })
  }

  changeSession(sessionId) {
    const {registration} = this.state
    $.ajax({
      url: `conference/Visitor/Registration/${registration.id}/changeSession`,
      data: {
        sessionId: sessionId
      },
      dataType: 'json',
      type: 'patch',
      success: () => {
        window.location.href = `conference/Visitor/Session/${sessionId}/signup?studentId=${registration.studentId}`
      },
      error: () => {
        this.setState({errorMessage: true})
      }
    })
  }

  registrationComplete() {
    const {registration} = this.state
    return registration.completed === 1
  }

  questionsComplete() {
    const {visitorInfo} = this.state
    if (visitorInfo === null) {
      return true
    }
    let questionsComplete = true
    visitorInfo.forEach(value => {
      if (value.answer === null || value.answer.length === 0) {
        questionsComplete = false
      }
    })
    return questionsComplete
  }

  saveGuests() {
    $.ajax({
      url: 'conference/Visitor/Guest/',
      data: {
        registrationId: this.state.registration.id,
        guests: this.state.guests
      },
      dataType: 'json',
      type: 'post',
      success: () => {
        this.lastStage = 'review'
        this.setState({stage: 'review'})
      },
      error: () => {}
    })
  }

  checkInfo() {
    const {visitorInfo} = this.state
    let errorFound = false
    visitorInfo.forEach(question => {
      if (
        question.type === 'text' &&
        question.required === 1 &&
        question.answer.length === 0
      ) {
        question.error = true
        errorFound = true
      } else {
        question.error = false
      }
    })
    this.setState({visitorInfo})
    if (!errorFound) {
      this.saveInfo()
    }
  }

  saveInfo() {
    $.ajax({
      url: 'conference/Visitor/VisitorInfo',
      data: {
        info: this.state.visitorInfo,
        registrationId: this.state.registration.id,
        conferenceId: this.state.registration.conferenceId
      },
      dataType: 'json',
      type: 'post',
      success: () => {
        this.setState({stage: 'tickets'})
      },
      error: () => {
        alert('Could not save your information.')
      }
    })
  }

  buildGuests(count) {
    let guests = []
    for (let i = 0; i < count; i++) {
      guests[i] = {
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
        complete: false
      }
    }
    return guests
  }

  visitorDemographicsComplete() {
    return (
      this.checkContact('firstName') &&
      this.checkContact('lastName') &&
      this.checkContact('address1') &&
      this.checkContact('city') &&
      this.checkContact('phone') &&
      this.checkContact('zip')
    )
  }

  checkContact(param) {
    const {visitor, errors} = this.state
    errors[param] = visitor[param].length === 0
    const errorFound =
      errors.firstName ||
      errors.lastName ||
      errors.address1 ||
      errors.city ||
      errors.zip
    this.setState({errors})
    return !errorFound
  }

  updateVisitor(varname, value) {
    if (typeof value === 'object') {
      value = value.target.value
    }
    const {visitor} = this.state
    visitor[varname] = value
    this.setState({visitor})
  }

  updateRegistration(varname, value) {
    if (typeof value === 'object') {
      value = value.target.value
    }
    const {registration} = this.state
    registration[varname] = value
    this.setState({registration})
  }

  saveContact() {
    $.ajax({
      url: './conference/Visitor/Visitor/' + this.state.visitor.id,
      data: this.state.visitor,
      dataType: 'json',
      type: 'put',
      success: () => {
        let stage
        if (this.questionsComplete()) {
          stage = this.lastStage === 'review' ? 'review' : 'tickets'
        } else {
          stage = 'conferenceQuestion'
        }
        this.setState({stage})
      },
      error: () => {
        this.setState({errorMessage: true})
      }
    })
    this.setState({stage: 'review'})
  }

  forward() {
    switch (this.state.stage) {
      case 'contact':
        if (this.visitorDemographicsComplete()) {
          this.saveContact()
        }
        break

      case 'conferenceQuestion':
        this.lastStage = 'tickets'
        this.setState({stage: 'tickets'})
        break

      case 'tickets':
        if (parseInt(this.state.registration.guestCount) > 0) {
          if (this.state.guests.length === 0) {
            this.setState({
              guests: this.buildGuests(this.state.registration.guestCount)
            })
          }
          this.lastStage = 'guest'
        } else {
          this.lastStage = 'review'
        }
        this.setState({stage: this.lastStage})
        break
    }
  }

  saveRegistration() {
    const {registration, visitor} = this.state
    const data = {}
    data.visitorId = visitor.id
    data.sessionId = registration.sessionId
    data.guestCount = registration.guestCount
    data.mealTickets = registration.guestCount
    data.veggieMeals = registration.guestCount
    data.studentId = registration.studentId

    let type = 'post'
    let url = './conference/Visitor/Registration'
    if (this.state.registration.id !== 0) {
      type = 'put'
      url = url + '/' + this.state.registration.id
    }
    $.ajax({
      url,
      data: this.state.registration,
      dataType: 'json',
      type,
      success: () => {
        this.forward()
      },
      error: () => {
        this.setState({errorMessage: true})
      }
    })
  }

  totalCost() {
    const {registration, student} = this.state
    const {session} = this.props
    const {registerCost, guestCost, mealCost, mealService} = session

    let cost = Number(registerCost - student.discountAmount)

    const totalGuestCost = Number(guestCost) * Number(registration.guestCount)
    cost = cost + totalGuestCost

    if (mealService == 1) {
      const totalMealCost = Number(mealCost) * Number(registration.mealTickets)
      cost = cost + totalMealCost
    }

    return cost.toFixed(2)
  }

  updateInfo(key, value) {
    const {visitorInfo} = this.state
    visitorInfo[key].answer = value
    this.setState({visitorInfo})
  }

  previousSummary() {
    return (
      <div className="alert alert-secondary">
        <span className="lead">Session cost: ${this.totalCost()}.00</span>-
        <a
          className="pointer"
          onClick={() => this.setState({stage: 'tickets'})}>
          Edit
        </a>
      </div>
    )
  }

  updateGuest(count, property, value) {
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

  render() {
    let content
    let {session} = this.props
    const {student} = this.state
    if (this.state.errorMessage) {
      return (
        <div className="alert alert-danger">
          Sorry, but an error prevented your registration from completing.
          Please contact us for help.
        </div>
      )
    }
    switch (this.state.stage) {
      case 'start':
        content = <div>Loading, please wait</div>
        break

      case 'contact':
        content = (
          <Visitor
            registration={this.state.registration}
            save={this.forward}
            visitor={this.state.visitor}
            session={session}
            errors={this.state.errors}
            check={this.checkContact}
            update={this.updateVisitor}
          />
        )
        break

      case 'tickets':
        if (this.state.registration.completed === 1) {
          content = <div>Already complete</div>
        } else {
          content = (
            <Tickets
              back={() => this.setState({stage: 'conferenceQuestion'})}
              questions={this.questions}
              save={this.saveRegistration}
              totalCost={this.totalCost}
              registration={this.state.registration}
              session={session}
              student={student}
              update={this.updateRegistration}
            />
          )
        }
        break

      case 'conferenceQuestion':
        content = (
          <ConferenceQuestion
            visitorInfo={this.state.visitorInfo}
            checkInfo={this.checkInfo}
            update={this.updateInfo}
            save={this.forward}
          />
        )
        break

      case 'guest':
        content = (
          <Guest
            guests={this.state.guests}
            update={this.updateGuest}
            registration={this.state.registration}
            save={this.saveGuests}
          />
        )
        break

      case 'review':
        content = (
          <Review
            visitor={this.state.visitor}
            registration={this.state.registration}
            session={session}
            goBack={stage => this.setState({stage})}
            totalCost={this.totalCost}
          />
        )
        break

      case 'complete':
        content = (
          <Complete
            registration={this.state.registration}
            signupAllowed={this.state.signupAllowed}
          />
        )
    }
    let sessionChange = null
    if (
      this.props.onsite === false &&
      this.state.registration.id > 0 &&
      (this.state.stage === 'review' || this.state.stage === 'tickets')
    ) {
      sessionChange = (
        <div>
          <SessionChange
            registrationId={this.state.registration.id}
            completed={this.state.registration.completed}
            changeSession={this.changeSession}
          />
          <hr />
        </div>
      )
    }
    return (
      <div>
        {sessionChange}
        <div className="mb-3">{content}</div>
      </div>
    )
  }
}

SessionSignup.propTypes = {
  session: PropTypes.object,
  studentId: PropTypes.number,
  visitorId: PropTypes.number,
  onsite: PropTypes.bool,
  registrationId: PropTypes.number
}

ReactDOM.render(
  <SessionSignup
    session={session}
    studentId={studentId}
    onsite={onsite}
    registrationId={registrationId}
  />,
  document.getElementById('SessionSignup')
)
