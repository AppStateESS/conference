'use strict'
import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

/* global $ */

const ChangeDate = ({close, student, saved}) => {
  const [startDate, setStartDate] = useState(student.startDate)
  useEffect(() => {
    setStartDate(student.startDate)
  }, [student.id])

  const startDateObject = new Date(startDate * 1000)
  const saveDate = () => {
    const url = `conference/Admin/Student/${student.id}/startDate`
    $.ajax({
      url,
      data: {startDate},
      dataType: 'json',
      type: 'patch',
      success: () => {
        saved()
      },
      error: () => {}
    })
  }
  return (
    <div className="container">
      <p>
        A student&apos;s start date will automatically update each time the
        parent logs in.
      </p>
      <p>Locking in the start date here will prevent auto-updates.</p>
      <div className="row">
        <div className="col-sm-6">
          <DatePicker
            selected={startDateObject}
            onChange={val => setStartDate(val / 1000)}
            className="form-control"
            dateFormat="MMM d, yyyy"
          />
        </div>
        <div className="col-sm-6">
          <button className="btn btn-success mr-2" onClick={saveDate}>
            <i className="fas fa-lock"></i> Lock date
          </button>
          <button className="btn btn-danger" onClick={close}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

ChangeDate.propTypes = {
  close: PropTypes.func,
  student: PropTypes.object,
  saved: PropTypes.func
}

ChangeDate.defaultProps = {}
export default ChangeDate
