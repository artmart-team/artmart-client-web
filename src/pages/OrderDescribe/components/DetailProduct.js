import React from 'react';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';

import image from '../../../assets/images/placeholder/pla_Card.png'

const DetailProduct = _ => {
  return (
    <div id="DetailProduct" style={{ height: 'auto', borderRadius: 8, marginTop: 32, marginBottom: 32, padding: 32, }}>

      <h3>Describe your order.</h3>

      <div className="d-flex">
        <div style={{ flex: 1, marginTop: 8 }}>
          <div className="card bg-dark text-white" style={{ height: '190px', borderRadius: 8 }}>
            <img src={image} className="card-img" style={{ height: '190px', borderRadius: 8, objectFit: 'cover' }} />
          </div>
        </div>
        <div style={{ flex: 2, marginLeft: 16, marginTop: 8 }}>
          <h5 style={{ width: '20vw', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Potato Style Drawing</h5>
          <div className="d-flex">
            <BsStarFill style={{ marginRight: 4, marginBottom: 2 }} className="align-self-center" />
            <BsStarFill style={{ marginRight: 4, marginBottom: 2 }} className="align-self-center" />
            <BsStarFill style={{ marginRight: 4, marginBottom: 2 }} className="align-self-center" />
            <BsStarFill style={{ marginRight: 4, marginBottom: 2 }} className="align-self-center" />
            <BsStarHalf style={{ marginRight: 8, marginBottom: 2 }} className="align-self-center" />
            <p style={{ margin: 0 }} className="align-self-center">4.5</p>
          </div>
          <h6 className="mt-2" style={{ width: '20vw', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>What you get:</h6>
          <ul>
            <li>
              HD Resolution
            </li>
            <li>
              Full Color
            </li>
            <li>
              Commercial Use
            </li>
            <li>
              Half Body
            </li>
          </ul>
        </div>
      </div>

    </div >
  );
};

export default DetailProduct;
