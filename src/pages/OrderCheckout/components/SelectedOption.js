import React from 'react';

const SelectedOption = ({ option }) => {
  return (
    <div className="mb-2 mt-4 text-muted" style={{ paddingLeft: 0 }}>
      <div className="d-flex justify-content-between">
        <p style={{ fontWeight: 400, marginBottom: 0 }}>{ option[0] }</p>
        <p style={{ fontWeight: 400, marginBottom: 0 }}>Rp. { option[1]?.toLocaleString('id-ID') }</p>
      </div>
    </div>
  );
};

export default SelectedOption;