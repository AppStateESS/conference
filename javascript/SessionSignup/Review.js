'use strict'
import React from 'react'
import PropTypes from 'prop-types'

const Review = ({registration, totalCost, visitor, session, goBack}) => {
  let address = <span>{visitor.address1}</span>
  if (visitor.address2.length > 0) {
    address = (
      <span>
        {visitor.address1}
        <br />
        {visitor.address2}
      </span>
    )
  }

  const extraMealsRow = () => {
    if (session.mealService === 0 || session.mealCost == 0) {
      return null
    }
    return (
      <tr>
        <td>
          Number of {session.mealIncluded === 1 ? <span>extra</span> : null}{' '}
          meal tickets:
        </td>
        <td>{registration.mealTickets}</td>
      </tr>
    )
  }

  const vegMealsRow = () => {
    if (session.mealService === 0 || session.mealCost == 0) {
      return null
    }
    return (
      <tr>
        <td>Vegetarian meals:</td>
        <td>{registration.veggieMeals}</td>
      </tr>
    )
  }

  return (
    <div>
      <div className="row">
        <div className="col-sm-6">
          <h4>
            My contact information{' '}
            <button
              className="btn btn-info btn-sm"
              onClick={goBack.bind(null, 'contact')}>
              Change
            </button>
          </h4>
          <table className="table table-striped">
            <tbody>
              <tr>
                <th>Name</th>
                <td>
                  {visitor.firstName}&#32;{visitor.lastName}
                </td>
              </tr>
              <tr>
                <th>Username/Email</th>
                <td>{visitor.email}</td>
              </tr>
              <tr>
                <th>Phone</th>
                <td>{visitor.phone}</td>
              </tr>
              <tr>
                <th>Address</th>
                <td>
                  {address}
                  <br />
                  {visitor.city}, {visitor.state} {visitor.zip}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-sm-6">
          <h4>
            My registration{' '}
            <button
              className="btn btn-info btn-sm"
              onClick={goBack.bind(null, 'tickets')}>
              Change
            </button>
          </h4>
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>Number of guests:</td>
                <td>{registration.guestCount}</td>
              </tr>
              {extraMealsRow()}
              {vegMealsRow()}
              <tr>
                <th>
                  <span className="lead">Total session cost:</span>
                </th>
                <th>
                  <span className="lead">${totalCost()}</span>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <a
        className="btn btn-primary btn-block"
        href={`./conference/Visitor/Registration/${registration.id}/complete`}>
        Complete registration
      </a>
    </div>
  )
}

Review.propTypes = {
  registration: PropTypes.object,
  visitor: PropTypes.object,
  session: PropTypes.object,
  totalCost: PropTypes.func,
  goBack: PropTypes.func
}

export default Review
