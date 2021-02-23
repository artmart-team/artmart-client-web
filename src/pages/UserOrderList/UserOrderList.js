import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrdersUsers } from '../../utils/store/actions/orderUserAction.js';

import UserOrderListCard from './components/UserOrderListCard.js';

const UserOrderList = _ => {
  const dispatch = useDispatch()
  const { orders } = useSelector(state => state.userOrders)

  useEffect(() => {
    dispatch(fetchOrdersUsers())
  }, [])

  return (
    <div id="UserOrderList" style={{ borderRadius: 8, padding: 32, marginLeft: 64, marginRight: 64 }}>
      <h3>Here is your order list!</h3>
      <p>Let's get some coffee while we're waiting!</p>

      <div className="container-fluid">
        <div className="row">
          {
            orders.map(order => <UserOrderListCard order={order} key={order.id}></UserOrderListCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default UserOrderList;
