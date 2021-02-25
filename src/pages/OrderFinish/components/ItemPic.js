import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import image from '../../../assets/images/placeholder/pla_Card.png';

const ItemPic = ({ order }) => {

  return (
    <div id="ItemPic">
      <div className="text-white" style={{ height: '315px', borderRadius: 8 }}>
        {order ?
          <img src={order.imageURL} className="card-img shadow" style={{ height: '315px', borderRadius: 16, objectFit: 'cover' }} /> :
          <SkeletonTheme color="#dedede" highlightColor="#eee">
            <Skeleton height={315} style={{ borderRadius: 16 }} />
          </SkeletonTheme>
        }
      </div>
      <div className="d-flex justify-content-between" style={{ marginTop: 18 }}>
        <div className="align-self-center" >
          <p style={{ marginBottom: 0 }}>Download your order in Full resolution.</p>
        </div>
        <div>
        <a className="btn btn-success" href={order?.imageURL} target="_blank" style={{borderRadius: 12}} role="button">Download</a>
            {/* <button className="btn btn-success" type="button" href={order?.imageURL} >Download</button> */}

        </div>
      </div>
    </div >
  );
};

export default ItemPic;
