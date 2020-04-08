'use strict'
import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import GuestListing from './GuestListing'
import BigCheckbox from 'canopy-react-bigcheckbox'

/* global $ */

const RefundForm = ({registration, session, guests}) => {
  const amount = registration.amountPaid.toFixed(2)
  const [refundAmount, setRefundAmount] = useState(0)
  const [mealReduction, setMealReduction] = useState(0)
  const [guestReduction, setGuestReduction] = useState(0)
  const [guestRemoved, setGuestRemoved] = useState([])
  const [cancel, setCancel] = useState(true)

  useEffect(() => {
    const totalReduction =
      session.guestCost * guestReduction + session.mealCost * mealReduction
    setRefundAmount(totalReduction)
  }, [guestReduction, mealReduction])

  const toggleGuest = (id) => {
    const found = guestRemoved.indexOf(id)
    if (found === -1) {
      guestRemoved.push(id)
    } else {
      guestRemoved.splice(found, 1)
    }
    setGuestReduction(guestRemoved.length)
    setGuestRemoved([...guestRemoved])
  }

  const refundFullRegistration = () => {
    if (
      prompt(
        'This will refund the entire amount owed by the parent. Type REFUND below to confirm your choice.'
      ) === 'REFUND'
    ) {
      $.ajax({
        url: 'conference/Admin/Refund/full',
        data: {registrationId: registration.id, cancel},
        dataType: 'json',
        type: 'post',
        success: () => {
          window.location.href = `conference/Admin/Payment/?registrationId=${registration.id}`
        },
        error: () => {},
      })
    }
  }

  const mealsListing = () => {
    if (registration.mealTickets == 0) {
      return null
    }
    return (
      <div>
        <h4>
          Meals (${session.mealCost}){' '}
          {mealReduction > 0 ? ' X ' + mealReduction : null}
        </h4>
        <table className="table table-striped table-sm">
          <tbody>
            <tr>
              <th>Current total</th>
              <th>Refund item</th>
              <td></td>
            </tr>
            <tr>
              <td>{registration.mealTickets}</td>
              <td>{mealReduction}</td>
              <td>
                <button
                  className="btn btn-outline-dark btn-sm mr-2"
                  onClick={() => {
                    if (mealReduction < registration.mealTickets) {
                      setMealReduction(mealReduction + 1)
                    }
                  }}>
                  <i className="fas fa-plus"></i>
                </button>
                <button
                  className="btn btn-outline-dark btn-sm mr-2"
                  onClick={() => {
                    if (mealReduction !== 0) {
                      setMealReduction(mealReduction - 1)
                    }
                  }}>
                  <i className="fas fa-minus"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

  const guestListing = () => {
    if (registration.guestCount == 0) {
      return null
    }
    return (
      <div>
        <h4>
          Guests (${session.guestCost}){' '}
          {guestReduction > 0 ? ' X ' + guestReduction : null}
        </h4>
        <div>
          <div>
            <GuestListing
              guests={guests}
              removed={guestRemoved}
              toggle={toggleGuest}
            />
          </div>
        </div>
      </div>
    )
  }

  const partialButton = () => {
    if (registration.guestCount == 0 && registration.mealTickets == 0) {
      return null
    }

    return (
      <div className="text-center">
        <button
          className="btn btn-warning btn-lg mb-2"
          onClick={partialRefund}
          disabled={refundAmount == 0}>
          Partial refund ${parseFloat(refundAmount).toFixed(2)}
        </button>
      </div>
    )
  }

  const partialRefund = () => {
    if (
      prompt(
        'This will create a partial refund and remove meals or guests as specified. Type REFUND below to confirm your choice.'
      ) === 'REFUND'
    ) {
      $.ajax({
        url: 'conference/Admin/Refund/partial',
        data: {
          registrationId: registration.id,
          refundAmount,
          mealReduction,
          guestRemoved,
          guestReduction,
        },
        dataType: 'json',
        type: 'post',
        success: () => {
          window.location.href = `conference/Admin/Payment/?registrationId=${registration.id}`
        },
        error: () => {},
      })
    }
  }

  return (
    <div className="container">
      <div className="alert alert-danger text-center">
        <i className="fas fa-exclamation-triangle"></i>&nbsp; Please complete
        the refund on the payment site or in-person prior to completing this
        process.
      </div>
      {mealsListing()}
      {guestListing()}

      <p className="lead">
        <strong>Total amount paid</strong>: ${amount}
      </p>
      {partialButton()}

      <hr />
      <div className="text-center mb-3">
        <button
          className="btn btn-danger btn-lg"
          onClick={refundFullRegistration}>
          Refund complete registration amount ($
          {registration.amountPaid.toFixed(2)})
        </button>
      </div>

      <div className="d-flex justify-content-center">
        <BigCheckbox
          label="Cancel registration"
          checked={cancel}
          handle={setCancel}
        />
      </div>
    </div>
  )
}

RefundForm.propTypes = {
  registration: PropTypes.object,
  session: PropTypes.object,
  close: PropTypes.func,
  guests: PropTypes.array,
}

export default RefundForm
