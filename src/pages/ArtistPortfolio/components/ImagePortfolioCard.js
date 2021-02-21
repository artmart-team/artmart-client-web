import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import image from '../../../assets/images/placeholder/pla_Card.png';
import image2 from '../../../assets/images/placeholder/pla_Card2.png';
import image3 from '../../../assets/images/placeholder/pla_Card3.png';

const ImagePortfolioCard = _ => {
  const dispatch = useDispatch()
  const [show, setShow] = useState('')

  useEffect(() => {
    console.log('nice effect')
    // dispatch(handleImageClick())
  }, [show])

  const handleImageClick = image => {
    console.log(image)
    setShow(image)
  }

  return (
    <div id="ImagePortfolioCard">
      console.log({show})
      <div className="card bg-dark text-white" style={{ marginTop: 32, height: '444px', borderRadius: 8 }}>
        <img src={show} className="card-img" style={{ height: '444px', borderRadius: 8, objectFit: 'cover' }} />
        <div className="card-img-overlay">
          <button className="btn btn-success shadow" style={{ position: 'absolute', bottom: 16, right: 16, borderRadius: 8 }}> Commission in this style</button>
        </div>
      </div>

      <div className="d-flex flex-nowrap " style={{ overflowX: 'auto', borderRadius: 8, height: 128, marginTop: 32, border: 'thin solid rgba(0, 0, 0, 0.5)' }}>
        <div className="d-flex flex-nowrap align-self-center" >
          <div  style={{ height: 95, width: 137, marginLeft: 8, marginRight: 8, overflowY: 'auto' }} >
            <Link onClick={() => handleImageClick(image)} className={setShow === "image" ? console.log('bener') : console.log('salah1')}>
              <img src={image} className="card-img" style={{ height: '100%', borderRadius: 8, objectFit: 'cover' }} />
            </Link>
          </div>
          <div style={{ height: 95, width: 137, marginLeft: 8, marginRight: 8, overflowY: 'auto' }} >
            <Link onClick={() => handleImageClick(image2)} className={setShow === "image2" ? console.log('bener') : console.log('salah2')}>
              <img src={image2} className="card-img" style={{ height: '100%', borderRadius: 8, objectFit: 'cover' }} />
            </Link>
          </div>
          <div style={{ height: 95, width: 137, marginLeft: 8, marginRight: 8, overflowY: 'auto' }} >
            <Link onClick={() => handleImageClick(image3)} className={setShow === "image3" ? console.log('bener') : console.log('salah3')}>
              <img src={image3} className="card-img" style={{ height: '100%', borderRadius: 8, objectFit: 'cover' }} />
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
};

export default ImagePortfolioCard;