'use strict'
import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

/* global $ */

const ChangeDate = ({close, student, saved, sessionListing}) => {
  const [startDate, setStartDate] = useState(student.startDate)
  useEffect(() => {
    setStartDate(student.startDate)
  }, [student.id])

  let sessionOption = 0
  if (sessionListing.length > 0) {
    const sessionRows = sessionListing.map((val) => {
      return (
        <option key={`session-${val.id}`} value={val.eventDate}>
          {val.formatDate}
        </option>
      )
    })
    sessionOption = (
      <div className="mt-4">
        <p>or pick from an upcoming session</p>
        <select
          className="form-control"
          defaultValue="0"
          onChange={(e) => setStartDate(e.target.value)}>
          <option value="0" disabled={true}>
            Pick an upcoming session below to set the date.
          </option>
          {sessionRows}
        </select>
      </div>
    )
  }

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
      error: () => {},
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
            onChange={(val) => setStartDate(val / 1000)}
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
      {sessionOption}
    </div>
  )
}

ChangeDate.propTypes = {
  close: PropTypes.func,
  student: PropTypes.object,
  saved: PropTypes.func,
  sessionListing: PropTypes.array,
}

ChangeDate.defaultProps = {}
export default ChangeDate
