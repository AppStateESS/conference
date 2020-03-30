'use strict'
import React, {useState} from 'react'
import PropTypes from 'prop-types'

const DiscountStudent = ({student, saved, close}) => {
  const [discountAmount, setAmount] = useState(student.discountAmount)
  const [discountLabel, setLabel] = useState(
    student.discountLabel === null ? '' : student.discountLabel
  )
  const [errorMessage, setError] = useState(null)

  const save = () => {
    $.ajax({
      url: `conference/Admin/Student/${student.id}/discount`,
      data: {discountAmount, discountLabel},
      dataType: 'json',
      type: 'patch',
      success: () => {
        saved()
      },
      error: () => {}
    })
  }

  const setDiscountAmount = e => {
    const {value} = e.target
    setAmount(value)
  }

  const checkAmount = () => {
    if (discountAmount.match(/^\d{1,3}(\.\d{2})?$/)) {
      setError(null)
    } else {
      setError(
        <div className="badge badge-danger">Please check the amount.</div>
      )
    }
  }

  return (
    <div>
      <h4>
        Apply discount to {student.firstName} {student.lastName}
      </h4>
      <p>
        Any discount applied to this student will be in effect for any session.
      </p>

      <div className="mb-3">
        <label>Discount amount</label>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              $
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            name="discountAmount"
            value={discountAmount}
            onBlur={checkAmount}
            onChange={setDiscountAmount}
          />
        </div>

        {errorMessage}
      </div>
      <div className="mb-3">
        <label>Discount label</label>
        <input
          type="text"
          className="form-control"
          name="discountLabel"
          onChange={e => setLabel(e.target.value)}
          value={discountLabel}
        />
      </div>

      <div className="col-sm-12 text-center">
        <button className="btn btn-primary" onClick={save}>
          Save discount
        </button>
      </div>
    </div>
  )
}

export default DiscountStudent

DiscountStudent.propTypes = {
  student: PropTypes.object
}
