import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../../utils/store/actions/orderUserAction.js';

import OrderList from './components/OrderList.js';
import UserDetail from './components/UserDetail.js';

const UserPage = _ => {
  const dispatch = useDispatch()
  const { orders } = useSelector(state => state.orders)

  useEffect(() => {
    console.log('running fetching')
    dispatch(fetchOrders())
  }, [])

  return(
    <div id="UserPage"  style={{ marginLeft: 64, marginRight: 64 }}>
      <p>{JSON.stringify(orders)}</p>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <UserDetail />
          </div>
          <div className="col-9">
            {/* {orders.map(order => <OrderList key={order.id} order={order} />)} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
