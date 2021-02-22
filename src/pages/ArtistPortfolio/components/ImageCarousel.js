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
    <div className="thumbnail-image-container" >
      <div onClick={() => handleImageClick()} className="hover-pointer">
        <img src={picture.link} className="card-img thumbnail-image" />
      </div>
    </div>
  );
};

export default ImageCarousel;