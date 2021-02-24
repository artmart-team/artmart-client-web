import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from '../../utils/API/axios'

import Invoice from './components/Invoice.js';
import ItemPic from './components/ItemPic.js';
import ReviewField from './components/ReviewField.js';


const OrderFinish = _ => {
  const { orderId } = useParams()
  const [order, setOrder] = useState()


  useEffect(async () => {
    let { data } = await axios.get(`/users/${localStorage.getItem('id')}/orders/${orderId}`, {
      headers: {
        "access_token": localStorage.getItem('access_token')
      }
    })
    setOrder(data)
  }, [])

  return (
    <div id="OrderFinish" style={{ borderRadius: 8, padding: 32, marginLeft: 64, marginRight: 64 }}>
      <h3>Order finished</h3>
      <p>Here is your invoice.</p>

      <div style={{ height: 'auto', backgroundColor: '#dddddd', borderRadius: 8, marginTop: 32, padding: 32 }}>
        <div className="row">

          <div className="col-6">
            <ItemPic order={ order }/>
          </div>

          <div className="col-6">
            <Invoice order={ order }/>
          </div>

        </div>

      </div>
        <ReviewField order={ order }/>
    </div>
  );
};

export default OrderFinish;
