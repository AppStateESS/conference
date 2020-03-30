'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import Listing from '@essappstate/canopy-listing'
import LocationForm from './LocationForm'

class Location extends Listing {
  constructor(props) {
    super(props)
    this.defaultResource = {
      id: '0',
      title: '',
      description: '',
      directions: '',
      url: '',
      image: ''
    }
    this.restUrl = 'conference/Admin/Location'
    this.label = 'Location'

    const dropdown = key => {
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
          width: '10%'
        }
      },
      {
        column: 'title',
        label: 'Title',
        sort: true
      },
      {
        column: 'url',
        label: 'Url',
        callback: row => {
          if (row.url.length > 0) {
            return (
              <a href={row.url} target="_blank" rel="noopener noreferrer">
                {row.url}
              </a>
            )
          } else {
            return <em>None</em>
          }
        }
      }
    ]
    this.state.resource = Object.assign({}, this.defaultResource)
  }

  overlay() {
    return {
      content: (
        <div className="location-form">{this.form(this.state.overlay)}</div>
      ),
      title: this.state.resource.id > 0 ? 'Update location' : 'Create location',
      width: '80%',
      close: this.load
    }
  }

  form(overlay) {
    if (!overlay) {
      return <div></div>
    } else {
      return (
        <LocationForm
          resource={this.state.resource}
          update={this.update}
          save={this.save}
          close={this.finish}
        />
      )
    }
  }

  title() {
    return <h2>Locations</h2>
  }
}

ReactDOM.render(<Location />, document.getElementById('Location'))
