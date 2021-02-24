import React from 'react';
import ArtistEditProfileForm from './components/ArtistEditProfileForm.js';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getOtherUserId, getUserByID } from '../../utils/store/actions/userAction';
import { useHistory, useLocation } from 'react-router-dom';

const ArtistEditProfile = _ => {
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const { otherUser, isLoading, errors} = useSelector(state => state.user)
  const role = pathname.split('/')[1]
  const id = Number(pathname.split('/')[2])


  useEffect(() => {
    dispatch(getOtherUserId(role, id))
  }, [dispatch])


  console.log(otherUser)

  if(isLoading) {
    return (
      <div>
      <h1> Loading </h1>
      </div> 
    ) 
  } else {
    return (
      <div id="ArtistEditProfile" style={{ marginLeft: 64, marginRight: 64, marginTop: 32 }}>
        <h1>Edit Profile</h1>
        <hr />
  
        <ArtistEditProfileForm artist={otherUser} />
      </div>
    );
  }
};

export default ArtistEditProfile;
