'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import Question from './Question'

const visitorInfo = ({visitorInfo, update, checkInfo}) => {
  let questions = visitorInfo.map((info, key) => {
    return (
      <div key={key}>
        <Question idx={key} info={info} update={update} />
        <hr />
      </div>
    )
  })

  return (
    <div>
      <h3>Please answer the following questions...</h3>
      <div>{questions}</div>
      <div className="text-center">
        <button className="btn btn-primary" onClick={checkInfo}>
          Save and continue
        </button>
      </div>
    </div>
  )
}

visitorInfo.propTypes = {
  visitorInfo: PropTypes.array,
  update: PropTypes.func,
  save: PropTypes.func,
  checkInfo: PropTypes.func
}

export default visitorInfo
