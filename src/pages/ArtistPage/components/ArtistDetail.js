import React from 'react';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';

import imageDP from '../../../assets/images/placeholder/pla_DP.jpg';

import '../styles/ArtistDetail.css';

const ArtistDetail = _ => {
  return (
    <div id="ArtistDetail" style={{ marginTop: 32, paddingTop: 8, paddingBottom: 32 }} className="d-flex flex-column">
      <div style={{ width: '100%', height: '100%', textAlign: 'center' }} className="align-self-center">
        <img
          src={imageDP}
          className="circle"
        />
      </div>
      <h3 style={{ marginBottom: 0, marginTop: 24, textAlign: 'center' }}>Satomiz.</h3>
      <p style={{ textAlign: 'center' }}>satomiz@gmail.com</p>
      <div className="d-flex align-self-center" >
        <BsStarFill style={{ marginRight: 4, marginBottom: 2 }} className="align-self-center" />
        <BsStarFill style={{ marginRight: 4, marginBottom: 2 }} className="align-self-center" />
        <BsStarFill style={{ marginRight: 4, marginBottom: 2 }} className="align-self-center" />
        <BsStarFill style={{ marginRight: 4, marginBottom: 2 }} className="align-self-center" />
        <BsStarHalf style={{ marginRight: 8, marginBottom: 2 }} className="align-self-center" />
        <p style={{ margin: 0 }} className="align-self-center">4.5</p>
      </div>
      <button className="btn btn-outline-success w-100" style={{marginTop: 16, borderRadius: 8}}>Contact Me!</button>
      {/* <button className="btn btn-outline-success w-100" style={{marginTop: 16, borderRadius: 8}}>Edit Profile</button> */}
    </div>
  );
};

export default ArtistDetail;
