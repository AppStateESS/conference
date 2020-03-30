'use strict'
import React, {useState} from 'react'
import PropTypes from 'prop-types'

const HideStudent = ({studentId, saved, close}) => {
  const hideStudent = () => {
    $.ajax({
      url: `conference/Admin/Student/${studentId}/hide`,
      dataType: 'json',
      type: 'patch',
      success: () => {
        saved()
      },
      error: () => {}
    })
  }
  return (
    <div>
      <p>
        Hiding a student prevents their student session from getting matched.
      </p>
      <button className="btn btn-primary mr-2" onClick={hideStudent}>
        Yes, I want to hide this student
      </button>
      <button className="btn btn-danger" onClick={close}>
        Nevermind
      </button>
    </div>
  )
}

HideStudent.propTypes = {
  saved: PropTypes.func,
  close: PropTypes.func,
  studentId: PropTypes.number
}
export default HideStudent
