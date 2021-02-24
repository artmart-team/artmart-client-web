import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from '../../utils/API/axios'

import ChatCardContainer from './components/ChatCardContainer.js';
import TimerWidget from './components/TimerWidget.js';

const OrderProcess = _ => {
  const { orderId } = useParams()
  const { artistId } = useParams()
  const { userId } = useParams()
  const [deadline, setDeadline] = useState(0)
  const [role, setRole] = useState(localStorage.getItem('role'))
  const [messages, setMessages] = useState([])

  // useEffect(async () => {
  //   let userId = localStorage.getItem('id')
  //   const { data } = await axios.get(`/users/${userId}/orders/${orderId}`, {
  //     headers: {
  //       "access_token": localStorage.getItem('access_token')
  //     }
  //   })
  //   console.log(data)
  //   setDeadline(data.deadline)
  // }, [])

  useEffect(async () => {
    try {
      if (role === 'artist') {
        const { data } = await axios.get(`https://marterialize.herokuapp.com/artist/${artistId}/user/${userId}/chat`, {
          headers: {
            "access_token": localStorage.getItem('access_token')
          }
        })
        setMessages(data)
        // console.log(data, 'role artist data')
      } else {
        const { data } = await axios.get(`https://marterialize.herokuapp.com/user/${userId}/artist/${artistId}/chat`, {
          headers: {
            "access_token": localStorage.getItem('access_token')
          }
        })
        setMessages(data)
        // console.log(data, 'role user data')
      }
    } catch (err) {
      console.log(err.response, 'error fetch chat data')
    }

  }, [])


  if (deadline) {
    return (
      <div id="OrderProcess" style={{ borderRadius: 16, paddingTop: 32, marginLeft: 32, marginRight: 32 }}>
        <h3>Thank you for ordering.</h3>
  
        <TimerWidget rawTime={5000} />
  
        <ChatCardContainer messages={messages}/>
      </div>
    );
  } else {
    return (
    <div id="OrderProcess" style={{ borderRadius: 16, paddingTop: 32, marginLeft: 32, marginRight: 32 }}>
      {
        role === 'artist' ? <h3>What kind of request do they want?</h3> :  <h3>Thank you for ordering.</h3>
      }
     
      {
        role === 'artist' ? <p>Chat the commissioner</p> :  <p>Your order is being processed, please wait for artist's response.</p>
      }
      <ChatCardContainer messages={messages}/>
    </div>
    )
  }
};

export default OrderProcess;
