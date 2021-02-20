import React from 'react';

import Invoice from './components/Invoice.js';
import ItemPic from './components/ItemPic.js';
import ReviewField from './components/ReviewField.js';

const OrderFinish = _ => {
  return (
    <div id="OrderFinish" style={{ borderRadius: 8, padding: 32, marginLeft: 64, marginRight: 64 }}>
      <h3>Order finished</h3>
      <p>Here is your invoice.</p>

      <div style={{ height: 'auto', backgroundColor: '#dddddd', borderRadius: 8, marginTop: 32, padding: 32 }}>
        <div className="row">

          <div className="col-6">
            <ItemPic />
          </div>

          <div className="col-6">
            <Invoice />
          </div>

        </div>

      </div>
        <ReviewField />
    </div>
  );
};

export default OrderFinish;
