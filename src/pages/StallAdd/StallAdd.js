import React from 'react';

import StallAddForm from './components/StallAddForm';

const StallAdd = _ => {
  return (
    <div id="StallAdd" style={{ marginLeft: 64, marginRight: 64, marginTop: 32, }}>
      <h1>Post an Art</h1>
      <hr />

      <StallAddForm />
    </div>
  );
};

export default StallAdd;
