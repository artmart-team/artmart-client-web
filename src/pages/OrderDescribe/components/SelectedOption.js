import React from 'react';

const SelectedOption = ({ option }) => {
  return (
    <div className="mb-2 mt-2 form-check" style={{ paddingLeft: 0 }}>
      <div className="d-flex justify-content-between">
        <label className="form-check-label" htmlFor="showPass">{ option[0] }</label>
        <label className="form-check-label" htmlFor="showPass">+ Rp. { option[1] }</label>
      </div>
  </div>
  );
};

export default SelectedOption;