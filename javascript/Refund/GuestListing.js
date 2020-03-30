'use strict'
import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

const GuestListing = ({guests, removed, toggle}) => {
  const listing = guests.map((value, key) => {
    let button = (
      <button
        className="btn btn-danger btn-sm"
        onClick={() => {
          toggle(value.id)
        }}>
        Refund
      </button>
    )
    const found = removed.indexOf(value.id)
    if (found !== -1) {
      button = (
        <button
          className="btn btn-outline-dark btn-sm"
          onClick={() => {
            toggle(value.id)
          }}>
          Cancelled
        </button>
      )
    }

    return (
      <tr key={key}>
        <td>
          {value.firstName} {value.lastName}
        </td>
        <td>{value.email}</td>
        <td>{button}</td>
      </tr>
    )
  })
  return (
    <table className="table table-striped table-sm">
      <tbody>{listing}</tbody>
    </table>
  )
}

GuestListing.propTypes = {}

GuestListing.defaultProps = {}
export default GuestListing
