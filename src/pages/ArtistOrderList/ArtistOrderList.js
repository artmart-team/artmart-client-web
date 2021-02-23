import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { fetchOrderByArtistId } from '../../utils/store/actions/ordersAction'
import OrderCard from './components/OrderCard.js';

const ArtistOrderList = _ => {
  const dispatch = useDispatch()
  const { artistOrders } = useSelector(state => state.orders)
  const [filtered, setFiltered] = useState([])
  
  useEffect(() => {
    let filteredOrder = artistOrders.filter(order => {
      return !order.accepted
    })
    setFiltered(filteredOrder)
  }, [artistOrders])

  useEffect(() => {
    dispatch(fetchOrderByArtistId())
  }, [])

  return (
    <div id="ArtistOrderList" style={{ borderRadius: 8, padding: 32, marginLeft: 64, marginRight: 64 }}>
      <h3>Order coming up!</h3>
      <p>It's time to stop procrastinating and get cracking!</p>

      <div className="container-fluid">
        <div className="row">
          {
            filtered.map(order => <OrderCard order={order} key={order.id}></OrderCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default ArtistOrderList;