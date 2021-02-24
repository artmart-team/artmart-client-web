import React from 'react';
import ArtistEditProfileForm from './components/ArtistEditProfileForm.js';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { editProfileArtistSubmit, getUserByID } from '../../utils/store/actions/editProfileArtistAction';
import { useHistory, useLocation } from 'react-router-dom';

const ArtistEditProfile = _ => {
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const { otherArtist, isLoading, errors} = useSelector(state => state.artist)
  const role = pathname.split('/')[1]
  const id = Number(pathname.split('/')[2])
  console.log("🚀 ~ file: ArtistEditProfile.js ~ line 16 ~ otherArtist", otherArtist)

  useEffect(() => {
    dispatch(editProfileArtistSubmit(role, id))
  }, [dispatch])
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
  
        <ArtistEditProfileForm artist={otherArtist} />
      </div>
    );
  }
};

export default ArtistEditProfile;
