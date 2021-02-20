import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

import imageDP from '../../../assets/images/placeholder/pla_DP.jpg';

const ArtistProfileCard = _ => {
  return (
    <div id="ArtistProfileCard" style={{ height: 'auto', border: 'thin solid rgba(0, 0, 0, 0.5)', borderRadius: 8, marginTop: 32, padding: 32 }}>
      <div className="row">
        <div className="col-lg-2" style={{ marginRight: 4 }}>
          <img
            src={imageDP}
            className="rounded-circle"
            style={{ width: 60, height: 60, objectFit: 'cover' }}
          />
        </div>
        <div className="col-lg-9">
          <h4 className="card-title" style={{ width: 'auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Satomizu.</h4>
          <div className="d-flex">
            <BsStarFill style={{ marginRight: 4, marginBottom: 2 }} className="align-self-center" />
            <BsStarFill style={{ marginRight: 4, marginBottom: 2 }} className="align-self-center" />
            <BsStarFill style={{ marginRight: 4, marginBottom: 2 }} className="align-self-center" />
            <BsStarFill style={{ marginRight: 4, marginBottom: 2 }} className="align-self-center" />
            <BsStarHalf style={{ marginRight: 8, marginBottom: 2 }} className="align-self-center" />
            <p style={{ margin: 0 }} className="align-self-center">4.5</p>
          </div>
        </div>
        <button className="btn btn-outline-primary w-100 mt-3" style={{ borderRadius: 8 }}>Contact Me!</button>
      </div>
    </div>
  );
};

export default ArtistProfileCard;
