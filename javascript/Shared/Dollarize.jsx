import React from 'react'
import PropTypes from 'prop-types'

const Dollarize = ({children}) => {
  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <div className="input-group-text">$</div>
      </div>
      {children}
    </div>
  )
}

Dollarize.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
}

export default Dollarize
