import React from 'react';

import ArtistDetail from './components/ArtistDetail.js';
import StallList from './components/StallList.js';

const ArtistPage = _ => {
  return (
    <div id="ArtistPage" style={{ marginLeft: 64, marginRight: 64 }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <ArtistDetail />
          </div>
          <div className="col-9">
            <StallList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistPage;
