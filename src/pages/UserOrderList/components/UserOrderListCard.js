import React from 'react';
import { Link } from 'react-router-dom';

import image from '../../../assets/images/placeholder/pla_Card.png';

import '../styles/UserOrderListCard.css';

const UserOrderListCard = _ => {
  return (
    <div id="UserOrderListCard" className="col-12">
      <div className="card" style={{ width: '100%', borderRadius: 8, marginTop: 8, marginBottom: 8 }}>
        <div className="row">
          <div className="col-6" style={{ padding: 0 }}>
            <img src={image} className="card-img-top" style={{ borderTopRightRadius: 0, height: '100%', objectFit: 'cover', borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }} />
          </div>
          <div className="col-6" style={{ padding: 32 }}>
            <div className="d-flex justify-content-between" style={{ marginBottom: 12 }}>
              <h5 className="align-self-center" style={{ margin: 0 }}>Lorem Ipsum</h5>
              <span class="badge rounded-pill bg-danger align-self-center"><p style={{margin: 0}}>Unpaid</p></span>
              {/* <span class="badge rounded-pill bg-secondary align-self-center"><p style={{margin: 0}}>Pending</p></span> */}
              {/* <span class="badge rounded-pill bg-success align-self-center"><p style={{ margin: 0 }}>Paid</p></span> */}
            </div>
            <p className="description">Exercitation dolore tempor nulla dolore Lorem proident consequat exercitation non in. Non culpa do qui consectetur voluptate ea esse. Pariatur dolor sit Lorem cupidatat mollit ea ullamco officia consequat duis irure.</p>


            <div className="mb-4 mt-2 text-muted" style={{ paddingLeft: 0 }}>
              <div className="d-flex justify-content-between">
                <p style={{ fontWeight: 600, marginBottom: 0 }}>Total</p>
                <p style={{ fontWeight: 600, marginBottom: 0 }}>Rp. 100.000</p>
              </div>
            </div>


            <hr />


            <div className="d-flex" style={{marginBottom: 32, marginTop: 28}}>
              <div style={{ marginRight: 4, flex: 1 }}>
                <Link to={`/artist/3`}>
                  <img
                    src={image}
                    className="rounded-circle"
                    style={{ width: 56, height: 56, objectFit: 'cover' }}
                  />
                </Link>
              </div>
              <div style={{ flex: 6, minWidth: 0 }}>
                <Link to={`/stall/3`} style={{ textDecoration: 'none' }}>
                  <h5 className="card-title" style={{ width: 'auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Lorem Ipsum Dolor Sit Amet</h5>
                </Link>
                <p className="card-text" style={{ minWidth: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Si Mesum dan Jamet</p>
              </div>

            </div>


            <div className="row">
              <div className="col">
                <button className="btn btn-primary w-100">Pay</button>
              </div>
              {/** Kalo belom selesai ada cancelation */}
              <div className="col">
                <button className="btn btn-danger w-100">Cancel</button>
              </div>
              {/** Kalo udah selesai ada bisa download filenya */}
              {/* <div className="col">
                <button className="btn btn-success w-100">Download</button>
              </div> */}
            </div>
          </div>
        </div>

      </div >
    </div >
  );
};

export default UserOrderListCard;
