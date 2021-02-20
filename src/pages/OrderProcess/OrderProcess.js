import React from 'react';

import ChatCardContainer from './components/ChatCardContainer.js';
import TimerWidget from './components/TimerWidget.js';

const OrderProcess = _ => {
  return (
    <div id="OrderProcess" style={{ borderRadius: 8, padding: 32, marginLeft: 64, marginRight: 64 }}>
      <h3>Thank you for ordering.</h3>
      <p>Your order is being processed, please wait for artist's response.</p>

      <TimerWidget rawTime={432000} />

      <ChatCardContainer />
    </div>
  );
};

export default OrderProcess;
