'use strict'
import React from 'react'
import RelationshipSelect from '../Shared/RelationshipSelect'
import BigCheckbox from '@essappstate/canopy-react-bigcheckbox'
import yearOptions from '../Shared/YearOptions'
import PropTypes from 'prop-types'

const ParentInfo = ({visitor, update, save}) => {
  return (
    <div>
      <h2>Additional Information</h2>
      <p>
        The following questions are optional but answering them will help us
        with orientation programming.
      </p>
      <div className="row">
        <div className="col-sm-6 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="relationship">
                  What is your relationship to the student?
                </label>
                <RelationshipSelect
                  relation={visitor.relationship}
                  update={(value) => {
                    update('relationship', value)
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="hometown">Your hometown</label>
                <input
                  type="text"
                  placeholder="City, State"
                  className="form-control"
                  name="hometown"
                  value={visitor.hometown}
                  onChange={(e) => update('hometown', e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-3">
          <div className="card">
            <div className="card-body">
              <BigCheckbox
                label="Are you an alum of this university?"
                checked={visitor.alum === 1}
                handle={(e) => {
                  update('alum', e ? 1 : 0)
                  if (!e) {
                    update('gradYear', 0)
                  }
                }}
              />
              <div style={{position: 'relative'}}>
                {visitor.alum === 0 && (
                  <div
                    style={{
                      backgroundColor: 'rgba(255,255,255,.7)',
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                    }}>
                    &nbsp;
                  </div>
                )}
                <div className="form-group mt-3">
                  <label htmlFor="gradYear">
                    If so, what year did you graduate?
                  </label>
                  <select
                    name="gradYear"
                    value={visitor.gradYear}
                    onChange={(e) => {
                      update('gradYear', e.target.value)
                    }}
                    className="form-control">
                    {yearOptions()}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="employer">
                  Name of organization or company where employed
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="employer"
                  value={visitor.employer}
                  onChange={(e) => update('employer', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="position">Your position title</label>
                <input
                  type="text"
                  className="form-control"
                  name="position"
                  value={visitor.position}
                  onChange={(e) => update('position', e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-primary" onClick={save}>
          Save my information and continue
        </button>
      </div>
    </div>
  )
}

ParentInfo.propTypes = {
  visitor: PropTypes.object,
  update: PropTypes.func,
  save: PropTypes.func,
}

export default ParentInfo
