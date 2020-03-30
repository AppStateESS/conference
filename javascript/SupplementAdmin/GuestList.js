'use strict'
import React from 'react'
import PropTypes from 'prop-types'

const GuestList = ({guests, update}) => {
  if (guests.length === 0) {
    return <div></div>
  }

  const listing = guests.map((value, key) => {
    const {firstName, lastName, email} = value
    return (
      <tr key={key}>
        <th>New guest #{key + 1}</th>
        <td>
          <div className="form-group">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              value={firstName}
              onChange={e => update(key, 'firstName', e.target.value)}
            />
          </div>
        </td>
        <td>
          <div className="form-group">
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              value={lastName}
              onChange={e => update(key, 'lastName', e.target.value)}
            />
          </div>
        </td>
        <td>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={email}
              onChange={e => update(key, 'email', e.target.value)}
            />
          </div>
        </td>
      </tr>
    )
  })
  return (
    <div>
      <table className="table table-striped">
        <tbody>{listing}</tbody>
      </table>
    </div>
  )
}

GuestList.propTypes = {guests: PropTypes.array, update: PropTypes.func}

export default GuestList
