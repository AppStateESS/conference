'use strict'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import TimeSelect from './TimeSelect'
import InputField from '@essappstate/canopy-react-inputfield'
import BigCheckbox from '@essappstate/canopy-react-bigcheckbox'
import Dollarize from '../Shared/Dollarize'
import dayjs from 'dayjs'

class SessionForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: {
        title: null,
        eventDate: null,
        startTime: null,
        signupDate: null,
      },
      errorFound: false,
    }
    this.titleRef = React.createRef()
    this.numberChange = this.numberChange.bind(this)
    this.check = this.check.bind(this)
    this.setDate = this.setDate.bind(this)
    this.mealService = this.mealService.bind(this)
    this.checkSave = this.checkSave.bind(this)
    this.checkBeforeSave = this.checkBeforeSave.bind(this)
    this.copySessionDate = this.copySessionDate.bind(this)
    this.signupNow = this.signupNow.bind(this)
    this.allowGuest = this.allowGuest.bind(this)
  }

  componentDidMount() {
    this.titleRef.current.focus()
  }

  setDate(varname, date) {
    this.props.update(varname, date.getTime() / 1000)
    this.check()
  }

  allowGuest(value) {
    this.props.update('allowGuest', value ? 1 : 0)
  }

  copySessionDate() {
    const eventDate = dayjs(this.props.resource.eventDate * 1000)
      .set('hour', 12)
      .unix()
    this.props.update('signupEnd', eventDate)
    this.check()
  }

  dollarize(input) {
    return <Dollarize key="1">{input}</Dollarize>
  }

  locationSelect(locationId) {
    const options = this.props.locations.map((value, key) => {
      return (
        <option key={key} value={value.id}>
          {value.title}
        </option>
      )
    })
    return (
      <select
        className="form-control"
        value={locationId}
        onChange={this.props.update.bind(this, 'locationId')}>
        {options}
      </select>
    )
  }

  numberChange(varname, e) {
    let value = e.target.value.replace(/[^\d\.]/g, '')
    if (value === '') {
      value = '0'
    }
    this.props.update(varname, value)
  }

  check() {
    let errorFound = false
    const errors = {
      title: null,
      eventDate: null,
      startTime: null,
      signupDate: null,
    }
    const {
      title,
      eventDate,
      startTime,
      endTime,
      signupStart,
      signupEnd,
    } = this.props.resource
    if (title.length === 0) {
      errors.title = 'Title may not be empty'
      errorFound = true
    }

    if (startTime >= endTime) {
      errors.startTime = 'Session start time must be prior to end time'
      errorFound = true
    }
    if (signupStart >= signupEnd) {
      errors.signupDate = 'Sign up start date must be prior to end time'
      errorFound = true
    }

    const eventDateObj = new Date(eventDate * 1000)
    const lateNight = new Date(
      eventDateObj.getFullYear(),
      eventDateObj.getMonth(),
      eventDateObj.getDate(),
      23,
      59,
      59
    )
    const lateNightUnix = lateNight.getTime() / 1000

    if (lateNightUnix < signupStart) {
      errors.eventDate = 'Session date must be after sign up date.'
      errorFound = true
    }

    if (lateNightUnix < signupEnd) {
      errors.signupDate =
        'Sign up end date must be before or equal to session date.'
      errorFound = true
    }

    this.setState({errorFound, errors})
    return !errorFound
  }

  checkSave(varname, value) {
    this.props.update(varname, value)
    this.check(varname)
  }

  checkBeforeSave() {
    if (this.check()) {
      if (parseInt(this.props.resource.registrationCount) > 0) {
        if (
          confirm(
            'If you made price changes, current registrations will have incorrect prices. Are you sure you want to update this session?'
          )
        ) {
          this.props.save()
        }
      } else {
        this.props.save()
      }
    }
  }

  clearError(varname) {
    const {errors} = this.state
    errors[varname] = null
    this.setState({errors})
  }

  mealService(value) {
    this.props.update('mealService', value ? 1 : 0)
  }

  signupNow() {
    this.props.update('signupStart', Math.round(Date.now() / 1000))
    this.check()
  }

  mealMessage() {
    const session = this.props.resource

    if (session.mealService === 0) {
      return
    } else {
      let message
      if (parseInt(session.mealCost) === 0) {
        if (session.mealIncluded) {
          message =
            'No meal cost but included indicates a meal is provided to the registered only'
        } else {
          message = 'No meal cost, not included gives no message to the visitor'
        }
      } else {
        if (session.mealIncluded) {
          message =
            'Meal cost and included indicates a meal is provided to registered and extra tickets can be bought'
        } else {
          message =
            'Meal cost and not included shows the price of meal tickets but does not mention inclusion'
        }
      }
      return <div className="small bg-light mb-2">{message}</div>
    }
  }

  render() {
    const {
      title,
      notes,
      eventDate,
      signupStart,
      signupEnd,
      registerCost,
      guestCost,
      mealIncluded,
      mealCost,
      softCap,
      attendanceCap,
      locationId,
      days,
      mealService,
      allowGuest,
      registrationCount,
    } = this.props.resource
    const startTime = parseInt(this.props.resource.startTime)
    const endTime = parseInt(this.props.resource.endTime)

    const {update} = this.props
    let eventDateObject
    if (eventDate) {
      eventDateObject = new Date(eventDate * 1000)
    } else {
      eventDateObject = new Date()
    }
    let signupStartObject
    if (signupStart) {
      signupStartObject = new Date(signupStart * 1000)
    } else {
      signupStartObject = new Date()
    }

    let signupEndObject
    if (signupStart) {
      signupEndObject = new Date(signupEnd * 1000)
    } else {
      signupEndObject = new Date()
    }

    const {errors} = this.state
    let startTimeError
    if (errors.startTime) {
      startTimeError = (
        <div className="badge badge-danger">{errors.startTime}</div>
      )
    }

    let signupDateError
    if (errors.signupDate) {
      signupDateError = (
        <div className="badge badge-danger">{errors.signupDate}</div>
      )
    }

    let eventDateError
    if (errors.eventDate) {
      eventDateError = (
        <div className="badge badge-danger">{errors.eventDate}</div>
      )
    }

    let copyButton

    if (
      dayjs(signupEnd * 1000).format('YYYYMMDD') !==
      dayjs(eventDate * 1000).format('YYYYMMDD')
    ) {
      copyButton = (
        <button className="btn btn-success" onClick={this.copySessionDate}>
          Copy session date
        </button>
      )
    }

    let warning
    if (parseInt(registrationCount) > 0) {
      warning = (
        <div className="row">
          <div className="col-12 alert alert-warning">
            <strong>Warning</strong>: there are currently registrations for this
            session. Changing prices is not advised.
          </div>
        </div>
      )
    }

    return (
      <div className="container">
        {warning}
        <div className="row">
          <div className="col-sm-6">
            <label>
              Title
              <i className="text-danger fas fa-asterisk fa-xs" />
            </label>
            <input
              type="text"
              name="title"
              ref={this.titleRef}
              className={`form-control ${
                errors.title ? 'border-danger' : null
              }`}
              value={title}
              onFocus={this.clearError.bind(this, 'title')}
              placeholder={errors.title ? errors.title : null}
              onBlur={this.check}
              onChange={update.bind(null, 'title')}
            />
            <label className="mt-3">Location</label>
            {this.locationSelect(locationId)}
            <div className="row mt-3">
              <div className="col-md-8">
                <label>Session date</label>
                <DatePicker
                  selected={eventDateObject}
                  onChange={this.setDate.bind(this, 'eventDate')}
                  className="form-control"
                  dateFormat="MMM d, yyyy"
                />
                {eventDateError}
              </div>
              <div className="col-md-4">
                <label>Session length</label>
                <select
                  className="form-control"
                  value={days}
                  onChange={update.bind(null, 'days')}>
                  <option value="1">1 day</option>
                  <option value="2">2 days</option>
                  <option value="3">3 days</option>
                  <option value="4">4 days</option>
                  <option value="5">5 days</option>
                  <option value="6">6 days</option>
                  <option value="7">7 days</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <label className="mt-3">Start time</label>
                <TimeSelect
                  onChange={this.checkSave.bind(this, 'startTime')}
                  time={startTime}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <label className="mt-3">End time</label>
                <TimeSelect
                  onChange={update.bind(null, 'endTime')}
                  time={endTime}
                />
              </div>
            </div>
            {startTimeError}
            <label className="mt-3">Sign up start</label>
            <DatePicker
              selected={signupStartObject}
              onChange={this.setDate.bind(this, 'signupStart')}
              className="form-control"
              showTimeSelect={true}
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMM d, yyyy h:mm aa"
              timeCaption="time"
            />
            <button className="btn btn-primary" onClick={this.signupNow}>
              Now
            </button>

            <label className="mt-3">Sign up deadline</label>
            <DatePicker
              selected={signupEndObject}
              onChange={this.setDate.bind(this, 'signupEnd')}
              className="form-control"
              showTimeSelect={true}
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMM d, yyyy h:mm aa"
              timeCaption="time"
            />
            {copyButton}
            <div className="w-50">{signupDateError}</div>
          </div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col-md-6">
                <label>Registration cost</label>
                <InputField
                  name="registerCost"
                  wrap={this.dollarize}
                  placeholder="0.00"
                  size="6"
                  maxLength="6"
                  value={registerCost}
                  change={this.numberChange.bind(null, 'registerCost')}
                />
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <BigCheckbox
                    label="Meals served during session"
                    checked={mealService}
                    handle={this.mealService}
                  />
                </div>
                <div
                  className={`card-text ${
                    mealService === 1 ? 'd-block' : 'd-none'
                  }`}>
                  <div className="row">
                    <div className="col-sm-10 ml-auto">
                      {this.mealMessage()}
                      <label>Meal cost</label>
                      <InputField
                        name="mealCost"
                        size="6"
                        placeholder="0.00"
                        maxLength="6"
                        wrap={this.dollarize}
                        value={mealCost}
                        change={this.numberChange.bind(null, 'mealCost')}
                      />
                      <BigCheckbox
                        label="Meal included with registration"
                        checked={mealIncluded}
                        handle={update.bind(null, 'mealIncluded')}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-3">
              <div className="card-body">
                <div className="card-title">
                  <BigCheckbox
                    label="Guest signup allowed"
                    checked={allowGuest}
                    handle={this.allowGuest}
                  />
                </div>
                <div
                  className={`card-text ${
                    allowGuest === 1 ? 'd-block' : 'd-none'
                  }`}>
                  <div className="row">
                    <div className="col-sm-10 ml-auto">
                      <label>Guest cost</label>
                      <InputField
                        name="guestCost"
                        placeholder="0.00"
                        size="6"
                        maxLength="6"
                        wrap={this.dollarize}
                        value={guestCost}
                        change={this.numberChange.bind(null, 'guestCost')}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <label className="mt-3">Attendance cap</label>
                <InputField
                  name="attendanceCap"
                  size="4"
                  maxLength="4"
                  value={attendanceCap}
                  change={update.bind(null, 'attendanceCap')}
                />
              </div>
              <div className="col-sm-6">
                <label className="mt-3">Soft cap</label>
                <InputField
                  name="softCap"
                  size="4"
                  maxLength="4"
                  value={softCap}
                  change={update.bind(null, 'softCap')}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label>Notes</label>
                <textarea
                  name="notes"
                  className="form-control"
                  value={notes}
                  onChange={update.bind(null, 'notes')}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            className="btn btn-primary mr-4"
            onClick={this.checkBeforeSave}
            disabled={this.state.errorFound}>
            Save session
          </button>
          <button className="btn btn-danger" onClick={this.props.close}>
            Close
          </button>
        </div>
      </div>
    )
  }
}
SessionForm.propTypes = {
  resource: PropTypes.object,
  update: PropTypes.func,
  locations: PropTypes.array,
  conference: PropTypes.object,
  save: PropTypes.func,
  close: PropTypes.func,
}
export default SessionForm
