'use strict'
import React, {useState, useEffect} from 'react'
import BigCheckbox from 'canopy-react-bigcheckbox'

const Disable = ({}) => {
  const [disabled, setDisabled] = useState(false)
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    $.ajax({
      url: 'conference/Admin/Settings/isDisabled',
      dataType: 'json',
      type: 'get',
      success: (data) => {
        setDisabled(data.disabled)
        setLoaded(true)
      },
      error: () => {},
    })
  }, [])

  useEffect(() => {
    if (loaded) {
      $.ajax({
        url: 'conference/Admin/Settings/setDisabled',
        data: {disabled},
        dataType: 'json',
        type: 'post',
        success: () => {},
        error: () => {},
      })
    }
  }, [disabled])

  return (
    <div className="mb-5">
      <h3>Disable site</h3>
      <div>
        <BigCheckbox
          label="Prevent visitors from signing in"
          checked={disabled}
          handle={setDisabled}
        />
      </div>
    </div>
  )
}

Disable.propTypes = {}

export default Disable
