'use strict'
import React, {useState, useEffect, Fragment, useRef} from 'react'
import BigCheckbox from '@essappstate/canopy-react-bigcheckbox'
/* global $ */

const FutureSession = ({futureSessionSelectionSetting}) => {
  const [futureSessionSelection, setFutureSessionSelection] = useState(
    futureSessionSelectionSetting
  )
  const init = useRef(false)

  useEffect(() => {
    $.ajax({
      url: 'conference/Admin/Settings/future',
      dataType: 'json',
      type: 'get',
      success: (data) => {
        setFutureSessionSelection(data.futureSessionSelection)
        init.current = true
      },
    })
  }, [])

  useEffect(() => {
    if (init.current) {
      $.ajax({
        url: 'conference/Admin/Settings/future',
        data: {
          futureSessionSelection,
        },
        dataType: 'json',
        type: 'post',
      })
    }
  }, [futureSessionSelection])

  return (
    <div className="mb-5">
      <h3>Future Session Selection</h3>
      <BigCheckbox
        label="Parents may pick an upcoming conference session if student has already visited."
        checked={futureSessionSelection}
        handle={setFutureSessionSelection}
      />
    </div>
  )
}

FutureSession.propTypes = {}
export default FutureSession
