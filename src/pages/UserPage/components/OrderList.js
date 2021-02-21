import React from 'react';

import OrderCard from './OrderCard.js';

const OrderList = _ => {
  return (
    <div id="StallList" className="container-fluid" style={{ marginTop: 32 }}>
      <div className="row" >

        <OrderCard />

      </div>
    </div>
  );
};

export default OrderList;
