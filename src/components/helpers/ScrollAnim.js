import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/json/json_scroll.json';

function ScrollAnim () {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Lottie options={defaultOptions} width={64} height={64} style={{ marginTop: 'auto', marginBottom: 'auto' }} />
  )
};

export default ScrollAnim;