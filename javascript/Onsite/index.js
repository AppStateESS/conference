'use strict'
import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import StartRegistration from './StartRegistration'
import CreateAccount from './CreateAccount'
import StudentSignin from './StudentSignin'
import ChooseParent from './ChooseParent'
import StudentInfo from './StudentInfo'
import Login from './Login'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'

/* global $, sessionId */

const Onsite = () => {
  const [stage, setStage] = useState('studentSignin')
  const [student, setStudent] = useState({id: 0})
  const [visitor, setVisitor] = useState({})
  const [parents, setParents] = useState([])
  const [loading, setLoading] = useState(false)
  const [hasRegistration, setHasRegistration] = useState({id: 0})
  const [loadingMessage, setLoadingMessage] = useState('Loading...')

  // const emptyVisitor = {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   phone: ''
  // }

  let resetTimeout

  const resetTimer = () => {
    clearTimeout(resetTimeout)
    resetTimeout = setTimeout(() => {
      resetLoading()
      setStudent({id: 0})
      setVisitor({})
      setParents([])
      logout()
      setStage('studentSignin')
    }, 8000)
  }

  const logout = () => {
    $.ajax({
      url: 'conference/Visitor/Onsite/Logout',
      dataType: 'json',
      type: 'get',
    })
  }

  const resetLoading = () => {
    setLoading(false)
    setLoadingMessage('Loading...')
  }

  const setParent = (parentKey) => {
    if (parentKey == -1) {
      setStage('createAccount')
      return
    }
    setLoading(true)
    setLoadingMessage('Creating new account')
    const parent = parents[parentKey]
    const newVisitor = {
      firstName: parent.prefFirstName ?? parent.firstName,
      lastName: parent.lastName,
      email: parent.emailAddress,
      address1: parent.streetLine1 ?? '',
      address2: parent.streetLine2 ?? '',
      city: parent.city ?? '',
      state: parent.stateCode ?? '',
      zip: parent.zip ?? '',
      phone: (parent.phoneArea ?? '') + parent.phoneNumber ?? '',
      studentId: student.id,
      sessionId,
    }
    $.ajax({
      url: 'conference/User/Onsite/createVisitor',
      data: newVisitor,
      dataType: 'json',
      type: 'post',
      success: (data) => {
        setVisitor(data.visitor)
        if (data['found']) {
          setStage('login')
          setHasRegistration(data.hasRegistration)
        } else {
          setStage('startRegistration')
        }
        resetLoading()
      },
      error: () => {
        setStage('error')
        resetTimer()
      },
    })
  }

  const getStage = () => {
    switch (stage) {
      case 'studentSignin':
        return (
          <StudentSignin
            setStage={setStage}
            setStudent={setStudent}
            setParents={setParents}
            student={student}
          />
        )

      case 'createAccount':
        return <CreateAccount setStage={setStage} setVisitor={setVisitor} />

      case 'chooseParent':
        return <ChooseParent setParent={setParent} parents={parents} />

      case 'login':
        return (
          <Login
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
