import React from 'react';
import { Link } from 'react-router-dom';

import image from '../../../assets/images/placeholder/pla_Card.png';

const StallCard = ({ props }) => {

  console.log(props)

  console.log(props, '<<< DI PROPS')
  return (
    <div id="StallCard" className="col-6 col-sm-6 col-md-4 col-lg-4 col-xxl-2">
      <div className="card" style={{ width: '100%', borderRadius: 8, marginTop: 8, marginBottom: 8 }}>
        <div className="" style={{ backdropFilter: 'blur(8px)', backgroundColor: '#353535D9', width: 'auto', position: 'absolute', bottom: 64, right: 8, borderRadius: 8 }}>
          <p style={{ margin: 4, fontWeight: 600, color: '#ecf0f1' }}>Rp. {props.price}</p>
        </div>
        <Link to={`/stall/${props.ArtistId}`}>
          <img src={props.link} className="card-img-top" style={{ height: 256, objectFit: 'cover', borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
        </Link>
        <div className="card-body">
          <div className="row">
            <Link to={`/stall/${props.ArtistId}`} style={{textDecoration: 'none'}}>
              <h5 className="card-title" style={{ width: 'auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: 0 }}>{props.name}</h5>
            </Link>
          </div>
        </div>
      </div >
    </div >
  );
};

export default StallCard;
