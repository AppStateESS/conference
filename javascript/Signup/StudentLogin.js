'use strict'
import React, {useState} from 'react'
import ChooseParent from './ChooseParent'
import PropTypes from 'prop-types'
import Complete from './Complete'

const StudentLogin = ({goBack, setParentEmail, topStatus}) => {
  const [matchBannerId, setMatchBannerId] = useState('')
  const [bannerUsername, setBannerUsername] = useState('')
  const [parents, setParents] = useState([])
  const [status, setStatus] = useState('form')
  const [parentChoice, setParentChoice] = useState({})

  const searchForStudent = ({goBack}) => {
    $.ajax({
      url: 'conference/User/Student/bannerSearch',
      data: {matchBannerId, bannerUsername},
      dataType: 'json',
      type: 'get',
      success: (data) => {
        if (data.success) {
          setParents(data.parents)
          setStatus('choose')
        } else {
          setStatus(data.code)
        }
      },
      error: () => {},
    })
  }

  const errorMessage = (message) => {
    return (
      <div>
        <h3>Sorry</h3>
        {message}
        <button
          className="btn btn-outline-dark"
          onClick={() => {
            setStatus('form')
          }}>
          Try again
        </button>
      </div>
    )
  }

  const checkBannerId = () => {
    if (matchBannerId.match(/\D/)) {
      return (
        <div className="badge badge-danger">Banner id should be numeric</div>
      )
    }
  }

  const checkUsername = () => {
    if (bannerUsername.match(/\W/)) {
      return (
        <div className="badge badge-danger">User name is alphanumeric only</div>
      )
    }
  }

  const form = () => {
    return (
      <div>
        <button
          className="btn btn-outline-dark btn-block mb-4"
          onClick={goBack}>
          <i className="fas fa-arrow-left"></i>&nbsp; Back to new account
          creation
        </button>

        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="matchBannerId">Student Banner Id</label>
              <input
                type="text"
                className="form-control"
                name="matchBannerId"
                value={matchBannerId}
                onChange={(e) => setMatchBannerId(e.target.value)}
              />
              {checkBannerId()}
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="bannerUsername">Student Banner name</label>
              <input
                type="text"
                className="form-control"
                name="bannerUsername"
                value={bannerUsername}
                onChange={(e) => setBannerUsername(e.target.value)}
              />
              {checkUsername()}
            </div>
          </div>
        </div>
        <button
          className="btn btn-outline-dark"
          disabled={matchBannerId.length == 0 || bannerUsername == 0}
          onClick={searchForStudent}>
          Search for student
        </button>
      </div>
    )
  }

  let message
  switch (status) {
    case 'form':
      return form()

    case 'complete':
      return <Complete parent={parentChoice} />

    case 'choose':
      return (
        <ChooseParent
          parents={parents}
          goBack={goBack}
          setStatus={topStatus}
          matchBannerId={matchBannerId}
        />
      )

    case 'notfound':
    case 'missing':
      message = (
        <p>
          We could not find your student using the banner id and user name
          supplied.
        </p>
      )
      break
    case 'noparents':
      message = <p>Student found but no parents associated with the account.</p>
      break
  }
  return errorMessage(message)
}

StudentLogin.propTypes = {goBack: PropTypes.func}

export default StudentLogin
