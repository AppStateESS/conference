'use strict'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import GuestForm from '../SessionSignup/GuestForm'

export default class GuestListing extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.missingInfo = this.missingInfo.bind(this)
  }

  missingInfo() {
    for (let i = 0; i < this.props.count; i++) {
      const guest = this.props.guests[i]
      if (
        guest.email.length === 0 ||
        guest.firstName.length === 0 ||
        guest.lastName.length === 0 ||
        guest.email.match(/^[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/) === null
      ) {
        return true
      }
    }
    return false
  }

  render() {
    const listing = []
    for (let i = 0; i < this.props.count; i++) {
      const value = this.props.guests[i]
      listing.push(
        <GuestForm key={i} guest={value} count={i} update={this.props.update} />
      )
    }

    const disabled = this.missingInfo()
    return (
      <div>
        <h3>Please fill out information on your new guests.</h3>
        <div>{listing}</div>
        <div className="text-center">
          <div className="mb-2">
            <button
              className="btn btn-primary"
              disabled={disabled}
              onClick={this.props.saveGuests}>
              {disabled ? 'Complete the above to continue' : 'Save guests'}
            </button>
          </div>
          <div>
            <button className="btn btn-info" onClick={this.props.goBack}>
              Go back
            </button>
          </div>
        </div>
      </div>
    )
  }
}

GuestListing.propTypes = {
  guests: PropTypes.array,
  update: PropTypes.func,
  saveGuests: PropTypes.func,
  count: PropTypes.number,
  goBack: PropTypes.func
}
