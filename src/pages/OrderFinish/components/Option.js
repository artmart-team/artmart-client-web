import React from 'react';


const Option = ({ option }) => {
  return (
    <div className="mb-2 mt-2 form-check" style={{paddingLeft: 0}}>
      <div className="d-flex justify-content-between">
        <p style={{ marginBottom: 0 }}>{ option[0] }</p>
        <p style={{ marginBottom: 0 }}>+ Rp. { option[1]?.toLocaleString('id-ID') }</p>
      </div>
    </div>
  )
};

export default Option;