'use strict'
import React, {useState, useEffect, createRef} from 'react'
import PropTypes from 'prop-types'

/* global $ */

const StudentSignin = ({setStage, setStudent}) => {
  const [bannerId, setBannerId] = useState('')
  const [bannerUsername, setBannerUsername] = useState('')
  const [message, setMessage] = useState('')

  const pullStudent = () => {
    $.ajax({
      url: 'conference/User/Onsite/search',
      data: {checkBannerId: bannerId, bannerUsername},
      dataType: 'json',
      type: 'get',
      success: (data) => {
        if (data.success) {
          setStudent(data.student)
          setStage('createAccount')
        } else {
          setMessage(data.message)
        }
      },
      error: () => {},
    })
  }
  const bannerInput = createRef()

  const getMessage = () => {
    if (message.length > 0) {
      return <div className="alert alert-danger">{message}</div>
    } else {
      return null
    }
  }

  useEffect(() => {
    bannerInput.current.focus()
  }, [])

  return (
    <div className="card-body">
      {getMessage()}
      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="bannerId">Student Banner ID</label>
            <input
              type="text"
              id="bannerId"
              autoComplete="off"
              className="form-control"
              placeholder="e.g. 900000000"
              ref={bannerInput}
              name="BannerID"
              value={bannerId}
              onChange={(e) => setBannerId(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="bannerUsername">Student username</label>
            <input
              type="text"
              className="form-control"
              autoComplete="off"
              name="bannerUsername"
              placeholder="e.g. lastnamefm"
              value={bannerUsername}
              onChange={(e) => setBannerUsername(e.target.value)}
            />
          </div>
        </div>
      </div>
      <button className="btn btn-primary btn-block" onClick={pullStudent}>
        Search for my student
      </button>
    </div>
  )
}

StudentSignin.propTypes = {
  setStage: PropTypes.func,
  setStudent: PropTypes.func,
}

export default StudentSignin
