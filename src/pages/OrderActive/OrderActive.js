import React from 'react';

import OrderActiveCard from './components/OrderActiveCard.js';

const OrderActive = _ => {
  return (
    <div id="OrderActive" style={{ borderRadius: 8, padding: 32, marginLeft: 64, marginRight: 64 }}>
      <h3>Order on Progress!</h3>
      <p>Let's go! Let's go! We are chased by time!</p>

      <OrderActiveCard />
    </div>
  );
};

export default OrderActive;
