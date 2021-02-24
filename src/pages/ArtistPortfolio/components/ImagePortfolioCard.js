import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../../utils/API/axios';

import ImageCarousel from './ImageCarousel';

import '../styles/imagePortfolioCard.css';

const ImagePortfolioCard = _ => {
  let { stallId } = useParams()
  const dispatch = useDispatch()
  const [picturesCollection, setPicturesCollection] = useState([])
  const { showPicture, showPictureId } = useSelector(state => state.pictures)

  useEffect(async () => {
    const { data } = await axios.get(`/artists/${stallId}/pictures`)
    setPicturesCollection(data)
  }, [])


  if (picturesCollection.length > 0) {
    return (
      <div id="ImagePortfolioCard">
        <div className="card shadow" style={{ marginTop: 32, height: '444px', borderRadius: 16, border: 'none' }}>
          <img src={showPicture ? showPicture : picturesCollection[0].link} className="custom-card-image"  />
        </div>

        <div className="d-flex flex-nowrap shadow" style={{ overflowX: 'auto', borderRadius: 16, height: 128, marginTop: 32, backgroundColor: '#fff', border: 'none' }}>
          <div className="d-flex flex-nowrap align-self-center" >
            {picturesCollection.map((picture) => <ImageCarousel picture={picture} key={picture.id}></ImageCarousel>)}
          </div>
        </div>
      </div >
    );
  } else {
    return (
      <div id="ImagePortfolioCard">
        <div className="card bg-dark text-white" style={{ marginTop: 32, height: '444px', borderRadius: 8 }}>
          <img src="https://img.icons8.com/ios/452/no-image.png" className="card-img" style={{ height: '444px', borderRadius: 8, objectFit: 'cover' }} />
        </div>

        <div className="d-flex flex-nowrap " style={{ overflowX: 'auto', borderRadius: 12, height: 128, marginTop: 32, border: 'none' }}>
          <div className="d-flex flex-nowrap align-self-center" >

          </div>
        </div>
      </div >
    )
  }
};

export default ImagePortfolioCard;