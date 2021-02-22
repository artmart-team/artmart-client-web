import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'

import { showPicture } from '../../../utils/store/actions/picturesAction'

import '../styles/imageDescriptionCard.css';

const ImageCarousel = ({ picture }) => {
  const dispatch = useDispatch()

  const handleImageClick = _ => {
    // console.log('clicked', picture.link, picture.id)
    dispatch(showPicture(picture.link, picture.id, picture.price, picture.name, picture.description, picture.ArtistId))
  }

  return (
    <div  style={{ height: 95, width: 137, marginLeft: 8, marginRight: 8, overflowY: 'auto' }} >
      <div onClick={() => handleImageClick()} className="hover-pointer">
        <img src={ picture.link } className="card-img" style={{ height: '100%', borderRadius: 8, objectFit: 'cover' }}/>
      </div>
    </div>
  );
};

export default ImageCarousel;