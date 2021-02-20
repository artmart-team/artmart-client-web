import React from 'react';

import ChatCardContainer from './components/ChatCardContainer.js';

const OrderProcess = _ => {
  return (
    <div id="OrderProcess">
      <div id="ImageDescriptionCard" style={{ borderRadius: 8, padding: 32, marginLeft: 64, marginRight: 64 }}>
        <h3>Thank you for ordering.</h3>
        <p>Your order is being processed, please wait for artist's response.</p>

        <ChatCardContainer />
      </div>
    </div>
  );
};

export default OrderProcess;
