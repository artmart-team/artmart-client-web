import React from 'react';

import UserEditProfileForm from './components/UserEditProfileForm.js';
import path from '../../routers/index'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getOtherUserId, getUserByID } from '../../utils/store/actions/userAction';
import { useHistory, useLocation } from 'react-router-dom';
// import { useState } from 'react';

const UserEdit = () => {

  const dispatch = useDispatch()
  const history = useHistory()
  const { pathname } = useLocation()

  const { otherUser, isLoading, errors} = useSelector(state => state.user)

  const role = pathname.split('/')[1]
  const id = Number(pathname.split('/')[2])

  useEffect(() => {
    dispatch(getOtherUserId(role, id))
  }, [dispatch])

  console.log("dapet disini buat user edit")


  if(isLoading) {
    return (
      <div>
      <h1> Loading </h1>
      </div> 
    ) 
  } else {
    return (
      <div id="UserEditProfile" style={{ marginLeft: 64, marginRight: 64, marginTop: 32 }}>
        <h1>Edit Profile</h1>
        <hr />
  
        <UserEditProfileForm user={otherUser}/>
      </div>
    )
  }
}

export default UserEdit