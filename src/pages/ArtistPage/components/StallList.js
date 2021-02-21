import React from 'react';

import StallCard from './StallCard.js';

const StallList = _ => {
  return (
    <div id="StallList" className="container-fluid" style={{ marginTop: 32 }}>
      <div className="row" >

        <StallCard />
        <StallCard />
        <StallCard />

      </div>
    </div>
  );
};

export default StallList;
