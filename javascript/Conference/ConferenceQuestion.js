'use strict'
import React from 'react'
import PropTypes from 'prop-types'

const ConferenceQuestion = ({conferenceQuestion, updateInfo, dropInfo}) => {
  const updateQuestion = (key, e) => {
    updateInfo(e.target.value, 'question', key)
  }

  const updateType = (type, key) => {
    if (type === 'checkbox') {
      updateInfo('0', 'required', key)
    }
    updateInfo(type, 'type', key)
  }

  const updateRequired = (required, key) => {
    updateInfo(required === 1 ? 0 : 1, 'required', key)
  }

  let extraList
  if (conferenceQuestion && conferenceQuestion.length > 0) {
    extraList = conferenceQuestion.map((info, key) => (
      <div key={key} className="col-sm-6">
        <div className="card border-primary mb-3">
          <div className="card-body">
            <button
              className="btn btn-sm btn-outline-danger float-right mb-3"
              onClick={dropInfo.bind(null, key)}>
              Delete
            </button>
            <label>Question {info.sort}</label>
            <input
              type="text"
              className="form-control mb-3"
              name="question"
              value={info.question}
              onChange={updateQuestion.bind(this, key)}
            />
            <label>
              <input
                type="radio"
                name={`type${key}`}
                checked={info.type === 'text'}
                onChange={updateType.bind(this, 'text', key)}
              />
              &#32; Text field
            </label>
            <div className="ml-3">
              <label>
                <input
                  type="checkbox"
                  name={`required${key}`}
                  checked={info.required === 1}
                  onChange={updateRequired.bind(this, info.required, key)}
                />
                &#32; Text field required
              </label>
            </div>
            <label>
              <input
                type="radio"
                name={`type${key}`}
                checked={info.type === 'checkbox'}
                onChange={updateType.bind(this, 'checkbox', key)}
              />
              &#32; Checkbox
            </label>
          </div>
        </div>
      </div>
    ))
  }

  return <div className="row">{extraList}</div>
}

ConferenceQuestion.propTypes = {
  conferenceQuestion: PropTypes.array,
  resource: PropTypes.object,
  key: PropTypes.number,
  updateInfo: PropTypes.func,
  dropInfo: PropTypes.func
}

export default ConferenceQuestion
