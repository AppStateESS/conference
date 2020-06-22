'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import Listing from '@essappstate/canopy-listing'
import VisitorForm from './VisitorForm'

/* global $ */

class Visitor extends Listing {
  constructor(props) {
    super(props)
    this.restUrl = 'conference/Admin/Visitor'
    this.label = 'Visitor'
    this.defaultResource = {
      id: 0,
      password: '',
      email: '',
      lastName: '',
      firstName: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      activated: 0,
    }

    const dropdown = (key) => {
      const visitorId = this.state.listing[key].id
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
              href={`./conference/Admin/Visitor/loginAs?visitorId=${visitorId}`}>
              <i className="fas fa-user" />
              &nbsp;Sign in as user
            </a>
            <a
              className="dropdown-item pointer"
              href={`./conference/Admin/Registration/visitor?visitorId=${visitorId}`}>
              <i className="fas fa-book" />
              &nbsp;History
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
          return dropdown(key)
        },
        style: {
          width: '10%',
        },
      },
      {
        column: 'activated',
        label: 'Activated',
        callback: (row, key) => {
          return row.activated === 1 ? (
            'Yes'
          ) : (
            <button
              type="button"
              className="btn btn-sm btn-outline-danger"
              onClick={() => {
                this.activate(row, key)
              }}>
              No
            </button>
          )
        },
      },
      {
        column: 'email',
        label: 'Email/Username',
        sort: true,
        callback: (row) => {
          return <a href={`mailto:${row.email}`}>{row.email}</a>
        },
      },
      {
        column: 'lastName',
        label: 'Last name',
        sort: true,
      },
      {
        column: 'firstName',
        label: 'First name',
      },
    ]

    this.state.resource = Object.assign({}, this.defaultResource)
    this.state.limit = 10
  }

  navbarButton() {
    return null
  }

  loadResource(key, callback = null) {
    super.loadResource(key, () => {
      const {resource} = this.state
      resource.password = ''
      this.setState({resource})
    })
  }

  deleteResource(key, e) {
    e.preventDefault()
    if (
      prompt(
        'Are you sure you want to delete this visitor along with their registrations and payments?\nType DELETE if so.'
      ) === 'DELETE'
    ) {
      this.sendDelete(key)
    }
  }

  activate(row, key) {
    if (confirm(`Do you want to activate this user's account?`)) {
      $.ajax({
        url: `conference/Admin/Visitor/${row.id}/activate`,
        dataType: 'json',
        type: 'patch',
        success: () => {
          const {listing} = this.state
          listing[key].activated = 1
          this.setState({listing})
        },
        error: () => {},
      })
    }
  }

  overlay() {
    return {
      content: <div className="visitor-form">{this.form()}</div>,
      width: '80%',
      title: 'Edit visitor',
      close: () => {
        this.setState({resource: Object.assign({}, this.defaultResource)})
        this.load()
      },
    }
  }

  form() {
    return (
      <VisitorForm
        update={this.update}
        resource={this.state.resource}
        save={this.save}
      />
    )
  }

  title() {
    return <h2>Visitors</h2>
  }
}

Visitor.propTypes = {}

ReactDOM.render(<Visitor />, document.getElementById('Visitor'))
