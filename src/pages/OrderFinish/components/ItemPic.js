import React from 'react';

import image from '../../../assets/images/placeholder/pla_Card.png';

const ItemPic = ({ order }) => {

  return (
    <div id="ItemPic">
      <div className="card bg-dark text-white" style={{ height: '315px', borderRadius: 8 }}>
        <img src={order ? order.imageURL : image} className="card-img" style={{ height: '315px', borderRadius: 8, objectFit: 'cover' }} />
      </div>
      <div className="d-flex justify-content-between" style={{ marginTop: 18 }}>
        <div className="align-self-center" >
          <p style={{ marginBottom: 0 }}>Download your order in Full resolution.</p>
        </div>
        <div>
          <button className="btn btn-success">Download</button>
        </div>
      </div>
    </div>
  );
};

export default ItemPic;
