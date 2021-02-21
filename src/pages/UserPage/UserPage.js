import React from 'react';

import OrderList from './components/OrderList.js';
import UserDetail from './components/UserDetail.js';

const UserPage = _ => {
  return(
    <div id="UserPage"  style={{ marginLeft: 64, marginRight: 64 }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <UserDetail />
          </div>
          <div className="col-9">
            <OrderList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
