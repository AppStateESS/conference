'use strict'
import React, {useState, useEffect} from 'react'
import BigCheckbox from 'canopy-react-bigcheckbox'

import PropTypes from 'prop-types'

const BannerStudent = ({bannerApiSetting}) => {
  const [bannerApi, setBannerApi] = useState(bannerApiSetting)
  const [init, setInit] = useState(false)
  useEffect(() => {
    setInit(true)
  }, [])

  useEffect(() => {
    if (init)
      $.ajax({
        url: 'conference/Admin/Settings/bannerApi',
        data: {bannerApi},
        dataType: 'json',
        type: 'post',
        success: () => {},
        error: () => {}
      })
  }, [bannerApi])

  return (
    <div className="mb-5">
      <h3>Banner Student</h3>
      <p>
        Enabling the API will pull students directly from Banner interface
        instead of the local database.
      </p>
      <BigCheckbox
        label="Use Banner API for Orientation"
        checked={bannerApi}
        handle={setBannerApi}
      />
    </div>
  )
}

BannerStudent.propTypes = {bannerApiSetting: PropTypes.number}

export default BannerStudent
