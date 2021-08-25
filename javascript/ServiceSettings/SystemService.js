'use strict'
import React from 'react'
import PropTypes from 'prop-types'

const SystemService = ({service}) => {
  if (service.length === 0) {
    return (
      <div>
        <h4>No service set</h4>
        <p>
          To use online billing, you will need to specify a payment service in
          the <code>config/defines.php</code> file.
        </p>
      </div>
    )
  } else {
    return <h3>Payment service: {service}</h3>
  }
}

SystemService.propTypes = {service: PropTypes.string}

export default SystemService
