import React from 'react';

import image from '../../../assets/images/placeholder/pla_Card.png';

import '../styles/OrderCard.css';

const OrderCard = _ => {
  return (
    <div id="OrderCard" className="col-12">
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


            <div className="row">
              <div className="col">
                <button className="btn btn-primary w-100">Accept</button>
              </div>
              <div className="col">
                <button className="btn btn-danger w-100">Decline</button>
              </div>
            </div>
          </div>
        </div>

      </div >
    </div >
    // <div id="OrderCard" className="col-12 col-md-6">
    //   <div className="card" style={{ width: '100%', borderRadius: 8, marginTop: 8, marginBottom: 8 }}>
    //     <div className="" style={{ backdropFilter: 'blur(8px)', backgroundColor: '#353535D9', width: 'auto', position: 'absolute', bottom: 154, right: 8, borderRadius: 8 }}>
    //       <p style={{ margin: 4, fontWeight: 600, color: '#ecf0f1' }}>Rp, 200.000</p>
    //     </div>
    //     <img src={image} className="card-img-top" style={{ height: 256, objectFit: 'cover', borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
    //     <div className="card-body">
    //       <h5>Lorem Ipsum</h5>
    //       <p className="description">Est pariatur proident nisi incididunt labore velit non.</p>
    //       <div className="row">
    //         <div className="col">
    //           <button className="btn btn-primary w-100">Accept</button>
    //         </div>
    //         <div className="col">
    //           <button className="btn btn-danger w-100">Decline</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div >
    // </div >
  );
};

export default OrderCard;
