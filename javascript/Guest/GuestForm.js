'use strict'
import React, {useState, useEffect} from 'react'
import RelationshipSelect from '../Shared/RelationshipSelect'
import PropTypes from 'prop-types'

/* global $ */

const GuestForm = ({guest, saveComplete}) => {
  const [firstName, setFirstName] = useState(guest.firstName)
  const [lastName, setLastName] = useState(guest.lastName)
  const [email, setEmail] = useState(guest.email)
  const [phone, setPhone] = useState(guest.phone)
  const [relationship, setRelationship] = useState(guest.relationship)
  const [hometown, setHometown] = useState(guest.hometown)
  const [firstNameError, setFirstNameError] = useState(false)
  const [lastNameError, setLastNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [alum, setAlum] = useState(guest.alum == 1)
  const [gradYear, setGradYear] = useState(guest.gradYear)
  const [position, setPosition] = useState(guest.position)
  const [employer, setEmployer] = useState(guest.employer)

  useEffect(() => {
    setFirstName(guest.firstName)
    setLastName(guest.lastName)
    setEmail(guest.email)
    setRelationship(guest.relationship)
    setPhone(guest.phone)
    setHometown(guest.hometown)
    setAlum(guest.alum == 1)
    setGradYear(guest.gradYear)
    setEmployer(guest.employer)
    setPosition(guest.position)
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
          email,
          relationship,
          phone,
          hometown,
          alum,
          gradYear,
          employer,
          position,
        },
        dataType: 'json',
        type: 'put',
        success: (data) => {
          saveComplete()
        },
        error: () => {},
      })
    }
  }

  return (
    <div>
      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {firstNameError ? (
              <div className="badge badge-danger">First name empty</div>
            ) : null}
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {lastNameError ? (
              <div className="badge badge-danger">Last name empty</div>
            ) : null}
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError ? (
              <div className="badge badge-danger">
                Email not formatted correctly
              </div>
            ) : null}
          </div>
        </div>
        <div className="col-sm-6">
          <label>Relationship to student</label>
          <RelationshipSelect
            relation={relationship}
            update={(value) => {
              setRelationship(value)
            }}
          />
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="hometown">Home Town</label>
            <input
              type="text"
              className="form-control"
              name="hometown"
              value={hometown}
              onChange={(e) => setHometown(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="alum">
              <input
                type="checkbox"
                name="alum"
                value="1"
                checked={alum}
                onChange={() => setAlum(!alum)}
              />
              &nbsp;Alum
            </label>
            <div className="form-group">
              <label htmlFor="gradYear">Graduation year</label>
              <input
                type="text"
                className="form-control"
                name="gradYear"
                value={gradYear}
                onChange={(e) => setGradYear(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="employer">Employer</label>
            <input
              type="text"
              className="form-control"
              name="employer"
              value={employer}
              onChange={(e) => setEmployer(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="position">Position</label>
            <input
              type="text"
              className="form-control"
              name="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-6"></div>
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
  guest: {id: 0, firstName: '', lastName: '', email: ''},
}
export default GuestForm
