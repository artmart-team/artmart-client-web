import React from 'react';

import ArtistDetail from './components/ArtistDetail.js';
import StallList from './components/StallList.js';

const ArtistPage = _ => {
  return (
    <div id="ArtistPage" style={{ marginLeft: 34, marginRight: 34, height: '100vh' }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <ArtistDetail />
          </div>
          <div className="col-9 align-self-center">
            <StallList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistPage;
