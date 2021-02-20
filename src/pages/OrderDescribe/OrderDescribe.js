import React from 'react';

import ListBuy from './components/ListBuy.js';

const OrderDescribe = _ => {
  return (
    <div id="OrderDescribe" style={{ marginLeft: 64, marginRight: 64 }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
          </div>
          <div className="col-6">
            <ListBuy />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDescribe;
