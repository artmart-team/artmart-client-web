import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { fetchOrderByArtistId } from '../../utils/store/actions/ordersAction'
import OrderCard from './components/OrderCard.js';

const ArtistOrderList = _ => {
  const dispatch = useDispatch()
  const { artistOrders } = useSelector(state => state.orders)

  useEffect(() => {
    dispatch(fetchOrderByArtistId())
  }, [])

  return (
    <div id="ArtistOrderList" style={{ borderRadius: 8, paddingTop: 32, marginLeft: 32, marginRight: 32 }}>
      <h3>Order coming up!</h3>
      <p>It's time to stop procrastinating and get cracking!</p>

      <div className="container-fluid">
        <div className="row">
          {
            artistOrders.filter(order => {
              return !order.accepted
            }).map(order => <OrderCard order={order} key={order.id}></OrderCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default ArtistOrderList;