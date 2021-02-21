import React from 'react';

import image from '../../../assets/images/placeholder/pla_Card.png';

const DetailProduct = _ => {
  return (
    <div id="DetailProduct">
      <div className="card mx-auto" style={{ borderRadius: 8, marginTop: 32 }}>

        <div className="card-body card-header" style={{ padding: 32 }}>
          <div className="row">

            <div className="col-4">
              <img src={image} className="card-img-top" style={{ borderRadius: 8 }} />
            </div>

            <div className="col-8 mb-3">
              <h4>Potato Style Drawing</h4>
              <p>Duration: 5 days</p>
            </div>
          </div>

          <div className="mb-2 mt-4 text-muted" style={{ paddingLeft: 0 }}>
            <div className="d-flex justify-content-between">
              <p style={{ fontWeight: 600, marginBottom: 0 }}>Basic price</p>
              <p style={{ fontWeight: 600, marginBottom: 0 }}>Rp. 100.000</p>
            </div>
          </div>

          <div className="mb-2 mt-2 text-muted" style={{ paddingLeft: 0 }}>
            <div className="d-flex justify-content-between">
              <p style={{ marginBottom: 0 }}>HD Resolution</p>
              <p style={{ marginBottom: 0 }}>+ Rp. 10.000</p>
            </div>
          </div>

          <div className="mb-2 mt-2 text-muted" style={{ paddingLeft: 0 }}>
            <div className="d-flex justify-content-between">
              <p style={{ marginBottom: 0 }}>Full Color</p>
              <p style={{ marginBottom: 0 }}>+ Rp. 10.000</p>
            </div>
          </div>

          <div className="mb-2 mt-2 text-muted" style={{ paddingLeft: 0 }}>
            <div className="d-flex justify-content-between">
              <p style={{ marginBottom: 0 }}>Full Body</p>
              <p style={{ marginBottom: 0 }}>+ Rp. 10.000</p>
            </div>
          </div>

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
        </div>


        {/* <ul className="" >
          <li className="list-group-item text-muted p-3">Enter promo code </li>
          <div className="row px-3 ">
            <div className="col text-muted p-3">Service fee </div>
            <div className="col text-end text-muted p-3 mx-0">$17.75</div>
          </div>
        </ul>


        <div className="row"  >
          <div className="col text-muted mx-1"><h5>Total</h5></div>
          <div className="col text-end text-muted p-1 mx-2"><h5>$16.75</h5></div>
        </div>
        <button type="submit" className="btn btn-success d-flex justify-content-center mx-3 p-2 mb-3">Confirm & Pay</button> */}
        <div style={{ padding: 32 }} >
          <div className="d-flex justify-content-between">
            <p style={{ fontWeight: 600, marginBottom: 8 }}>Total</p>
            <p style={{ fontWeight: 600, marginBottom: 8 }}>Rp. 110.000</p>
          </div>
          <div className="d-flex justify-content-between">
            <p style={{ fontWeight: 400, marginBottom: 8 }}>Service fee</p>
            <p style={{ fontWeight: 400, marginBottom: 8 }}>Rp. 10.000</p>
          </div>
          <button type="submit" className="btn btn-success w-100">Confirm & Pay</button>
        </div>
      </div>


    </div>
  );
};

export default DetailProduct;
