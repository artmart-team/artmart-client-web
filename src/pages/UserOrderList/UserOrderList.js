import React from 'react';

import UserOrderListCard from './components/UserOrderListCard.js';

const UserOrderList = _ => {
  return (
    <div id="UserOrderList" style={{ borderRadius: 8, padding: 32, marginLeft: 64, marginRight: 64 }}>
      <h3>Here is your order list!</h3>
      <p>Let's get some coffee while we waiting!</p>


      <div className="container-fluid">
        <div className="row">
          <UserOrderListCard />
        </div>
      </div>
    </div>
  );
};

export default UserOrderList;
