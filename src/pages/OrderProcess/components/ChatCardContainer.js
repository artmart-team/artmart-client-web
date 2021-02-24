import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { io } from "socket.io-client";
// import axios from '../../../utils/API/axios'
import axios from 'axios'

import ChatCard from './ChatCard';

const ENDPOINT = "https://marterialize.herokuapp.com/";
const socket = io(ENDPOINT, {transports: ['websocket']});

const ChatCardContainer = ({ messages }) => {
  const { artistId } = useParams()
  const { userId } = useParams()
  const [response, setResponse] = useState('')
  const [role, setRole] = useState(localStorage.getItem('role'))
  const [inputMsg, setInputMsg] = useState('')
  const [newMessages, setNewMessages] = useState([])

  useEffect(() => {
    if (messages.length > 0) {
      // console.log(messages,'message lama')
      let copyMsg = JSON.parse(JSON.stringify(messages))
      let mappedMsg = copyMsg.map(message => [message.messages, message.from])
      setNewMessages(mappedMsg)
      // console.log(newMessages, 'atassss')
    }
  }, [messages])
  
  useEffect(() => {
    socket.on("connected", (data, second) => {
      setResponse(data)
    })
    if (role === 'customer') {
      socket.emit('joinRoom', role, localStorage.getItem('id'), artistId) //  paling ujung opponent id
    } else {
      socket.emit('joinRoom', role, localStorage.getItem('id'), userId) // paling ujung opponent id
    }

    socket.on('yourRoom', (room, role) => {
      localStorage.setItem('room', room)
      console.log('my room ' + room + ' ' + role)
    })

    socket.on('getBroadcast', (msg, role) => {
      let arrMsg = [msg, role]
      console.log(arrMsg, 'arrMsg')
      
      setNewMessages(newMessages => [...newMessages, arrMsg])
    })

  }, [])

  function handleSend (e) {
    e.preventDefault()
    let room = localStorage.getItem('room')
    socket.emit('message', room, inputMsg, role, userId, artistId)
    setInputMsg('')
  }

  function handleTypeMsg (e) {
    setInputMsg(e.target.value)
  }

  if (newMessages) {
    return (
      <div id="ChatCardContainer" style={{ height: 'auto', borderRadius: 8, marginTop: 32, marginBottom: 32, }}>
        <div style={{ height: 'auto', backgroundColor: '#dddddd', borderRadius: 8, padding: 32, marginTop: 16 }}>

          {
            newMessages.map((message, idx) => <ChatCard message={message} key={idx} artist={messages[0]?.Artist} user={messages[0]?.User}></ChatCard>)
          }
  
          <form action="">
            <div className="form-floating">
              <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" required style={{ borderRadius: 8, height: 100 }} value={inputMsg} onChange={(e) => handleTypeMsg(e)}></textarea>
              <label htmlFor="floatingTextarea">Comments</label>
            </div>
            <button className="btn btn-primary w-100 mt-3" style={{ borderRadius: 8 }} onClick={(e) => handleSend(e)}>Send</button>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div id="ChatCardContainer" style={{ height: 'auto', borderRadius: 8, marginTop: 32, marginBottom: 32, }}>
      <div style={{ height: 'auto', backgroundColor: '#dddddd', borderRadius: 8, padding: 32, marginTop: 16 }}>

        <form action="">
          <div className="form-floating">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" required style={{ borderRadius: 8, height: 100 }} value={inputMsg} onChange={(e) => handleTypeMsg(e)}></textarea>
            <label htmlFor="floatingTextarea">Comments</label>
          </div>
          <button className="btn btn-primary w-100 mt-3" style={{ borderRadius: 8 }} onClick={(e) => handleSend(e)}>Send</button>
        </form>
      </div>
    </div>
    )
  }
};

export default ChatCardContainer;
