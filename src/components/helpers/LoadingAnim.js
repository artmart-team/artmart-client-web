import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/json/json_loading.json';

function LoadingAnim () {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div id="Branding" style={{ display: 'flex', height: '100vh' }}>
      <div className="container-fluid align-self-center" style={{ marginLeft: 32, marginRight: 32 }}>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <Lottie options={defaultOptions} width={256} height={256} style={{ marginTop: 'auto', marginBottom: 'auto' }} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default LoadingAnim;