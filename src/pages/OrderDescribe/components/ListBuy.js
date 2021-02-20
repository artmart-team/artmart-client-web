import React from 'react';

const ListBuy = _ => {
  return (
    <div id="ListBuy" style={{ height: '516px', border: 'thin solid rgba(0, 0, 0, 0.5)', borderRadius: 8, marginTop: 32, padding: 32 }}>

      <div className="d-flex justify-content-between">
        <h5 style={{ marginBottom: 0 }}>Potato Style Drawing</h5>
        <h5 style={{ marginBottom: 0 }}>Rp. 100.000</h5>
      </div>
      <hr />
      <h5 style={{ marginBottom: 16 }}>Available choice</h5>
      <div>
        <div style={{ height: '210px', overflow: 'auto', paddingLeft: 8, paddingRight: 8 }}>

          <div className="mb-2 mt-2 form-check" style={{ paddingLeft: 0 }}>
            <div className="d-flex justify-content-between">
              <label className="form-check-label" htmlFor="showPass">HD Resolution</label>
              <label className="form-check-label" htmlFor="showPass">+ Rp. 10.000</label>
            </div>
          </div>

          <div className="mb-2 mt-2 form-check" style={{ paddingLeft: 0 }}>
            <div className="d-flex justify-content-between">
              <label className="form-check-label" htmlFor="showPass">Full Color</label>
              <label className="form-check-label" htmlFor="showPass">+ Rp. 10.000</label>
            </div>
          </div>

          <div className="mb-2 mt-2 form-check" style={{ paddingLeft: 0 }}>
            <div className="d-flex justify-content-between">
              <label className="form-check-label" htmlFor="showPass">Full Body</label>
              <label className="form-check-label" htmlFor="showPass">+ Rp. 10.000</label>
            </div>
          </div>

          <div className="mb-2 mt-2 form-check" style={{ paddingLeft: 0 }}>
            <div className="d-flex justify-content-between">
              <label className="form-check-label" htmlFor="showPass">Half Body</label>
              <label className="form-check-label" htmlFor="showPass">+ Rp. 10.000</label>
            </div>
          </div>

          <div className="mb-2 mt-2 form-check" style={{ paddingLeft: 0 }}>
            <div className="d-flex justify-content-between">
              <label className="form-check-label" htmlFor="showPass">Commercial Use</label>
              <label className="form-check-label" htmlFor="showPass">+ Rp. 10.000</label>
            </div>
          </div>

          <div className="mb-2 mt-2 form-check" style={{ paddingLeft: 0 }}>
            <div className="d-flex justify-content-between">
              <label className="form-check-label" htmlFor="showPass">Commercial Use</label>
              <label className="form-check-label" htmlFor="showPass">+ Rp. 10.000</label>
            </div>
          </div>

        </div>

        <hr />
        <div className="d-flex justify-content-between ">
          <label className="form-check-label" style={{ fontWeight: 600 }} htmlFor="showPass">Total</label>
          <label className="form-check-label" style={{ fontWeight: 600 }} htmlFor="showPass">Rp. 110.000</label>
        </div>

        <div className="mb-2 mt-2 form-check" style={{ paddingLeft: 0 }}>
          <div className="d-flex justify-content-between">
            <label className="form-check-label" htmlFor="showPass">Service fee</label>
            <label className="form-check-label" htmlFor="showPass">+ Rp. 10.000</label>
          </div>
        </div>

        <button className="btn btn-primary w-100">Order now!</button>
      </div>
    </div>
  );
};

export default ListBuy;