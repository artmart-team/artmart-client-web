import React from 'react';

const invoice = _ => {
  return (
    <div id="Invoice">
      <div className="d-flex justify-content-between">
        <h5 style={{ marginBottom: 0 }}>Potato Style Drawing</h5>
        <h5 style={{ marginBottom: 0 }}>Rp. 100.000</h5>
      </div>
      <hr />
      <h5 style={{ marginBottom: 16 }}>Available choice</h5>
      <div>
        <div style={{ height: '210px', overflow: 'auto', paddingLeft: 8, paddingRight: 8 }}>

          <div className="mb-2 mt-2 form-check" style={{paddingLeft: 0}}>
            <div className="d-flex justify-content-between">
              <label className="form-check-label" htmlFor="showPass">HD Resolution</label>
              <label className="form-check-label" htmlFor="showPass">+ Rp. 10.000</label>
            </div>
          </div>

          <div className="mb-2 mt-2 form-check" style={{paddingLeft: 0}}>
            <div className="d-flex justify-content-between">
              <label className="form-check-label" htmlFor="showPass">Full Color</label>
              <label className="form-check-label" htmlFor="showPass">+ Rp. 10.000</label>
            </div>
          </div>

          <div className="mb-2 mt-2 form-check" style={{paddingLeft: 0}}>
            <div className="d-flex justify-content-between">
              <label className="form-check-label" htmlFor="showPass">Full Body</label>
              <label className="form-check-label" htmlFor="showPass">+ Rp. 10.000</label>
            </div>
          </div>

          <div className="mb-2 mt-2 form-check" style={{paddingLeft: 0}}>
            <div className="d-flex justify-content-between">
              <label className="form-check-label" htmlFor="showPass">Half Body</label>
              <label className="form-check-label" htmlFor="showPass">+ Rp. 10.000</label>
            </div>
          </div>

          <div className="mb-2 mt-2 form-check" style={{paddingLeft: 0}}>
            <div className="d-flex justify-content-between">
              <label className="form-check-label" htmlFor="showPass">Commercial Use</label>
              <label className="form-check-label" htmlFor="showPass">+ Rp. 10.000</label>
            </div>
          </div>

          <div className="mb-2 mt-2 form-check" style={{paddingLeft: 0}}>
            <div className="d-flex justify-content-between">
              <label className="form-check-label" htmlFor="showPass">Commercial Use</label>
              <label className="form-check-label" htmlFor="showPass">+ Rp. 10.000</label>
            </div>
          </div>

        </div>

        <hr />
        <div className="d-flex justify-content-between mb-3">
          <label className="form-check-label" style={{ fontWeight: 600 }} htmlFor="showPass">Total</label>
          <label className="form-check-label" style={{ fontWeight: 600 }} htmlFor="showPass">Rp. 110.000</label>
        </div>
      </div>
    </div>
  );
};

export default invoice;