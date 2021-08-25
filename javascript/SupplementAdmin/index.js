'use strict'
import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import GuestList from './GuestList'

/* global registrationId, mealCost, guestCost, mealService, registerCost, attendanceCap */

const SupplementAdmin = ({
  registrationId,
  mealCost,
  guestCost,
  mealService,
  attendanceCap,
}) => {
  const defaultGuest = {
    email: '',
    firstName: '',
    lastName: '',
  }
  const [newGuests, setNewGuests] = useState(0)
  const [newMeals, setNewMeals] = useState(0)
  const [guests, setGuests] = useState([])
  const [totalCost, setTotalCost] = useState(0)
  const [error, setError] = useState(null)
  const formRef = React.createRef()

  useEffect(() => {
    if (attendanceCap <= 0) {
      setError(
        <div className="alert alert-danger">
          Session attendance cap prevents any new guests
        </div>
      )
    }
  }, [])

  const decreaseMeals = () => {
    if (newMeals >= 0) {
      setNewMeals(newMeals - 1)
      setTotalCost(totalCost - mealCost)
    }
  }

  const increaseMeals = () => {
    setNewMeals(newMeals + 1)
    setTotalCost(totalCost + mealCost)
  }

  const decreaseGuests = () => {
    if (newGuests >= 0) {
      setNewGuests(newGuests - 1)
      guests.pop()
      setGuests([...guests])
      setTotalCost(totalCost - guestCost)
    }
  }

  const increaseGuests = () => {
    setNewGuests(newGuests + 1)
    guests.push(Object.assign({}, defaultGuest))
    setTotalCost(totalCost + guestCost)
  }

  const disableMealMinus = () => {
    return newMeals === 0
  }

  const disableMealPlus = () => {
    return newMeals > 10
  }

  const disableGuestMinus = () => {
    return newGuests === 0
  }

  const disableGuestPlus = () => {
    return newGuests >= attendanceCap
  }

  const updateGuests = (key, varname, value) => {
    const guestCopy = [...guests]
    guestCopy[key][varname] = value
    setGuests(guestCopy)
  }

  const guestsCompleted = () => {
    let completed = true
    if (newGuests !== 0) {
      guests.forEach((value) => {
        if (
          value.firstName.length === 0 ||
          value.lastName.length === 0 ||
          value.email.length === 0
        ) {
          completed = false
        }
      })
    }
    return completed
  }

  const saveSupplement = (e) => {
    e.preventDefault()
    if (!guestsCompleted()) {
      setError(
        <div className="alert alert-danger">
          Please complete all guest fields.
        </div>
      )
      return
    } else {
      formRef.current.submit()
    }
  }

  const guestsHidden = () => {
    if (newGuests === 0) {
      return
    }
    const hidden = []
    guests.forEach((value, key) => {
      hidden.push(
        <input
          type="hidden"
          key={key + '1'}
          name={`guests[${key}][firstName]`}
          value={value.firstName}
        />
      )
      hidden.push(
        <input
          type="hidden"
          key={key + '2'}
          name={`guests[${key}][lastName]`}
          value={value.lastName}
        />
      )
      hidden.push(
        <input
          type="hidden"
          key={key + '3'}
          name={`guests[${key}][email]`}
          value={value.email}
        />
      )
    })
    return hidden
  }

  let addChargeButton
  if (registerCost > 0) {
    addChargeButton = (
      <button
        className="btn btn-primary btn-block"
        disabled={newMeals === 0 && newGuests === 0}
        onClick={saveSupplement}>
        Add ${totalCost.toFixed(2)} charge to registration
      </button>
    )
  } else {
    addChargeButton = (
      <button
        className="btn btn-primary btn-block"
        disabled={newMeals === 0 && newGuests === 0}
        onClick={saveSupplement}>
        Save additions to registration
      </button>
    )
  }
  console.log(attendanceCap)
  return (
    <div>
      {error}
      <table className="table table-striped">
        <tbody>
          {mealService === 1 ? (
            <tr>
              <th style={{width: '20%'}}>New meals (${mealCost.toFixed(2)})</th>
              <td style={{width: '10%'}}>
                <span className="alert alert-primary lead">{newMeals}</span>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-success btn-sm mr-1"
                  onClick={increaseMeals}
                  disabled={disableMealPlus()}>
                  <i className="fas fa-plus" />
                </button>
                <button
                  type="button"
                  className="btn btn-danger btn-sm mr-1"
                  onClick={decreaseMeals}
                  disabled={disableMealMinus()}>
                  <i className="fas fa-minus" />
                </button>
              </td>
            </tr>
          ) : null}
          <tr>
            <th style={{width: '20%'}}>New guests (${guestCost.toFixed(2)})</th>
            <td style={{width: '10%'}}>
              <span className="alert alert-primary lead">{newGuests}</span>
            </td>
            <td>
              <button
                type="button"
                className="btn btn-success btn-sm mr-1"
                onClick={increaseGuests}
                disabled={disableGuestPlus()}>
                <i className="fas fa-plus" />
              </button>
              <button
                type="button"
                className="btn btn-danger btn-sm mr-1"
                onClick={decreaseGuests}
                disabled={disableGuestMinus()}>
                <i className="fas fa-minus" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <GuestList guests={guests} update={updateGuests} />
      <form
        ref={formRef}
        action="conference/Admin/Supplement/add"
        method="post">
        <input type="hidden" name="registrationId" value={registrationId} />
        {guestsHidden()}
        <input type="hidden" name="newMeals" value={newMeals} />
        <input type="hidden" name="newGuests" value={newGuests} />
        <div>{addChargeButton}</div>
      </form>
    </div>
  )
}

SupplementAdmin.propTypes = {
  registrationId: PropTypes.number,
  mealCost: PropTypes.number,
  guestCost: PropTypes.number,
  attendanceCap: PropTypes.number,
  mealService: PropTypes.number,
}

export default SupplementAdmin

ReactDOM.render(
  <SupplementAdmin
    registrationId={registrationId}
    mealCost={mealCost}
    guestCost={guestCost}
    mealService={mealService}
    attendanceCap={attendanceCap}
  />,
  document.getElementById('SupplementAdmin')
)
