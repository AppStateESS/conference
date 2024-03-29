'use strict'
import React, {useState, useRef} from 'react'
import PropTypes from 'prop-types'

/* global $ */

const StudentLogin = ({goBack, topStatus}) => {
  const [matchBannerId, setMatchBannerId] = useState('')
  const [bannerUsername, setBannerUsername] = useState('')
  const [status, setStatus] = useState('form')

  const usernameRef = useRef()
  const submitRef = useRef()

  const searchForStudent = () => {
    $.ajax({
      url: 'conference/User/Student/bannerSearch',
      data: {matchBannerId, bannerUsername},
      dataType: 'json',
      type: 'get',
      success: (data) => {
        if (data.success == true) {
          setStatus('choose')
        } else {
          setStatus('duplicate')
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

  const enterTab = (e, ref) => {
    if (e.which === 13) {
      ref.current.focus()
    }
  }

  const form = () => {
    return (
      <div>
        <button
          className="btn btn-outline-primary btn-block mb-4"
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
                onKeyDown={(e) => enterTab(e, usernameRef)}
                onChange={(e) => {
                  setMatchBannerId(e.target.value)
                }}
              />
              {checkBannerId()}
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="bannerUsername">Student Banner name</label>
              <input
                ref={usernameRef}
                type="text"
                className="form-control"
                name="bannerUsername"
                value={bannerUsername}
                onKeyDown={(e) => enterTab(e, submitRef)}
                onChange={(e) => setBannerUsername(e.target.value)}
              />
              {checkUsername()}
            </div>
          </div>
        </div>
        <button
          ref={submitRef}
          className="btn btn-success btn-block"
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
