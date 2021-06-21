'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import Listing from '@essappstate/canopy-listing'
import HideStudent from './HideStudent'
import RevealStudent from './RevealStudent'
import DiscountStudent from './DiscountStudent'
import ChangeDate from './ChangeDate'
import dayjs from 'dayjs'
import Create from './Create'
import {NavbarButton} from '@essappstate/react-navbar'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFileImport, faLock, faUnlock} from '@fortawesome/free-solid-svg-icons'

/* global $ */

let sessionListing = []

$.ajax({
  url: 'conference/Admin/Session/upcoming',
  data: {},
  dataType: 'json',
  type: 'get',
  success: (response) => {
    sessionListing = response.listing
    sessionListing.forEach((row, index) => {
      const date = new Date(row.eventDate * 1000)
      sessionListing[index]['formatDate'] = date.toDateString()
    })
  },
  error: () => {},
})

export default class Student extends Listing {
  constructor(props) {
    super(props)
    this.restUrl = 'conference/Admin/Student'
    this.label = 'Student'

    this.defaultResource = {
      id: 0,
      bannerId: '',
      username: '',
      firstName: '',
      lastName: '',
      hidden: 0,
      startDate: 0,
      discountAmount: 0.0,
      discountLabel: '',
    }

    this.hideStudent = this.hideStudent.bind(this)
    this.revealStudent = this.revealStudent.bind(this)
    this.finishOverlay = this.finishOverlay.bind(this)
    this.changeDiscount = this.changeDiscount.bind(this)
    this.changeStartDate = this.changeStartDate.bind(this)
    this.discountOverlay = this.discountOverlay.bind(this)
    this.startDateOverlay = this.startDateOverlay.bind(this)

    this.columns = [
      {column: 'bannerId', label: 'Banner ID'},
      {column: 'firstName', label: 'First'},
      {column: 'lastName', label: 'Last', sort: true},
      {column: 'username', label: 'Username', sort: true},
      {
        column: 'protected',
        label: 'Hidden',
        callback: (row, key) => {
          if (row.hidden == 0) {
            return (
              <button
                className="btn btn-success btn-sm"
                onClick={this.hideStudent.bind(this, key)}>
                Accessible
              </button>
            )
          } else {
            return (
              <button
                className="btn btn-danger btn-sm"
                onClick={this.revealStudent.bind(this, key)}>
                Hidden
              </button>
            )
          }
        },
      },
      {
        column: 'discount',
        label: 'Discount',
        callback: (row, key) => {
          return (
            <button
              className="btn btn-outline-dark btn-sm"
              onClick={this.changeDiscount.bind(this, key)}>
              ${row.discountAmount}
            </button>
          )
        },
      },
      {
        column: 'startDate',
        label: 'Start Date',
        sort: true,
        callback: (row, key) => {
          let locked = (
            <button
              onClick={this.changeStartDate.bind(this, key)}
              className="btn btn-link">
              <FontAwesomeIcon icon={faUnlock} className="text-success" />
            </button>
          )
          if (row.lockDate === 1) {
            locked = (
              <button
                className="btn btn-link"
                onClick={() => {
                  this.unlockDate(row.id)
                }}>
                <FontAwesomeIcon icon={faLock} className="text-danger" />
              </button>
            )
          }
          return (
            <div>
              {dayjs(row.startDate * 1000).format('YYYY-MM-DD')} {locked}
            </div>
          )
        },
      },
    ]
  }

  finishOverlay() {
    this.overlayOff()
    this.load()
  }

  changeDiscount(key) {
    this.loadResource(key)
    this.setState({overlay: true, overlayType: 'discount'})
  }

  changeStartDate(key) {
    this.loadResource(key)
    this.setState({overlay: true, overlayType: 'startDate'})
  }

  hideStudent(key) {
    this.loadResource(key)
    this.setState({overlay: true, overlayType: 'hide'})
  }
  revealStudent(key) {
    this.loadResource(key)
    this.setState({overlay: true, overlayType: 'reveal'})
  }

  title() {
    return <h2>Students</h2>
  }

  unlockDate(id) {
    $.ajax({
      url: `conference/Admin/Student/${id}/unlockDate`,
      data: {},
      dataType: 'json',
      type: 'patch',
      success: () => {
        this.load()
      },
      error: () => {},
    })
  }

  hideOverlay() {
    return {
      width: '500px',
      content: (
        <HideStudent
          studentId={this.state.resource.id}
          saved={() => {
            this.overlayOff()
            this.load()
          }}
          close={this.overlayOff}
        />
      ),
      title: 'Hide student',
      close: this.finishOverlay,
    }
  }

  discountOverlay() {
    return {
      width: '400px',
      content: (
        <DiscountStudent
          student={this.state.resource}
          saved={() => {
            this.overlayOff()
            this.load()
          }}
          close={this.overlayOff}
        />
      ),
      title: 'Discount student',
      close: this.finishOverlay,
    }
  }

  startDateOverlay() {
    return {
      content: (
        <div className="student-form">
          <ChangeDate
            sessionListing={sessionListing}
            close={this.overlayOff}
            student={this.state.resource}
            saved={() => {
              this.overlayOff()
              this.load()
            }}
          />
        </div>
      ),
      title: 'Lock start date',
      close: this.load,
    }
  }

  importOverlay() {
    return {
      content: (
        <div className="student-form">
          <Create close={this.overlayOff} />
        </div>
      ),
      title: 'Import students',
      width: '100%',
      close: this.load,
    }
  }

  revealOverlay() {
    return {
      width: '500px',
      content: (
        <RevealStudent
          studentId={this.state.resource.id}
          saved={() => {
            this.overlayOff()
            this.load()
          }}
          close={this.overlayOff}
        />
      ),
      title: 'Reveal student',
      close: this.finishOverlay,
    }
  }

  navbarButton() {
    const label = (
      <span>
        <FontAwesomeIcon icon={faFileImport} />
        &nbsp;Import
      </span>
    )
    const button = (
      <NavbarButton color="success" label={label} handleClick={this.create} />
    )
    return button
  }

  overlay() {
    switch (this.state.overlayType) {
      case 'form':
        return this.importOverlay()

      case 'hide':
        return this.hideOverlay()

      case 'reveal':
        return this.revealOverlay()

      case 'discount':
        return this.discountOverlay()

      case 'startDate':
        return this.startDateOverlay()
    }
  }
}

ReactDOM.render(<Student />, document.getElementById('Student'))
