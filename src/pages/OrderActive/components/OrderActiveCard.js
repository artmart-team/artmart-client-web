import React from 'react';

import image from '../../../assets/images/placeholder/pla_Card.png';

import '../styles/OrderActiveCard.css';

const OrderActiveCard = _ => {
  return (
    <div id="OrderActiveCard" className="col-12">
      <div className="card" style={{ width: '100%', borderRadius: 8, marginTop: 8, marginBottom: 8 }}>
        <div className="row">
          <div className="col-6" style={{ padding: 0 }}>
            <img src={image} className="card-img-top" style={{ borderTopRightRadius: 0, height: '100%', objectFit: 'cover', borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }} />
          </div>
          <div className="col-6" style={{ padding: 32 }}>
            <h5>Lorem Ipsum</h5>
            <p className="description">Exercitation dolore tempor nulla dolore Lorem proident consequat exercitation non in. Non culpa do qui consectetur voluptate ea esse. Pariatur dolor sit Lorem cupidatat mollit ea ullamco officia consequat duis irure.</p>

            <div className="mb-2 mt-2 text-muted" style={{ paddingLeft: 0 }}>
              <div className="d-flex justify-content-between">
                <p style={{ marginBottom: 0 }}>Half Body</p>
                <p style={{ marginBottom: 0 }}>+ Rp. 10.000</p>
              </div>
            </div>

            <div className="mb-2 mt-2 text-muted" style={{ paddingLeft: 0 }}>
              <div className="d-flex justify-content-between">
                <p style={{ marginBottom: 0 }}>Commercial Use</p>
                <p style={{ marginBottom: 0 }}>+ Rp. 10.000</p>
              </div>
            </div>
            <hr />
            <div className="mb-4 mt-2 text-muted" style={{ paddingLeft: 0 }}>
              <div className="d-flex justify-content-between">
                <p style={{ fontWeight: 600, marginBottom: 0 }}>Total</p>
                <p style={{ fontWeight: 600, marginBottom: 0 }}>Rp. 100.000</p>
              </div>
            </div>

            <button className="btn btn-success w-100">Mark as Done</button>
          </div>
        </div>

      </div >
    </div >
  );
};

export default OrderActiveCard;
