import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { BsStarFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

import { showPicture } from '../../../utils/store/actions/picturesAction.js';
import image from '../../../assets/images/placeholder/pla_Card.png';

import '../styles/StallCard.css';

const StallCard = ({ props }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleGoToArtistPage = () => {
    history.push(`/stall/${props?.ArtistId}`);
    dispatch(showPicture(props?.link, props?.id, props?.price, props?.name, props?.description, 5));
  };

  return (
    <div id="StallCard" className="col-6 col-sm-6 col-md-4 col-lg-4 col-xxl-4" >
      <div className="custom-card" style={{ borderRadius: 16 }}>
        <div className="" style={{ backdropFilter: 'blur(8px)', backgroundColor: '#353535D9', width: 'auto', position: 'absolute', bottom: 72, right: 20, borderRadius: 8 }}>
          <p style={{ margin: 4, fontWeight: 600, color: '#ecf0f1' }}>Rp. {props?.price?.toLocaleString('id-ID')}</p>
        </div>
        <div style={{ cursor: 'pointer', padding: 8, }}>

          <img
            src={props?.link}
            className="card-img-top shadow"
            style={{ height: 328, objectPosition: '50% 25%', objectFit: 'cover', borderRadius: 12 }}
            onClick={() => handleGoToArtistPage()}
          />

        </div>
        <div className="card-body">
          <div style={{ minWidth: 0, paddingLeft: 24, paddingRight: 24, marginTop: -6 }}>
            <h5 className="custom-card-title" onClick={() => handleGoToArtistPage()}>{props?.name}</h5>
          </div>
        </div>
      </div >
    </div >
  );
};

export default StallCard;
