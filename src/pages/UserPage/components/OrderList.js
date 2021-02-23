import React from 'react';

import OrderCard from './OrderCard.js';

const OrderList = ({ order }) => {
  return (
    <div id="StallList" className="container-fluid" style={{ marginTop: 32 }}>
      <div className="row" >
        <p>Check</p>
        <p>{JSON.stringify(order)}</p>
        <OrderCard />

      </div>
    </div>
  );
};

export default OrderList;
