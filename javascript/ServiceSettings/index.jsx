'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import Listing from '@essappstate/canopy-listing'
import SystemService from './SystemService'
import BigCheckbox from '@essappstate/canopy-react-bigcheckbox'
import {NavbarButton} from '@essappstate/react-navbar'
import './service.css'

/* global $, service, success, cancel */

class ServiceSettings extends Listing {
  constructor(props) {
    super(props)
    this.restUrl = 'conference/Admin/Account/'
    this.label = 'Service account'
    this.defaultResource = {
      id: 0,
      title: '',
      url: '',
      accountId: '',
      validateSend: '',
      validateSendActive: 0,
      validateResponse: '',
      validateResponseActive: 0,
      restrictIp: ''
    }

    this.serviceVariables = null
    this.successRef = React.createRef()
    this.cancelRef = React.createRef()

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
        column: 'accountId',
        label: 'Account id',
        sort: true
      },
      {
        column: 'validateSendActive',
        label: 'Validate send',
        callback: row => {
          return row.validateSendActive === 1 ? 'Yes' : 'No'
        }
      },
      {
        column: 'validateResponseActive',
        label: 'Validate response',
        callback: (row, key) => {
          return row.validateResponseActive === 1 ? 'Yes' : 'No'
        }
      }
    ]
    this.state.serviceInfo = {}
    this.state.resource = Object.assign({}, this.defaultResource)
    this.updateFile = this.updateFile.bind(this)
    this.copySuccess = this.copySuccess.bind(this)
    this.copyCancel = this.copyCancel.bind(this)
    this.viewVariables = this.viewVariables.bind(this)
  }

  reset() {
    super.reset()
    this.state.serviceInfo = {}
  }

  updateCheck(param, value) {
    super.update(param, value ? 1 : 0)
  }

  viewVariables(event) {
    event.preventDefault()
    if (this.serviceVariables === null) {
      $.ajax({
        url: `conference/Admin/Service/serviceVariables`,
        dataType: 'json',
        type: 'get',
        success: data => {
          this.serviceVariables = data.serviceVariables
          this.overlayOn('serviceVariables')
        },
        error: () => {}
      })
    } else {
      this.overlayOn('serviceVariables')
    }
  }

  copySuccess() {
    this.successRef.current.focus()
    this.successRef.current.select()
    document.execCommand('copy')
  }

  copyCancel() {
    this.cancelRef.current.focus()
    this.cancelRef.current.select()
    document.execCommand('copy')
  }

  updateFile(e) {
    const serviceName = e.target.value
    this.update('serviceName', serviceName)
    $.ajax({
      url: 'conference/Admin/Service/info',
      data: {serviceName},
      dataType: 'json',
      type: 'get',
      success: data => {
        if (this.state.resource.title.length === 0) {
          this.update('title', data.serviceInfo.title)
        }
        this.setState({serviceInfo: data.serviceInfo})
      },
      error: () => {}
    })
  }

  save() {
    if (this.state.resource.accountId.length === 0) {
      return
    }
    super.save()
  }

  form() {
    return (
      <div className="container">
        <h3>Service Account Set up</h3>
        <div className="row">
          <div className="col-sm-4">
            <div className="form-group mt-3">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                type="text"
                className="form-control"
                name="title"
                value={this.state.resource.title}
                onChange={this.update.bind(null, 'title')}
              />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form-group mt-3">
              <label htmlFor="url">Service URL</label>
              <input
                id="url"
                type="text"
                className="form-control"
                name="url"
                value={this.state.resource.url}
                onChange={this.update.bind(null, 'url')}
              />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="form-group mt-3">
              <label htmlFor="accountId">Account ID</label>
              <input
                id="accountId"
                type="text"
                className="form-control"
                name="accountId"
                value={this.state.resource.accountId}
                onChange={this.update.bind(null, 'accountId')}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-5">
            <div className="form-group mt-3">
              <BigCheckbox
                label="Send validation code"
                checked={this.state.resource.validateSendActive === 1}
                handle={this.updateCheck.bind(this, 'validateSendActive')}
              />
              <input
                id="validateSend"
                type="text"
                className="form-control"
                placeholder="Enter post validation key"
                name="validateSend"
                value={this.state.resource.validateSend}
                onChange={this.update.bind(null, 'validateSend')}
              />
            </div>
          </div>
          <div className="col-sm-1"></div>
          <div className="col-sm-5">
            <div className="form-group mt-3">
              <BigCheckbox
                label="Validate service response"
                checked={this.state.resource.validateResponseActive === 1}
                handle={this.updateCheck.bind(this, 'validateResponseActive')}
              />
              <input
                id="validateResponse"
                type="text"
                className="form-control"
                name="validateResponse"
                placeholder="Enter response validation key"
                value={this.state.resource.validateResponse}
                onChange={this.update.bind(null, 'validateResponse')}
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn-success" onClick={this.save}>
            Save
          </button>
        </div>
      </div>
    )
  }

  serviceVariablesFormat() {
    let sendRows = []
    for (let key in this.serviceVariables.send) {
      sendRows.push(
        <tr key={key}>
          <td>{key}</td>
          <td>{this.serviceVariables.send[key]}</td>
        </tr>
      )
    }
    let responseRows = []
    for (let key in this.serviceVariables.response) {
      responseRows.push(
        <tr key={key}>
          <td>{key}</td>
          <td>{this.serviceVariables.response[key]}</td>
        </tr>
      )
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h4>Send</h4>
            <table className="table table-striped">
              <tbody>
                <tr>
                  <th>Variable name</th>
                  <th>Service name</th>
                </tr>
                {sendRows}
              </tbody>
            </table>
          </div>
          <div className="col-sm-6">
            <h4>Response</h4>
            <table className="table table-striped">
              <tbody>
                <tr>
                  <th>Variable name</th>
                  <th>Service name</th>
                </tr>
                {responseRows}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }

  title() {
    return (
      <div>
        <h3>Services</h3>
        <SystemService service={this.props.service} />
      </div>
    )
  }

  navLeft() {
    const varButton = (
      <NavbarButton
        color="info"
        label={
          <span>
            <i className="fas fa-list-alt" />
            &nbsp;Variables
          </span>
        }
        handleClick={this.viewVariables}
      />
    )
    const leftSide = super.navLeft()
    leftSide.push(varButton)
    return leftSide
  }

  overlay() {
    if (this.state.overlayType === 'form') {
      return {
        content: <div className="service-form">{this.form()}</div>,
        title: this.state.resource.id > 0 ? 'Update Service' : 'Create Service',
        close: this.load
      }
    } else if (this.state.overlayType === 'serviceVariables') {
      return {
        content: (
          <div className="service-info">{this.serviceVariablesFormat()}</div>
        ),
        width: '90%',
        title: 'Service info'
      }
    } else {
      const {success, cancel} = this.props
      const content = (
        <div>
          <p>Copy and paste the links below into your payment provider:</p>
          <label>Success:</label>
          <div className="input-group mb-3">
            <input
              className="form-control"
              ref={this.successRef}
              type="text"
              readOnly={true}
              value={`https://${success}`}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-dark"
                type="button"
                onClick={this.copySuccess}
                id="button-addon2">
                <i className="fas fa-clipboard"></i>
              </button>
            </div>
          </div>
          <label>Cancel/Failure:</label>
          <div className="input-group mb-3">
            <input
              ref={this.cancelRef}
              className="form-control"
              readOnly={true}
              type="text"
              value={`https://${cancel}`}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-dark"
                type="button"
                onClick={this.copyCancel}
                id="button-addon2">
                <i className="fas fa-clipboard"></i>
              </button>
            </div>
          </div>
        </div>
      )
      return {content, close: this.load, width: '60%'}
    }
  }
}

ReactDOM.render(
  <ServiceSettings service={service} success={success} cancel={cancel} />,
  document.getElementById('ServiceSettings')
)
