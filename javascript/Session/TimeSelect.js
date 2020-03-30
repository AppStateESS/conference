'use strict'
import React from 'react'
import PropTypes from 'prop-types'

const intToString = timeVar => {
  return timeVar < 10 ? '0' + timeVar.toString() : timeVar.toString()
}

const getCurrentAmPm = timeInteger => {
  return timeInteger >= 1200 ? 'PM' : 'AM'
}

const getHourMatch = hourInteger => {
  if (hourInteger > 12) {
    hourInteger -= 12
  }
  return hourInteger === 0 ? '12' : hourInteger.toString()
}

const TimeSelect = ({time, onChange}) => {
  const timeInt = parseInt(time)

  let ampm = getCurrentAmPm(timeInt)
  let hourInt = timeInt / 100
  // first two digits of hour saved in database
  let hourStr = intToString(hourInt)
  // used to match on the select
  let hourMatch = getHourMatch(hourInt)

  let minuteInt = timeInt % 100
  let minuteStr = intToString(minuteInt)

  const handleAMPM = e => {
    const {value} = e.target
    if (value === 'AM') {
      hourInt -= 12
      if (hourInt === 12) {
        hourStr = '00'
      } else {
        hourStr = intToString(hourInt)
      }
    } else {
      // value is pm
      // if hour is midnight change to noon
      if (hourInt === 0) {
        hourStr = '12'
      } else {
        hourStr = intToString(hourInt)
      }
    }
    sendChange(hourStr, minuteStr)
  }

  const sendChange = (hourStr, minuteStr) => {
    const timeStr = hourStr + minuteStr
    onChange(timeStr)
  }

  const handleHour = e => {
    const {value} = e.target
    hourInt = parseInt(value)
    if (ampm === 'PM') {
      if (hourInt === 12) {
        hourInt = 12
      } else {
        hourInt += 12
      }
    }
    hourStr = intToString(hourInt)
    sendChange(hourStr, minuteStr)
  }

  const handleMinute = e => {
    const {value} = e.target
    minuteInt = parseInt(value)
    minuteStr = intToString(minuteInt)
    sendChange(hourStr, minuteStr)
  }

  return (
    <div>
      <div className="row">
        <div className="col-4 pr-0">
          <select
            className="form-control"
            value={hourMatch}
            onChange={handleHour}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>
        </div>
        <div className="col-4 px-0">
          <select
            className="form-control"
            value={minuteStr}
            onChange={handleMinute}>
            <option>00</option>
            <option>15</option>
            <option>30</option>
            <option>45</option>
          </select>
        </div>
        <div className="col-4 px-0">
          <select className="form-control" value={ampm} onChange={handleAMPM}>
            <option>AM</option>
            <option>PM</option>
          </select>
        </div>
      </div>
    </div>
  )
}

TimeSelect.propTypes = {
  time: PropTypes.string,
  onChange: PropTypes.func
}

export default TimeSelect
