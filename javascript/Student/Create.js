'use strict'
import React, {useState, useEffect} from 'react'
import BannerList from './BannerList'

/* global $ */

const Create = () => {
  const [search, setSearch] = useState('')
  const [searching, setSearching] = useState(false)
  const [bannerList, setBannerList] = useState([])
  const [message, setMessage] = useState('')
  const [checkAll, setCheckAll] = useState(false)
  const [total, setTotal] = useState(0)

  let searchTimeout

  useEffect(() => {
    if (searchTimeout !== null) {
      clearTimeout(searchTimeout)
    }
    if (search.length < 4) {
      return
    }
    searchTimeout = setTimeout(() => {
      loadBannerStudents(search)
    }, 1000)
  }, [search])

  const toggle = key => {
    const cloneList = [...bannerList]
    const row = cloneList[key]
    row.checked = row.checked === undefined || row.checked === false
    cloneList[key] = row
    setBannerList(cloneList)
  }

  const loadBannerStudents = () => {
    setBannerList([])
    $.ajax({
      url: 'conference/Admin/Student/banner',
      data: {search},
      dataType: 'json',
      type: 'get',
      success: data => {
        setSearching(false)
        setTotal(data.total)
        setBannerList(data.banner)
        if (data.banner.length === 0) {
          setMessage(<p>No students found</p>)
        } else {
          setMessage('')
        }
      },
      error: () => {}
    })
  }

  const importAllStudents = () => {
    $.ajax({
      url: 'conference/Admin/Student/importAll',
      data: {search},
      dataType: 'json',
      type: 'post',
      success: () => {
        loadBannerStudents()
      },
      error: () => {}
    })
  }

  const importStudents = () => {
    const importList = []

    bannerList.forEach(element => {
      if (element.checked !== undefined && element.checked) {
        importList.push(element.banner_id)
      }
    })
    if (importList.length == 0) {
      return
    }
    $.ajax({
      url: 'conference/Admin/Student/import',
      data: {importList},
      dataType: 'json',
      type: 'post',
      success: () => {
        loadBannerStudents()
      },
      error: () => {}
    })
  }

  const reset = () => {
    setBannerList([])
    setSearch('')
  }

  const toggleAll = () => {
    const cloneList = [...bannerList]
    cloneList.forEach(row => {
      row.checked = !checkAll
    })
    setBannerList(cloneList)
    setCheckAll(!checkAll)
  }

  return (
    <div>
      <div className="form-group">
        <label htmlFor="bannerId"></label>
        <div className="form-group">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={search}
              placeholder="Enter a date, banner id, or student name (4 character minimum)"
              onChange={e => setSearch(e.target.value)}
            />
            <button className="btn btn-outline-dark" onClick={reset}>
              Clear
            </button>
          </div>
        </div>

        <div>
          {searching ? 'Searching...' : null}
          {message}
          <div style={{overflowY: 'auto', height: '100%'}}>
            <BannerList
              list={bannerList}
              toggle={toggle}
              total={total}
              importStudents={importStudents}
              importAllStudents={importAllStudents}
              checkAll={checkAll}
              toggleAll={toggleAll}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Create.propTypes = {}

export default Create
