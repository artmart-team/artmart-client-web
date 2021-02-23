import React from 'react';

import SubmitCommissionForm from './components/SubmitCommissionForm.js';

const SubmitCommission = _ => {
  return (
    <div id="SubmitCommission" style={{ marginLeft: 64, marginRight: 64, marginTop: 32, }}>
      <h1>Submit your commission</h1>
      <hr />

      <SubmitCommissionForm />
    </div>
  );
};

export default SubmitCommission;
