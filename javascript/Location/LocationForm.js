'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import Editor from '../Shared/Editor'

class LocationForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      titleError: false,
    }
  }

  updateUrl(e) {
    let url = e.target.value
    url = url.replace(/^https?:\/\//, '')
    this.props.update('url', url)
  }

  checkTitle() {
    this.setState({titleError: this.props.resource.title.length === 0})
  }

  render() {
    const {update, resource, save} = this.props
    const titleClass = this.state.titleError
      ? 'form-control border-danger'
      : 'form-control'
    return (
      <div className="p-3">
        <div className="mb-4">
          <label className="d-block">
            Title:<span className="text-danger">*</span>
          </label>
          <input
            name="title"
            type="text"
            id="location-title"
            placeholder={
              this.state.titleError ? 'Title may not be empty.' : null
            }
            value={resource.title}
            onBlur={() => this.checkTitle()}
            onFocus={this.clearCheck}
            onChange={update.bind(null, 'title')}
            className={titleClass}
          />
        </div>
        <div className="mb-4">
          <label className="d-block">Description:</label>
          <Editor
            content={resource.description}
            update={update.bind(null, 'description')}
          />
        </div>
        <div className="mb-4">
          <label className="d-block">Directions:</label>
          <Editor
            content={resource.directions}
            update={update.bind(null, 'directions')}
          />
        </div>
        <div className="mb-4">
          <label className="d-block">Link to venue page:</label>
          <input
            name="url"
            type="text"
            placeholder="http://location.address.com"
            id="location-url"
            value={resource.url}
            onChange={update.bind(null, 'url')}
            className="form-control"
          />
        </div>
        <button
          className="btn btn-success"
          onClick={save}
          disabled={resource.title.length === 0}>
          Save
        </button>
      </div>
    )
  }
}

LocationForm.propTypes = {
  update: PropTypes.func,
  resource: PropTypes.object,
  save: PropTypes.func,
  close: PropTypes.func,
}

export default LocationForm
