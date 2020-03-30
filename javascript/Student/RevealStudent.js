'use strict'
import React from 'react'
import PropTypes from 'prop-types'

const RevealStudent = ({studentId, close, saved}) => {
  const revealStudent = () => {
    $.ajax({
      url: `conference/Admin/Student/${studentId}/reveal`,
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
        Revealing a student allows parent session matching. Do not reveal a
        student if they are trying to maintain a private account.
      </p>
      <button className="btn btn-primary mr-2" onClick={revealStudent}>
        Yes, I want to reveal this student
      </button>
      <button className="btn btn-danger" onClick={close}>
        Nevermind
      </button>
    </div>
  )
}

RevealStudent.propTypes = {
  saved: PropTypes.func,
  close: PropTypes.func,
  studentId: PropTypes.number
}
export default RevealStudent
