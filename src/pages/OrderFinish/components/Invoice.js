import React from 'react';

const Invoice = _ => {
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
              <p style={{ marginBottom: 0 }}>HD Resolution</p>
              <p style={{ marginBottom: 0 }}>+ Rp. 10.000</p>
            </div>
          </div>

          <div className="mb-2 mt-2 form-check" style={{paddingLeft: 0}}>
            <div className="d-flex justify-content-between">
              <p style={{ marginBottom: 0 }}>Full Color</p>
              <p style={{ marginBottom: 0 }}>+ Rp. 10.000</p>
            </div>
          </div>

          <div className="mb-2 mt-2 form-check" style={{paddingLeft: 0}}>
            <div className="d-flex justify-content-between">
              <p style={{ marginBottom: 0 }}>Full Body</p>
              <p style={{ marginBottom: 0 }}>+ Rp. 10.000</p>
            </div>
          </div>

          <div className="mb-2 mt-2 form-check" style={{paddingLeft: 0}}>
            <div className="d-flex justify-content-between">
              <p style={{ marginBottom: 0 }}>Half Body</p>
              <p style={{ marginBottom: 0 }}>+ Rp. 10.000</p>
            </div>
          </div>

          <div className="mb-2 mt-2 form-check" style={{paddingLeft: 0}}>
            <div className="d-flex justify-content-between">
              <p style={{ marginBottom: 0 }}>Commercial Use</p>
              <p style={{ marginBottom: 0 }}>+ Rp. 10.000</p>
            </div>
          </div>

        </div>

        <hr />
        <div className="d-flex justify-content-between mb-3">
          <p style={{ fontWeight: 600, marginBottom: 0 }}>Total</p>
          <p style={{ fontWeight: 600, marginBottom: 0 }}>Rp. 110.000</p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;