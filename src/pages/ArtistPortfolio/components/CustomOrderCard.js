import React from 'react';

const CustomOrderCard = _ => {
  return (
    <div id="CustomOrderCard" style={{ backgroundColor: 'tomato' }}>
      <div className="d-flex justify-content-between">
        <h1>INI KIRI</h1>
        <h1>INI KANAN</h1>
      </div>
      <hr />
      <h4>TEST</h4>
      <form>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="showPass" />
          <label className="form-check-label" htmlFor="showPass">Show Password</label>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="showPass" />
          <label className="form-check-label" htmlFor="showPass">Show Password</label>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="showPass" />
          <label className="form-check-label" htmlFor="showPass">Show Password</label>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="showPass" />
          <label className="form-check-label" htmlFor="showPass">Show Password</label>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="showPass" />
          <label className="form-check-label" htmlFor="showPass">Show Password</label>
        </div>
        <button type="submit" className="btn btn-primary w-100" >Order Now</button>
      </form>
    </div>
  );
};

export default CustomOrderCard;
