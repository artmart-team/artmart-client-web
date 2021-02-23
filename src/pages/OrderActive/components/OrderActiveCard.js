import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import image from '../../../assets/images/placeholder/pla_Card.png';

import Option from './Option'
import '../styles/OrderActiveCard.css';

const OrderActiveCard = ({ order }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [options, setOptions] = useState( order.options ? JSON.parse(order.options) : [])

  function handleMarkAsDone () {
    history.push(`/order/submit/${order.id}`)
  }

  return (
    <div id="OrderActiveCard" className="col-12">
      <div className="card" style={{ width: '100%', borderRadius: 8, marginTop: 8, marginBottom: 8 }}>
        <div className="row">
          <div className="col-6" style={{ padding: 0 }}>
            <img src={ order.refLink } className="card-img-top" style={{ borderTopRightRadius: 0, height: '100%', objectFit: 'cover', borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }} />
          </div>
          <div className="col-6" style={{ padding: 32 }}>
            <h5>{ order.title }</h5>
            <p className="description">{ order.description }</p>

              { !order.option ?    <div className="mb-2 mt-2 text-muted" style={{ paddingLeft: 0 }}>
                <div className="d-flex justify-content-between">
                  <p style={{ marginBottom: 0 }}>No Extra Options</p>
                  </div>
                </div> 
                : '' 
              }

              {
                options.map((option, idx) => <Option option={option} key={idx}></Option>)
              }

            <hr />
            <div className="mb-4 mt-2 text-muted" style={{ paddingLeft: 0 }}>
              <div className="d-flex justify-content-between">
                <p style={{ fontWeight: 600, marginBottom: 0 }}>Total</p>
                <p style={{ fontWeight: 600, marginBottom: 0 }}>Rp. { order.totalPrice }</p>
              </div>
            </div>

            <button className="btn btn-success w-100" onClick={() => handleMarkAsDone()}>Mark as Done</button>
          </div>
        </div>

      </div >
    </div >
  );
};

export default OrderActiveCard;
