'use strict'
import React from 'react'
import PropTypes from 'prop-types'

/* global $ */

const ChooseParent = ({parents, goBack, matchBannerId, setStatus}) => {
  const choose = (parentKey, emailAddress) => {
    $.ajax({
      url: 'conference/User/Visitor/apiCreate',
      data: {parentKey, emailAddress, matchBannerId},
      dataType: 'json',
      type: 'post',
      success: (data) => {
        if (data.success == true) {
          setStatus('success')
        } else if (data.duplicate == true) {
          setStatus('duplicate')
        }
      },
      error: () => {
        this.setStatus('error')
      },
    })
  }

  const parentList = parents.map((value, key) => {
    return (
      <div key={value.ID}>
        <button
          className="btn btn-success btn-lg btn-block mb-3"
          onClick={() => {
            choose(key, value.emailAddress)
          }}>
          {value.prefFirstName ?? value.firstName} {value.lastName}
          <br />
          {value.emailAddress}
        </button>
      </div>
    )
  })

  return (
    <div>
      <p>Create an account by clicking on a button below.</p>
      <div>{parentList}</div>
      <div>
        <button className="btn btn-outline-dark btn-block" onClick={goBack}>
          <i className="fas fa-arrow-left"></i>&nbsp; Go back
        </button>
      </div>
    </div>
  )
}

ChooseParent.propTypes = {
  parents: PropTypes.array,
  goBack: PropTypes.func,
  matchBannerId: PropTypes.string,
  setStatus: PropTypes.func,
}

ChooseParent.defaultProps = {}
export default ChooseParent
