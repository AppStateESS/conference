'use strict'
import React, {useState, useEffect} from 'react'
import dayjs from 'dayjs'
import PropTypes from 'prop-types'

/* global $ */

const Refunds = ({registrationId}) => {
  const [refunds, setRefunds] = useState([])

  useEffect(() => {
    $.ajax({
      url: 'conference/Admin/Refund/byRegistration',
      data: {registrationId},
      dataType: 'json',
      type: 'get',
      success: (data) => {
        setRefunds(data)
      },
      error: () => {},
    })
  }, [])

  if (refunds.length === 0) {
    return <div></div>
  }

  const refundListing = () => {
    return refunds.map((value) => {
      return (
        <tr key={value.id}>
          <td>
            {dayjs.unix(value.dateRefunded).format('MM/DD/YYYY, h:mm:ss A')}
          </td>
          <td>${value.amount.toFixed(2)}</td>
          <td>{value.username}</td>
          <td>{value.guests}</td>
          <td>{value.meals}</td>
          <td>{value.complete ? 'Yes' : 'No'}</td>
        </tr>
      )
    })
  }

  return (
    <div>
      <h4>Refunds</h4>
      <table className="table table-striped">
        <tbody>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Admin</th>
            <th>Guests</th>
            <th>Meals</th>
            <th>Complete</th>
          </tr>
          {refundListing()}
        </tbody>
      </table>
    </div>
  )
}

Refunds.propTypes = {registrationId: PropTypes.number}

Refunds.defaultProps = {}
export default Refunds
