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
import {
  faFileImport,
  faLock,
  faUnlock,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'

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
    this.state.studentRegistrations = <div>Loading...</div>

    this.columns = [
      {
        column: 'id',
        label: 'Reg.',
        callback: (row, key) => {
          return (
            <button
              className="btn btn-sm btn-outline-dark"
              onClick={() => {
                this.showRegistrations(key)
              }}
              type="button">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          )
        },
      },
      {column: 'id', label: 'Key ID'},
      {column: 'bannerId', label: 'Banner ID'},
      {
        column: 'lastName',
        label: 'Last Name, First',
        sort: true,
        callback: (e) => {
          return `${e.lastName}, ${e.firstName}`
        },
      },
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

  loadRegistrations(studentId) {
    $.ajax({
      url: `conference/Admin/Registration/student/?studentId=${studentId}`,
      data: {},
      dataType: 'json',
      type: 'get',
      success: (response) => {
        let content
        if (response.listing.length === 0) {
          content = (
            <p>This student does not have any associated registrations.</p>
          )
        } else {
          content = response.listing.map((value) => {
            return (
              <li key={`registration-${value.id}`}>
                <a
                  href={`./conference/Admin/Payment/?registrationId=${value.id}`}>
                  {value.firstName} {value.lastName} ({value.email})
                </a>
              </li>
            )
          })
          content = <ul>{content}</ul>
        }
        this.setState({studentRegistrations: content})
      },
      error: () => {},
    })
  }

  showRegistrations(key) {
    this.loadRegistrations(this.state.listing[key].id)
    this.setState({overlay: true, overlayType: 'showReg'})
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

  showReg() {
    return {
      content: <div>{this.state.studentRegistrations}</div>,
      width: '60%',
      title: 'View registrations',
      close: () => {
        this.setState({studentRegistrations: <div>Loading...</div>})
        this.overlayOff()
      },
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

      case 'showReg':
        return this.showReg()

      case 'discount':
        return this.discountOverlay()

      case 'startDate':
        return this.startDateOverlay()
    }
  }
}

ReactDOM.render(<Student />, document.getElementById('Student'))
