import React from 'react';

import ArtistProfileCard from './components/ArtistProfileCard.js';
import CustomOrderCard from './components/CustomOrderCard.js';
import ImageDescriptionCard from './components/ImageDescriptionCard.js';
import ImagePortfolioCard from './components/ImagePortfolioCard.js';

const ArtistPortfolio = _ => {
  return (
    <div id="ArtistPortfolio" style={{ marginLeft: 64, marginRight: 64 }}>
      <div className="container-fluid">
        <div className="row">
          {/* This is for Left Side */}
          <div className="col-6">
            <ImagePortfolioCard />
            <ArtistProfileCard />
          </div>
          {/* This is for Right Side */}
          <div className="col-6">
            <CustomOrderCard />
            <ImageDescriptionCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistPortfolio;
