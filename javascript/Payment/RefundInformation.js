'use strict'
import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

const RefundInformation = ({refundId}) => {
  const [refund, setRefund] = useState({})
  useEffect(() => {
    $.ajax({
      url: `conference/Admin/Refund/${refundId}`,
      dataType: 'json',
      type: 'get',
      success: data => {
        setRefund(data)
      },
      error: () => {}
    })
  }, [refundId])
  return (
    <div>
      <table className="table table-striped">
        <tbody>
          <tr>
            <th>Refunded by</th>
            <td>{refund.username}</td>
          </tr>
          <tr>
            <th>Refunded on</th>
            <td>{refund.dateRefunded}</td>
          </tr>
          <tr>
            <th>Amount</th>
            <td>${parseFloat(refund.amount).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

RefundInformation.propTypes = {}

RefundInformation.defaultProps = {}
export default RefundInformation
