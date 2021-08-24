import React from 'react'
import {relationships} from './Relationship'
import PropTypes from 'prop-types'

const relOptions = () => {
  const options = relationships.map((value) => {
    return <option key={`relationship-${value}`}>{value}</option>
  })
  return options
}

/**
 * @augments {React.Component<Props>}
 */
const RelationshipSelect = ({relation, update}) => {
  return (
    <select
      name="relationship"
      value={relation}
      onChange={(e) => {
        update(e.target.value)
      }}
      className="form-control">
      {relOptions()}
    </select>
  )
}
RelationshipSelect.propTypes = {
  relation: PropTypes.string,
  update: PropTypes.func,
}

export default RelationshipSelect
