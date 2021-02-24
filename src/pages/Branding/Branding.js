import React from 'react';
import { Link } from 'react-router-dom';

import path from '../../routers/index.js';
import illustration from '../../assets/images/img_brandingIllust.svg';
import ScrollAnim from '../../components/helpers/ScrollAnim.js';

import './styles/Branding.css';

const Branding = _ => {
  return (
    <div id="Branding" style={!localStorage.getItem('access_token') ? { display: 'flex' } : { display: 'none' }}>
      <div className="container-fluid align-self-center" style={{ marginLeft: 32, marginRight: 32 }}>
        <div className="row">
          <div className="col-12 col-md-6" style={{ padding: 32 }}>
            <h1>Selling and buying an Art never been this easier!</h1>
            <p>We understand some artists are struggling where to sell their art, also some art appreciator are struggling to where to find a good art to buy. Here <b>mARTerialize</b> is ready to give you a solution.</p>
            <Link to={path.registerCustomer}>
              <button className="btn btn-outline-primary mt-3" style={{ borderRadius: 16 }}>Ready to get started?</button>
            </Link>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div className="scroll-anim">
              <ScrollAnim />
            </div>
            <img className="align-self-center" src={illustration} style={{ width: '95%' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branding;
