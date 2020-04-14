'use strict'
import React, {useState} from 'react'

const StudentLogin = () => {
  const [matchBannerId, setMatchBannerId] = useState('')
  const [bannerUsername, setBannerUsername] = useState('')

  const searchForStudent = () => {
    $.ajax({
      url: 'conference/User/Student/',
      data: {},
      dataType: 'json',
      type: 'get',
      success: (data) => {},
      error: () => {},
    })
  }

  return (
    <div>
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

StudentLogin.propTypes = {}

StudentLogin.defaultProps = {}
export default StudentLogin
