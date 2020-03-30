'use strict'
import React from 'react'
import PropTypes from 'prop-types'

const BannerList = ({
  list,
  toggle,
  importStudents,
  importAllStudents,
  checkAll,
  toggleAll,
  total
}) => {
  if (list.length === 0) {
    return <div></div>
  }
  const rows = list.map((value, key) => {
    return (
      <tr key={value.banner_id}>
        <td>
          <input
            type="checkbox"
            name="bannerStudent[]"
            value={value.id}
            checked={value.checked !== undefined && value.checked}
            onChange={() => toggle(key)}
          />
        </td>
        <td>{value.first_name}</td>
        <td>{value.last_name}</td>
        <td>{value.banner_username}</td>
        <td>{value.banner_id}</td>
        <td>{value.start_date}</td>
      </tr>
    )
  })
  return (
    <div>
      <h3>Banner students - {total} total found</h3>
      <table className="table table-striped">
        <tbody>
          <tr>
            <th>
              <input type="checkbox" checked={checkAll} onChange={toggleAll} />
            </th>
            <th>First</th>
            <th>Last</th>
            <th>Username</th>
            <th>Banner ID</th>
            <th>Start date</th>
          </tr>
          {rows}
        </tbody>
      </table>
      <button className="btn btn-primary mr-2" onClick={importStudents}>
        Import checked students
      </button>
      {checkAll ? (
        <button className="btn btn-success" onClick={importAllStudents}>
          Import all {total} students
        </button>
      ) : null}
    </div>
  )
}

BannerList.propTypes = {
  list: PropTypes.array,
  toggle: PropTypes.func,
  importStudents: PropTypes.func,
  importAllStudents: PropTypes.func,
  checkAll: PropTypes.bool,
  toggleAll: PropTypes.func,
  total: PropTypes.number
}

export default BannerList
