import React from 'react';

import imageDP2 from '../../../assets/images/placeholder/pla_DP2.jpg';

import '../styles/UserDetail.css';

const UserDetail = _ => {
  return (
    <div id="UserDetail" style={{ marginTop: 32, paddingTop: 8, paddingBottom: 32 }} className="d-flex flex-column">
      <div style={{ width: '100%', height: '100%', textAlign: 'center' }} className="align-self-center">
        <img
          src={imageDP2}
          className="circle"
        />
      </div>
      <h3 style={{ marginBottom: 0, marginTop: 24, textAlign: 'center' }}>Lemond</h3>
      <p style={{ textAlign: 'center' }}>lemondseven@gmail.com</p>
      {/* <button className="btn btn-outline-success w-100" style={{ marginTop: 16, borderRadius: 8 }}>Contact Me!</button> */}
      <button className="btn btn-outline-success w-100" style={{marginTop: 16, borderRadius: 8}}>Edit Profile</button>
    </div>
  );
};

export default UserDetail;