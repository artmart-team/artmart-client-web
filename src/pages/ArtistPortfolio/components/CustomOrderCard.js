import React from 'react';
import { useHistory } from 'react-router-dom';

const CustomOrderCard = (props) => {
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();

    console.log(props)
  }

  return (
    <div id="CustomOrderCard" style={{ height: '444px', border: 'thin solid rgba(0, 0, 0, 0.5)', borderRadius: 8, marginTop: 32, padding: 32 }}>
      <div className="d-flex justify-content-between">
        <h5 style={{ marginBottom: 0 }}>Potato Style Drawing</h5>
        <h5 style={{ marginBottom: 0 }}>Rp. 100.000</h5>
      </div>
      <hr />
      <h5 style={{ marginBottom: 16 }}>Available choice</h5>
      <form>
        <div style={{ height: '170px', overflow: 'auto', paddingLeft: 8, paddingRight: 8 }}>

          <div className="mb-2 mt-2 form-check">
            <input type="checkbox" className="form-check-input" id="showPass" />
            <div className="d-flex justify-content-between">
              <label className="form-check-label" htmlFor="showPass">HD Resolution</label>
              <label className="form-check-label" htmlFor="showPass">+ Rp. 10.000</label>
            </div>
          </div>

          <div className="mb-2 mt-2 form-check">
            <input type="checkbox" className="form-check-input" id="showPass" />
            <div className="d-flex justify-content-between">
              <label className="form-check-label" htmlFor="showPass">Full Color</label>
              <label className="form-check-label" htmlFor="showPass">+ Rp. 10.000</label>
            </div>
          </div>

          <div className="mb-2 mt-2 form-check">
            <input type="checkbox" className="form-check-input" id="showPass" />
            <div className="d-flex justify-content-between">
              <label className="form-check-label" htmlFor="showPass">Full Body</label>
              <label className="form-check-label" htmlFor="showPass">+ Rp. 10.000</label>
            </div>
          </div>

          <div className="mb-2 mt-2 form-check">
            <input type="checkbox" className="form-check-input" id="showPass" />
            <div className="d-flex justify-content-between">
              <label className="form-check-label" htmlFor="showPass">Half Body</label>
              <label className="form-check-label" htmlFor="showPass">+ Rp. 10.000</label>
            </div>
          </div>

          <div className="mb-2 mt-2 form-check">
            <input type="checkbox" className="form-check-input" id="showPass" />
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
        <button type="submit" className="btn btn-primary w-100" style={{ borderRadius: 8 }} onClick={e => handleSubmit(e)}>Order Now</button>
      </form>
    </div>
  );
};

export default CustomOrderCard;