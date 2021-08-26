'use strict'
import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import StartRegistration from './StartRegistration'
import CreateAccount from './CreateAccount'
import StudentSignin from './StudentSignin'
import StudentInfo from './StudentInfo'
import Login from './Login'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'

/* global sessionId */

const Onsite = () => {
  const [stage, setStage] = useState('studentSignin')
  const [student, setStudent] = useState({id: 0})
  const [visitor, setVisitor] = useState({})
  const [loading, setLoading] = useState(false)
  const [hasRegistration, setHasRegistration] = useState({id: 0, completed: 0})
  const [loadingMessage, setLoadingMessage] = useState('Loading...')

  const getStage = () => {
    switch (stage) {
      case 'studentSignin':
        return (
          <StudentSignin
            setStage={setStage}
            setStudent={setStudent}
            sessionId={sessionId}
            student={student}
          />
        )

      case 'createAccount':
        return <CreateAccount setStage={setStage} setVisitor={setVisitor} />

      case 'login':
        return (
          <Login
            sessionId={sessionId}
            setStage={setStage}
            email={visitor.email}
            hasRegistration={hasRegistration}
          />
        )

      case 'startRegistration':
        return (
          <StartRegistration sessionId={sessionId} studentId={student.id} />
        )

      case 'error':
        return (
          <div className="alert alert-danger mt-3">
            <h3>Sorry</h3>
            <p>
              We experienced an error when trying to process your information.
              <br />
              Please speak with a representative for help.
            </p>
          </div>
        )
    }
  }

  let loadingScreen
  if (loading) {
    loadingScreen = (
      <div className="text-center lead pt-5 pb-5">
        <FontAwesomeIcon icon={faSpinner} spin />
        &nbsp;{loadingMessage}
      </div>
    )
  }

  return (
    <div>
      <div className="row">
        <div className="col-lg-6 col-md-8 mx-auto">
          <div className="card">
            <div className="card-header">
              <h2 className="mb-0">Onsite Registration</h2>
              <StudentInfo student={student} />
              {loadingScreen}
              {getStage()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<Onsite />, document.getElementById('Onsite'))
