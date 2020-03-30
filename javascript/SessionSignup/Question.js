'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import BigCheckbox from '@essappstate/canopy-react-bigcheckbox'

const Question = ({idx, info, update}) => {
  const errorPlaceholder = info => {
    if (info.error !== undefined && info.error === true) {
      return 'Please answer this question before continuing.'
    }
  }

  if (info.type === 'checkbox') {
    return (
      <div className="mb-3">
        <BigCheckbox
          label={info.question}
          checked={
            info.answer !== undefined &&
            (info.answer === 1 || info.answer === true)
          }
          handle={update.bind(null, idx)}
        />
      </div>
    )
  } else if (info.type === 'text') {
    return (
      <div className="mb-3">
        <label className="d-inline">{info.question}</label>
        {info.required === 1 ? (
          <i className="fas fa-asterisk text-danger fa-sm" />
        ) : null}
        <input
          type="text"
          name={`question ${idx}`}
          placeholder={errorPlaceholder(info)}
          className="form-control"
          required={info.required === 1}
          value={info.answer}
          onChange={e => update(idx, e.target.value)}
        />
      </div>
    )
  }
}

Question.propTypes = {
  idx: PropTypes.number,
  info: PropTypes.object,
  registration: PropTypes.object,
  update: PropTypes.func
}

export default Question
