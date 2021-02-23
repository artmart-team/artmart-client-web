import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { fetchOrderByArtistId } from '../../utils/store/actions/ordersAction'
import OrderActiveCard from './components/OrderActiveCard.js';

const OrderActive = _ => {
  const dispatch = useDispatch()
  const { artistOrders } = useSelector(state => state.orders)
  const [filtered, setFiltered] = useState([])
  
  useEffect(() => {
    let filteredOrder = artistOrders.filter(order => {
      return order.accepted && !order.done
    })
    setFiltered(filteredOrder)
  }, [artistOrders])

  useEffect(() => {
    dispatch(fetchOrderByArtistId())
  }, [])

  return (
    <div id="OrderActive" style={{ borderRadius: 8, padding: 32, marginLeft: 64, marginRight: 64 }}>
      <h3>Order on Progress!</h3>
      <p>Let's go! Let's go! We are chased by time!</p>
      {
        filtered.map(order => <OrderActiveCard order={order} key={order.id}></OrderActiveCard>)
      }
    </div>
  );
};

export default OrderActive;
