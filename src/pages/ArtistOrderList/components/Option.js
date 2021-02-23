import React from 'react';


const ArtistOrderList = ({ option }) => {
  return (
    <div className="mb-2 mt-2 text-muted" style={{ paddingLeft: 0 }}>
      <div className="d-flex justify-content-between">
        <p style={{ marginBottom: 0 }}>{ option[0] }</p>
        <p style={{ marginBottom: 0 }}>+ Rp. { option[1] }</p>
      </div>
    </div>
  );
};

export default ArtistOrderList;