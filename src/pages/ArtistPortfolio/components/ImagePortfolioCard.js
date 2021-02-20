import React from 'react';

import image from '../../../assets/images/placeholder/pla_Card.png';
import image2 from '../../../assets/images/placeholder/pla_Card2.png';
import image3 from '../../../assets/images/placeholder/pla_Card3.png';

const ImagePortfolioCard = _ => {
  return (
    <div id="ImagePortfolioCard">
      <div className="card bg-dark text-white" style={{ marginTop: 32, height: '444px', borderRadius: 8 }}>
        <img src={image} className="card-img" style={{ height: '444px', borderRadius: 8, objectFit: 'cover' }} />
        <div className="card-img-overlay">
          <button className="btn btn-success shadow" style={{ position: 'absolute', bottom: 16, right: 16, borderRadius: 8 }}> Commission in this style</button>
        </div>
      </div>

      <div className="d-flex flex-nowrap " style={{ overflowX: 'auto', borderRadius: 8, height: 128, marginTop: 32, border: 'thin solid rgba(0, 0, 0, 0.5)' }}>
        <div className="d-flex flex-nowrap align-self-center" >
          <div style={{ height: 95, width: 137, marginLeft: 8, marginRight: 8, overflowY: 'auto' }} >
            <img src={image} className="card-img" style={{ height: '100%', borderRadius: 8, objectFit: 'cover' }} />
          </div>
          <div style={{ height: 95, width: 137, marginLeft: 8, marginRight: 8, overflowY: 'auto' }} >
            <img src={image2} className="card-img" style={{ height: '100%', borderRadius: 8, objectFit: 'cover' }} />
          </div>
          <div style={{ height: 95, width: 137, marginLeft: 8, marginRight: 8, overflowY: 'auto' }} >
            <img src={image3} className="card-img" style={{ height: '100%', borderRadius: 8, objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </div >
  );
};

export default ImagePortfolioCard;