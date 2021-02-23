import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from '../../utils/API/axios'

import ChatCardContainer from './components/ChatCardContainer.js';
import TimerWidget from './components/TimerWidget.js';

const OrderProcess = _ => {
  const { orderId } = useParams()
  const [deadline, setDeadline] = useState(0)

  useEffect(async () => {
    let userId = localStorage.getItem('id')
    const { data } = await axios.get(`/users/${userId}/orders/${orderId}`, {
      headers: {
        "access_token": localStorage.getItem('access_token')
      }
    })
    console.log(data)
    setDeadline(data.deadline)
  }, [])

  if (deadline) {
    return (
      <div id="OrderProcess" style={{ borderRadius: 8, padding: 32, marginLeft: 64, marginRight: 64 }}>
        <h3>Thank you for ordering.</h3>
  
        <TimerWidget rawTime={5000} />
  
        <ChatCardContainer />
      </div>
    );
  } else {
    return (
    <div id="OrderProcess" style={{ borderRadius: 8, padding: 32, marginLeft: 64, marginRight: 64 }}>
      <h3>Thank you for ordering.</h3>
      <p>Your order is being processed, please wait for artist's response.</p>


      <ChatCardContainer />
    </div>
    )
  }
};

export default OrderProcess;
