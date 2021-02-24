import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { showPicture } from '../../../utils/store/actions/picturesAction.js';

import image from '../../../assets/images/placeholder/pla_Card.png';
import imageDP from '../../../assets/images/placeholder/pla_DP.jpg';

import '../styles/HomeCard.css';

const HomeCard = ({ picture }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleGoToArtistPage = () => {
    history.push(`/stall/${picture?.ArtistId}`);
    dispatch(showPicture(picture?.link, picture?.id, picture.price, picture.name, picture.description, picture.Artist.averageRating));
  };

  const handleGoToArtistProfile = artistId => {
    history.push(`/artist/${picture?.ArtistId}`);
  }

  return (
    <div id="HomeCard" className="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2" >
      <div className="custom-card" style={{ borderRadius: 16 }}>
        <div className="" style={{ backdropFilter: 'blur(8px)', backgroundColor: '#353535D9', width: 'auto', position: 'absolute', bottom: 135, right: 20, borderRadius: 8 }}>
          <p style={{ margin: 4, fontWeight: 600, color: '#ecf0f1' }}>Rp. {picture?.price.toLocaleString("id-ID")}</p>
        </div>
        <div style={{ position: 'absolute', bottom: 98, left: 38 }}>
          <img
            src={picture?.Artist.profilePicture}
            className="custom-rounded-circle"
            onClick={() => handleGoToArtistProfile(picture?.ArtistId)}
          />
        </div>
        <div style={{ cursor: 'pointer', padding: 8, }} onClick={() => handleGoToArtistPage()}>
          <img src={picture?.link} className="card-img-top shadow" style={{ height: 328, objectPosition: '50% 25%', objectFit: 'cover', borderRadius: 12 }} />
        </div>
        <div className="card-body">
          <div style={{ minWidth: 0, paddingLeft: 24, paddingRight: 24, marginTop: 12 }}>
            <h5 className="custom-card-title" onClick={() => handleGoToArtistPage()}>{picture?.name}</h5>
            <p className="card-text" style={{ minWidth: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: 0 }}>by: {picture?.Artist.username}</p>
            <p className="card-text" style={{ minWidth: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><BsStarFill style={{ marginBottom: 4, marginRight: 8 }} />{picture?.Artist.averageRating ? picture?.Artist.averageRating.toFixed(1) : 'N/A'}</p>
          </div>
        </div>
      </div >
    </div >
    // <div id="HomeCard" className="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2" >
    //   <div className="custom-card" style={{ borderRadius: 16 }}>
    //     <div className="" style={{ backdropFilter: 'blur(8px)', backgroundColor: '#353535D9', width: 'auto', position: 'absolute', bottom: 135, right: 20, borderRadius: 8 }}>
    //       <p style={{ margin: 4, fontWeight: 600, color: '#ecf0f1' }}>Rp. 120.000.000</p>
    //     </div>
    //     <div style={{ position: 'absolute', bottom: 98, left: 38 }}>
    //       <img
    //         src={imageDP}
    //         className="rounded-circle "
    //         style={{ width: 56, height: 56, objectFit: 'cover', border: '4px solid #232b2b' }}
    //       />
    //     </div>
    //     <div style={{ cursor: 'pointer', padding: 8, }}>
    //       <img src={image} className="card-img-top" style={{ height: 328, objectPosition: '50% 25%', objectFit: 'cover', borderRadius: 12 }} />
    //     </div>
    //     <div className="card-body">
    //       <div style={{ minWidth: 0, paddingLeft: 24, paddingRight: 24, marginTop: 12 }}>
    //         <h5 className="card-title" style={{ width: 'auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: 2 }}>Title Picaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h5>
    //         <p className="card-text" style={{ minWidth: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: 0 }}>Artist Name</p>
    //         <p className="card-text" style={{ minWidth: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><BsStarFill style={{ marginBottom: 4, marginRight: 8 }} />5.0</p>
    //       </div>

    //     </div>
    //   </div >
    // </div >
  );
};

export default HomeCard;
