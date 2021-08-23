'use strict'
import React from 'react'

const yearOptions = () => {
  const currentYear = new Date().getFullYear()
  let yearTrack = currentYear - 90
  const options = []
  options.push(
    <option key="year-0" value="0">
      Choose year below
    </option>
  )
  while (yearTrack <= currentYear) {
    options.push(<option key={`year-${yearTrack}`}>{yearTrack}</option>)
    yearTrack++
  }

  return options
}

export default yearOptions
