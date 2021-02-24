import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrdersUsers } from '../../utils/store/actions/orderUserAction.js';

import UserOrderListCard from './components/UserOrderListCard.js';

const UserOrderList = _ => {
  const dispatch = useDispatch()
  const { orders } = useSelector(state => state.userOrders)
  const [filteredOrders, setFilteredOrders] = useState([])
  const [currentFilter, setCurrentFilter] = useState('all')

  useEffect(() => {
    dispatch(fetchOrdersUsers())
  }, [])

  useEffect(() => {
    if (currentFilter === 'all') {
      setFilteredOrders(orders)
    }
  }, [orders])


  function handleFilterChange (e) {
    let value = e.target.value
    let filtered = []

    switch (value) {
      case "all":
        setFilteredOrders(orders)
        break;
      case "unpaid":
        filtered = orders.filter(order => {
          return !order.paid
        })
        setFilteredOrders(filtered)
        break;
      case "paid":
        filtered = orders.filter(order => {
          return !order.accepted && order.paid
        })
        setFilteredOrders(filtered)
        break;
      case "pending":
        filtered = orders.filter(order => {
          return order.accepted && !order.done
        })
        setFilteredOrders(filtered)
        break;    
      case "done":
        filtered = orders.filter(order => {
          return order.done
        })
        setFilteredOrders(filtered)
        break;   
      default:
        filtered = orders.filter(order => {
          return order.ReviewId
        })
        setFilteredOrders(filtered)
    }
  }

  return (
    <div id="UserOrderList" style={{ borderRadius: 8, padding: 32, marginLeft: 64, marginRight: 64 }}>
      <h3>Here is your order list!</h3>
      <p>Let's get some coffee while we're waiting!</p>
      <label>Filter</label>
      <select onChange={(e) => handleFilterChange(e)} defaultValue="all">
        <option value="all">All</option>
        <option value="unpaid">Unpaid</option>
        <option value="paid">Paid</option>
        <option value="pending">Pending</option>
        <option value="done">Done</option>
        <option value="reviewed">Reviewed</option>
      </select>

      <div className="container-fluid">
        <div className="row">
          {
            filteredOrders.map(order => <UserOrderListCard order={order} key={order.id}></UserOrderListCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default UserOrderList;
