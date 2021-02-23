import React from 'react';

import OrderCard from './components/OrderCard.js';

const ArtistOrderList = _ => {
  return (
    <div id="ArtistOrderList" style={{ borderRadius: 8, padding: 32, marginLeft: 64, marginRight: 64 }}>
      <h3>Order coming up!</h3>
      <p>It's time to stop procrastinating and get cracking!</p>


      <div className="container-fluid">
        <div className="row">
          <OrderCard />
        </div>
      </div>
    </div>
  );
};

export default ArtistOrderList;