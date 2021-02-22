import React from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { showPicture } from '../../utils/store/actions/picturesAction'

// import image from '../../assets/images/placeholder/pla_Card.png'
// import imageDP from '../../assets/images/placeholder/pla_DP.jpg'

const HomeCard = ({ picture }) => {
  const history = useHistory()
  const dispatch = useDispatch()

  function handleGoToArtistPage () {
    history.push(`/stall/${picture.ArtistId}`)
    dispatch(showPicture(picture.link, picture.id, picture.price, picture.name, picture.description, picture.Artist.averageRating))
  }

  return (
    <div id="HomeCard" className="col-6 col-sm-6 col-md-4 col-lg-3 col-xxl-2">
      <div className="card" style={{ width: '100%', borderRadius: 8, marginTop: 8, marginBottom: 8 }}>
        <div className="" style={{ backdropFilter: 'blur(8px)', backgroundColor: '#353535D9', width: 'auto', position: 'absolute', bottom: 100, right: 8, borderRadius: 8 }}>
          <p style={{ textAlign: 'right', margin: 4, fontWeight: 600, color: '#ecf0f1' }}>★{ picture.Artist.averageRating ? picture.Artist.averageRating.toFixed(1) : 'No Rating' }</p>
          <p style={{ margin: 4, fontWeight: 600, color: '#ecf0f1' }}>Rp. {picture.price}</p>
        </div>
        <div onClick={() => handleGoToArtistPage()}>
          <img src={picture.link} className="card-img-top" style={{ height: 256, objectFit: 'cover', borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3" style={{ marginRight: 4 }}>
              <img
                src={picture.Artist.profilePicture}
                className="rounded-circle"
                style={{ width: 56, height: 56, objectFit: 'cover' }}
              />
            </div>
            <div className="col-12 col-sm-8">
              <h5 className="card-title" style={{ width: 'auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{picture.name}</h5>
              <p className="card-text" >test</p>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};

export default HomeCard;