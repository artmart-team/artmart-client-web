import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { BsStarFill } from 'react-icons/bs';

const ThumbnailProduct = _ => {
  const [rating, setRating] = useState(localStorage.getItem('selectedPicRating'))
  const { showPicture } = useSelector(state => state.pictures)

  return (
    <div id="ThumbnailProduct" className="d-flex">
      <div style={{ flex: 1, marginTop: 8 }}>
        <div className="card shadow" style={{ height: '128px', borderRadius: 16 }}>
          <img src={showPicture} className="card-img" style={{ height: '128px', borderRadius: 16, objectFit: 'cover', objectPosition: '50% 35%' }} />
        </div>
      </div>
      <div style={{ flex: 4, marginLeft: 16, marginTop: 8 }}>
        <h1 style={{ width: '50vw', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{localStorage.getItem('selectedPicName')}</h1>
        <div className="d-flex">
          <BsStarFill style={{ marginRight: 8, marginBottom: 2 }} className="align-self-center" />
          <p style={{ margin: 0 }} className="align-self-center">{isNaN(rating) ? 'N/A' : Number(rating).toFixed(1)}</p>
        </div>
        <h6 className="mt-3" style={{ width: '20vw', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{new Date().toLocaleDateString('id-ID')}</h6>
        <ul>
        </ul>
      </div>
    </div>
  );
}

export default ThumbnailProduct;