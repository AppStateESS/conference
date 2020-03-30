'use strict'
import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

const GuestForm = ({guest, saveComplete}) => {
  const [firstName, setFirstName] = useState(guest.firstName)
  const [lastName, setLastName] = useState(guest.lastName)
  const [email, setEmail] = useState(guest.email)
  const [firstNameError, setFirstNameError] = useState(false)
  const [lastNameError, setLastNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)

  useEffect(() => {
    setFirstName(guest.firstName)
    setLastName(guest.lastName)
    setEmail(guest.email)
  }, [guest.id])

  const update = () => {
    setFirstNameError(firstName.length === 0)
    setLastNameError(lastName.length === 0)
    setEmailError(
      email.length === 0 ||
        !email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/)
    )
    if (firstNameError || lastNameError || emailError) {
      return
    } else {
      $.ajax({
        url: 'conference/Admin/Guest/' + guest.id,
        data: {
          firstName,
          lastName,
          email
        },
        dataType: 'json',
        type: 'put',
        success: data => {
          saveComplete()
        },
        error: () => {}
      })
    }
  }

  return (
    <div>
      <div className="form-group">
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          className="form-control"
          name="firstName"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        {firstNameError ? (
          <div className="badge badge-danger">First name empty</div>
        ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          className="form-control"
          name="lastName"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        {lastNameError ? (
          <div className="badge badge-danger">Last name empty</div>
        ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className="form-control"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        {emailError ? (
          <div className="badge badge-danger">
            Email not formatted correctly
          </div>
        ) : null}
      </div>
      <div className="text-center">
        <button className="btn btn-primary" onClick={update}>
          Update guest
        </button>
      </div>
    </div>
  )
}

GuestForm.propTypes = {guest: PropTypes.object, saveComplete: PropTypes.func}

GuestForm.defaultProps = {
  guest: {id: 0, firstName: '', lastName: '', email: ''}
}
export default GuestForm
