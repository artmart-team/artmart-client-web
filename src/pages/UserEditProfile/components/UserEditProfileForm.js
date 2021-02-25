import React from 'react'
import path from '../../../routers/index'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import { editUserProfile } from '../../../utils/store/actions/userAction';
import { Link, useLocation, useHistory } from 'react-router-dom';

import { storage } from '../../../utils/firebase/config'

const UserEditProfileForm = (props) => {
  // init
  const dispatch = useDispatch()
  const history = useHistory()

  let userId = localStorage.getItem('id')
  const [ process, setProcess] = useState(false)
  const [ username, setUsername ] = useState(props.user.username)
  const [ email, setEmail ] = useState(props.user.email)
  const [ firstName, setFirst ] = useState(props.user.firstName)
  const [ lastName, setLast ] = useState(props.user.lastName)
  const [ profile, setProfile ] = useState(props.user.profilePicture)
  const [ errorUname, setErrorUname ] = useState(false)
  const [ errorFirst, setErrorFirst ] = useState(false)
  const [ errorLast, setErrorLast ] = useState(false)
  const [ errorEmail, setErrorEmail ] = useState(false)

  // handle submit
  const handleSubmit = e => {
    e.preventDefault();

    if(!username) {
      setErrorUname(true)
    } else if (!firstName){
      setErrorFirst(true)
    } else if (!lastName){
      setErrorLast(true)
    } else if (!email){
      setErrorEmail(true)
    } else if (process){
      console.log(process)
    } else {
      dispatch(editUserProfile(userId, {
        username : username,
        email : email,
        firstName : firstName,
        lastName : lastName,
        profilePicture : profile
      }))

      history.goBack(`user/${userId}`)
      // location.reload();
    }
  }

  // handle if change and error
  const editUsername = (e) => {
    e.preventDefault()
    if(e.target.value) {
      setErrorUname(false)
    }
    setUsername(e.target.value)
  }

  const editFirst = (e) => {
    e.preventDefault()
    if(e.target.value) {
      setErrorFirst(false)
    }
    setFirst(e.target.value)
  }

  const editLast = (e) => {
    e.preventDefault()
    if(e.target.value) {
      setErrorLast(false)
    }
    setLast(e.target.value)
  }

  const editEmail = (e) => {
    e.preventDefault()
    if(e.target.value) {
      setErrorEmail(false)
    }
    setEmail(e.target.value)
  }

  const editProfile = (e) => {
    if (e.target.files[0]) {
      setProcess(true)
      const image = e.target.files[0]

      const uploadTask = storage.ref(`image/${image.name}`).put(image);
      uploadTask.on(
      "state_changed",
      snapshot => {
        },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("image")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            console.log(url)
            setProcess(false)
            setProfile(url); 
          })
        }
      );
    }
  }

  // console.log(firstName)
  // console.log(profile)
  // console.log(localStorage.getItem('access_token'))

  return (
    <div id="UserEditProfileForm">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
            {errorUname && <p style={{ color : "red" }}>username required</p> }
            <input name="username" type="text" className="form-control" id="username" value={username} onChange={editUsername} readOnly/>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          {errorEmail && <p style={{ color : "red" }}>Email required</p> }
          <input type="email" value={email} onChange={editEmail} className="form-control" id="email" name="email" />
        </div>

        <div className="row mb-3">
          <div className="col-6" style={{ paddingRight: 6 }}>
            <label htmlFor="firstName" className="form-label">First Name</label>
            {errorFirst && <p style={{ color : "red" }}>First Name required</p> }
            <input type="firstName" name="firstName" className="form-control" id="firstName" value={firstName} onChange={editFirst}/>
          </div>
          <div className="col-6" style={{ paddingLeft: 6 }}>
            <label htmlFor="lastName" className="form-label">Last Name</label>
            {errorLast && <p style={{ color : "red" }}>last name required</p> }
            <input type="lastName" name="lastName" className="form-control" id="lastName" value={lastName} onChange={editLast}/>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="link" className="form-label">Upload your image file</label>
          <input className="form-control" type="file" id="link" onChange={editProfile}/>
        </div>
        { process && <p>waiting for upload your profile picture</p>}
        <button type="submit" className="btn btn-primary">Submit</button>
        {/* <Link to={`user/${userId}`}> */}
          <button className="btn btn-danger">Cancel</button>
        {/* </Link> */}
      </form>
    </div>
  )
}

export default UserEditProfileForm
