import React from 'react';

import UserEditProfileForm from './components/UserEditProfileForm.js';

const UserEdit = () => {
  return (
    <div id="UserEditProfile" style={{ marginLeft: 64, marginRight: 64, marginTop: 32 }}>
      <h1>Edit Profile</h1>
      <hr />

      <UserEditProfileForm />
    </div>
  )
}

export default UserEdit