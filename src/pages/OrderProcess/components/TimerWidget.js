import React from 'react';

import Timer from './Timer.js';

const TimerWidget = ({ rawTime }) => {

  const time = new Date();
  time.setSeconds(time.getSeconds() + rawTime);

  return (
    <div id="TimerWidget" style={{ border: 'thin solid rgba(0, 0, 0, 0.5)', borderRadius: 8, marginTop: 32, padding: 32 }}>
      <h3>Deadline Time</h3>

      <Timer expiryTimestamp={time} />
    </div>
  );
};

export default TimerWidget;
