'use strict'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ConferenceQuestion from './ConferenceQuestion'
import Editor from '../Shared/Editor'

class ConferenceForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titleError: false
    }

    this.titleRef = React.createRef()

    this.services = this.services.bind(this)
    this.checkTitle = this.checkTitle.bind(this)
    this.clearCheck = this.clearCheck.bind(this)
    this.disableSave = this.disableSave.bind(this)
  }

  componentDidMount() {
    this.titleRef.current.focus()
  }

  services() {
    if (this.props.services.length === 0) {
      return
    }
    let serviceList = this.props.services.map((value, key) => {
      return (
        <option key={key} value={value.id}>
          {value.title}
        </option>
      )
    })
    return serviceList
  }

  checkTitle() {
    this.setState({
      titleError: this.props.resource.title.length === 0
    })
  }

  clearCheck() {
    this.setState({titleError: false})
  }

  disableSave() {
    const {resource} = this.props
    return resource.title.length === 0
  }

  render() {
    const {
      update,
      locations,
      resource,
      save,
      addInfo,
      updateInfo,
      dropInfo,
      conferenceQuestion
    } = this.props
    const disableSave = this.disableSave()
    const titleClass = this.state.titleError
      ? 'form-control border-danger'
      : 'form-control'

    let locationListing
    if (locations !== null) {
      locationListing = locations.map((value, key) => {
        return (
          <option key={key} value={value.id}>
            {value.title}
          </option>
        )
      })
    }
    return (
      <div className="p-3">
        <div className="mb-4">
          <label className="d-block">
            Title:<span className="text-danger">*</span>
          </label>
          <input
            name="title"
            type="text"
            id="conference-title"
            placeholder={
              this.state.titleError ? 'Title may not be empty.' : null
            }
            value={resource.title}
            onBlur={this.checkTitle}
            onFocus={this.clearCheck}
            ref={this.titleRef}
            onChange={update.bind(null, 'title')}
            className={titleClass}
          />
        </div>
        <div className="mb-4">
          <label className="d-block">Description:</label>
          <Editor
            ident={toString(resource.id)}
            content={resource.description}
            update={update.bind(null, 'description')}
          />
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="mb-4">
              <label>Default location:</label>
              <select
                onChange={update.bind(null, 'locationId')}
                value={resource.locationId}
                className="form-control">
                <option value="0" disabled={true}>
                  Choose a location below...
                </option>
                {locationListing}
              </select>
            </div>
          </div>
          <div className="col-sm-6">
            <label>Payment service:</label>
            <select
              name="accountId"
              id="accountId"
              onChange={update.bind(null, 'accountId')}
              className="form-control"
              value={resource.accountId}>
              <option value="0">Do not use a payment service</option>
              {this.services()}
            </select>
          </div>
        </div>
        <div className="d-flex justify-content-start mb-4">
          <h4>Extra Visitor information</h4>
          <button className="ml-4 btn btn-success btn-sm" onClick={addInfo}>
            <i className="fas fa-plus" /> Add question
          </button>
        </div>
        <div className="mb-4">
          <ConferenceQuestion
            conferenceQuestion={conferenceQuestion}
            dropInfo={dropInfo}
            updateInfo={updateInfo}
          />
        </div>
        <div className="text-center">
          <button
            className="btn btn-primary"
            disabled={disableSave}
            onClick={save}>
            <i className="fas fa-save" /> Save
          </button>
        </div>
      </div>
    )
  }
}

ConferenceForm.propTypes = {
  resource: PropTypes.object,
  update: PropTypes.func,
  locations: PropTypes.array,
  dropInfo: PropTypes.func,
  services: PropTypes.array,
  save: PropTypes.func,
  addInfo: PropTypes.func,
  updateInfo: PropTypes.func,
  conferenceQuestion: PropTypes.array
}

export default ConferenceForm
