import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ImageProduct = _ => {
  const [duration, setDuration] = useState(0);
  const { artistId } = useParams()
  useEffect(async () => {
    let { data } = await axios.get(`https://marterialize.herokuapp.com/artists/${artistId}`)

    setDuration(data.completeDuration)
  }, []);

  return (
    <div id="ImagePortfolioCard">
      <div className="card shadow" style={{ marginTop: 32, marginBottom: 16, height: '444px', borderRadius: 16, border: 'none' }}>
        <img src={localStorage.getItem('selectedPicLink')} className="custom-card-image" />
      </div>

      <h1>{localStorage.getItem('selectedPicName')}</h1>
      <p>Duration: {duration} days</p>
    </div >
  );
};

export default ImageProduct;
