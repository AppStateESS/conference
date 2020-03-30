'use strict'
import React from 'react'
import PropTypes from 'prop-types'

const Registrations = ({listing}) => {
  if (listing.length === 0) {
    return <h3>No unpaid registrations.</h3>
  }

  const formatted = listing.map((value, key) => {
    const payButton = (
      <a
        className="btn btn-primary btn-sm"
        href={`conference/Admin/Payment/?registrationId=${value.id}`}>
        Pay
      </a>
    )

    let parentFullName = <em>Incomplete</em>
    if (value.firstName.length > 0) {
      parentFullName = (
        <span>
          {value.firstName}&nbsp;{value.lastName}
        </span>
      )
    }

    const studentName = (
      <span>
        {value.studentFirstName}&nbsp;{value.studentLastName}
      </span>
    )

    const amountDue = value.totalCost - value.amountPaid

    return (
      <tr key={key}>
        <td>{payButton}</td>
        <td>{parentFullName}</td>
        <td>{studentName}</td>
        <td>${amountDue.toFixed(2)}</td>
      </tr>
    )
  })

  return (
    <table className="table table-striped">
      <tbody>
        <tr>
          <th>&nbsp;</th>
          <th>Parent name</th>
          <th>Student name</th>
          <th>Amount due</th>
        </tr>
        {formatted}
      </tbody>
    </table>
  )
}

Registrations.propTypes = {listing: PropTypes.array}

export default Registrations
