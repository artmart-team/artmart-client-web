import React from 'react';

import ArtistEditProfileForm from './components/ArtistEditProfileForm.js';

const ArtistEditProfile = _ => {
  return (
    <div id="ArtistEditProfile" style={{ marginLeft: 64, marginRight: 64, marginTop: 32 }}>
      <h1>Edit Profile</h1>
      <hr />

      <ArtistEditProfileForm />
    </div>
  );
};

export default ArtistEditProfile;
