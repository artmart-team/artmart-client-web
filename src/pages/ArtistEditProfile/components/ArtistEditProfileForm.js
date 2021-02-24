import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editProfileArtistSubmit } from '../../../utils/store/actions/editProfileArtistAction.js';

const ArtistEditProfileForm = _ => {
  const { artistId } = useParams();
  const ArtistId = Number(artistId)
  const dispatch = useDispatch();

  const handleEditProfileArtist = e => {
    e.preventDefault()
    const payload = {
      username: e?.target?.username.value,
      firstname: e?.target?.firstname.value,
      lastname: e?.target?.lastname.value,
      email: e?.target?.email.value,
      profilePicture: e?.target?.profilePicture.value
    }

    dispatch(editProfileArtistSubmit(payload, ArtistId));
    e.target.username.value = '';
    e.target.firstname.value = '';
    e.target.lastname.value = '';
    e.target.email.value = '';
    e.target.profilePicture.value = '';
  }

  return (
    <div id="ArtistEditProfileForm">
      <form onSubmit={handleEditProfileArtist}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input name="username" type="text" className="form-control" id="username" placeholder="Shojozaki"/>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" placeholder="shojo.nozaki.kun@mail.com" />
        </div>

        <div className="row mb-3">
          <div className="col-6" style={{ paddingRight: 6 }}>
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input type="firstName" name="firstname" className="form-control" id="firstName" placeholder="Shojo" />
          </div>
          <div className="col-6" style={{ paddingLeft: 6 }}>
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input type="lastName" name="lastname" className="form-control" id="lastName" placeholder="Nozaki" />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="link" className="form-label">Upload your image file</label>
          <input className="form-control" name="profilePicture" type="link" id="link" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ArtistEditProfileForm;
