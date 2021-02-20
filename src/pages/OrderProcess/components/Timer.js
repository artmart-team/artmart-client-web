import React from 'react';
import { useTimer } from 'react-timer-hook';

const Timer = ({ expiryTimestamp }) => {

  const {
    seconds,
    minutes,
    hours,
    days
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  return (
    <div style={{ textAlign: 'center' }}>
      <div className="d-flex justify-content-center">
        <div>
          <p style={{ fontSize: 36, marginBottom: 0 }}>D</p>
          <p style={{ fontSize: 86 }}>{days}</p>
        </div>
        <span>
          <p style={{ fontSize: 36, marginBottom: 0 }}>:</p>
          <p style={{ fontSize: 86 }}>:</p>
        </span>
        <div>
          <p style={{ fontSize: 36, marginBottom: 0 }}>H</p>
          <p style={{ fontSize: 86 }}>{hours}</p>
        </div>
        <span>
          <p style={{ fontSize: 36, marginBottom: 0 }}>:</p>
          <p style={{ fontSize: 86 }}>:</p>
        </span>
        <div>
          <p style={{ fontSize: 36, marginBottom: 0 }}>M</p>
          <p style={{ fontSize: 86 }}>{minutes}</p>
        </div>
        <span>
          <p style={{ fontSize: 36, marginBottom: 0 }}>:</p>
          <p style={{ fontSize: 86 }}>:</p>
        </span>
        <div>
          <p style={{ fontSize: 36, marginBottom: 0 }}>S</p>
          <p style={{ fontSize: 86 }}>{seconds}</p>
        </div>
      </div>
    </div>
  );
};

export default Timer;
