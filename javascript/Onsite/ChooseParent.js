'use strict'
import React, {useState, useEffect} from 'react'
import SingleParent from './SingleParent'
import PropTypes from 'prop-types'

const ChooseParent = ({setParent, parents}) => {
  if (parents.length === 0) {
    return <SingleParent continue={() => setParent(-1)} />
  }

  const parentChoices = parents.map((value, key) => {
    return (
      <div key={value.ID}>
        <button
          className="btn btn-lg btn-primary btn-block mb-3"
          onClick={() => setParent(key)}>
          {value.firstName} {value.lastName}
        </button>
      </div>
    )
  })
  parentChoices.push(
    <div key="not-parent">
      <button
        className="btn btn-lg btn-info btn-block mb-3"
        onClick={() => setParent(-1)}>
        Not registering as a parent
      </button>
    </div>
  )

  return (
    <div>
      <p>Who is registering?</p>
      <div>{parentChoices}</div>
    </div>
  )
}

ChooseParent.propTypes = {
  setStage: PropTypes.func,
  setVisitor: PropTypes.func,
  student: PropTypes.object,
  parents: PropTypes.array
}

export default ChooseParent
