'use strict'
import React, {useState} from 'react'
import PropTypes from 'prop-types'

const StudentInfo = ({student}) => {
  if (student.id === 0) {
    return null
  } else {
    return (
      <h3>
        for {student.firstName} {student.lastName}
      </h3>
    )
  }
}

StudentInfo.propTypes = {student: PropTypes.object}

export default StudentInfo
