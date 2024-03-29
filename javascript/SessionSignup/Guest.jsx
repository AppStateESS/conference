'use strict'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import GuestForm from './GuestForm'

export default class Guest extends Component {
  constructor(props) {
    super(props)
    this.update = this.update.bind(this)
    this.save = this.save.bind(this)
  }

  save() {
    if (this.isComplete()) {
      this.props.save()
    }
  }

  isComplete() {
    let allComplete = true
    this.props.guests.forEach((element) => {
      if (element.complete == false) {
        allComplete = false
      }
    })
    return allComplete
  }

  update(count, property, event) {
    let value
    if (typeof event === 'object') {
      value = event.target.value
    } else {
      value = event
    }
    this.props.update(count, property, value)
  }

  render() {
    const guestCount = parseInt(this.props.registration.guestCount)
    let guestList = []
    for (let i = 0; i < guestCount; i++) {
      guestList.push(
        <GuestForm
          key={i}
          count={i}
          completeStatus={this.completeStatus}
          guest={this.props.guests[i]}
          update={this.update}
        />
      )
    }
    return (
      <div>
        <h4>Please enter guest information below.</h4>
        <p>List only people accompanying you to the orientation.</p>
        {guestList}
        <div className="mt-2 text-center">
          <p>
            <button
              className="btn btn-primary"
              disabled={!this.isComplete()}
              onClick={this.save}>
              Save guests and continue
            </button>
          </p>
          <p>
            <button className="btn btn-danger" onClick={this.props.goBack}>
              Cancel guest entry
            </button>
          </p>
        </div>
      </div>
    )
  }
}

Guest.propTypes = {
  registration: PropTypes.object,
  update: PropTypes.func,
  guests: PropTypes.array,
  save: PropTypes.func,
  error: PropTypes.func,
  goBack: PropTypes.func,
}
