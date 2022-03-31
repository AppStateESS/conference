'use strict'
import PropTypes from 'prop-types'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Contact from './Contact'
import FrontPage from './FrontPage'
import BannerStudent from './BannerStudent'
import Disable from './Disable'
import dayjs from 'dayjs'
import FutureSession from './FutureSession'

/* global $, bannerApiSetting, futureSessionSelection */

export default class Settings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locked: [],
      currentLockedId: 0,
      sessions: [],
      sessionId: 0,
      currentLocked: {},
      error: null,
    }
    this.section = 'Settings'
    this.lockedListing = this.lockedListing.bind(this)
    this.lockThisComputer = this.lockThisComputer.bind(this)
    this.unlockThisComputer = this.unlockThisComputer.bind(this)
  }

  componentDidMount() {
    this.loadLocked()
    this.loadSessions()
  }

  clearError() {
    this.setState({error: null})
  }

  navbarButton() {
    return
  }

  getSearch() {
    return
  }

  loadSessions() {
    $.ajax({
      url: 'conference/Admin/Settings/upcomingSessions',
      data: {},
      dataType: 'json',
      type: 'get',
      success: (data) => {
        this.setState({sessions: data.listing})
      },
      error: () => {},
    })
  }

  unlockThisComputer() {
    $.ajax({
      url: `conference/Admin/Locked/${this.state.currentLockedId}`,
      dataType: 'json',
      type: 'delete',
      success: () => {
        this.loadLocked()
      },
      error: () => {},
    })
  }

  lockThisComputer() {
    const {sessionId} = this.state
    $.ajax({
      url: 'conference/Admin/Locked/selfLock',
      data: {sessionId},
      dataType: 'json',
      type: 'post',
      success: () => {
        this.loadLocked()
      },
      error: () => {},
    })
  }

  loadLocked() {
    $.ajax({
      url: 'conference/Admin/Locked',
      dataType: 'json',
      type: 'get',
      success: (data) => {
        this.setState({
          locked: data.listing,
          currentLockedId: data.currentLockedId,
        })
      },
      error: () => {},
    })
  }

  getError() {
    if (this.state.error) {
      return <div className="alert alert-danger">{this.state.error}</div>
    }
  }

  unlock(key) {
    const id = this.state.locked[key].id
    $.ajax({
      url: `conference/Admin/Locked/${id}`,
      dataType: 'json',
      type: 'delete',
      success: () => {
        this.loadLocked()
      },
      error: () => {},
    })
  }

  lockedListing() {
    const {locked} = this.state
    if (locked.length === 0) {
      return (
        <p>
          <em>No locks found.</em>
        </p>
      )
    } else {
      let rows = locked.map((value, key) => {
        return (
          <tr key={key}>
            <td style={{width: '5%'}}>
              <button
                className="btn btn-success btn-sm"
                onClick={() => {
                  this.unlock(key)
                }}>
                <i className="fas fa-unlock"></i>
              </button>
            </td>
            <td>
              {dayjs(value.eventDate * 1000).format('MM-DD-YYYY')} -{' '}
              {value.title} - {value.ip}
            </td>
          </tr>
        )
      })
      return (
        <table className="table">
          <tbody>{rows}</tbody>
        </table>
      )
    }
  }

  selectSessions() {
    const {sessions, sessionId} = this.state
    if (sessions.length === 0) {
      return <div>No upcoming sessions</div>
    }
    const options = sessions.map((value) => {
      return (
        <option key={value.id} value={value.id}>
          {dayjs(value.eventDate * 1000).format('MM-DD-YYYY')} - {value.title}
        </option>
      )
    })
    let selfLockButton
    if (this.state.currentLockedId > 0) {
      selfLockButton = (
        <button className="btn btn-success" onClick={this.unlockThisComputer}>
          <i className="fas fa-unlock"></i> Unlock this computer
        </button>
      )
    } else {
      selfLockButton = (
        <div className="input-group mb-3">
          <select
            className="form-control"
            value={sessionId.id}
            onChange={(e) => {
              this.setState({sessionId: e.target.value})
            }}>
            <option value="0">Choose an uncoming session below</option>
            {options}
          </select>
          <div className="input-group-append">
            <button
              className="btn btn-danger"
              onClick={this.lockThisComputer}
              disabled={sessionId === 0}>
              <i className="fas fa-lock"></i> Lock this computer to this session
            </button>
          </div>
        </div>
      )
    }
    return (
      <div className="row">
        <div className="col-8 mx-auto text-center">{selfLockButton}</div>
      </div>
    )
  }

  render() {
    const upcomingSessions = this.selectSessions()

    return (
      <div>
        {this.navbar}
        <h2>Settings</h2>
        {this.getError()}
        <Disable />
        <FutureSession futureSessionSelectionSetting={futureSessionSelection} />
        <Contact />
        <FrontPage />
        <BannerStudent bannerApiSetting={bannerApiSetting} />
        <div>
          <h3>Onsite registration</h3>
          <p>
            This option will lock the current computer into onsite registration
            mode. This mode:
          </p>
          <ul>
            <li>Prevents users from paying online, reducing liability.</li>
            <li>Reduces registration to fewer steps.</li>
          </ul>
          <p>
            A default conference <strong>must</strong> be set. If not, normal
            sign up procedure will proceed but visitor will not be able to pay
            offsite.
          </p>
          <h3>Currently onsite systems</h3>
          {this.lockedListing()}
          {upcomingSessions}
        </div>
      </div>
    )
  }
}

Settings.propTypes = {
  locked: PropTypes.string,
}

ReactDOM.render(<Settings />, document.getElementById('Settings'))
