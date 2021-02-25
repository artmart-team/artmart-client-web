import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

import image from '../../../assets/images/placeholder/pla_Card.png';

import Option from './Option'
import '../styles/OrderActiveCard.css';

const OrderActiveCard = ({ order }) => {
  const dispatch = useDispatch()
  const { artistId, userId } = useParams()
  const history = useHistory()
  const [options, setOptions] = useState(order.options ? JSON.parse(order.options) : [])
  const [date, setDate] = useState(new Date())
  const [deadline, setDeadline] = useState('')

  function handleMarkAsDone () {
    history.push(`/order/submit/${order.id}`)
  }

  function handleChat () {
    history.push(`/user/${order.UserId}/artist/${order.ArtistId}/order/${order.id}/process`)
  }

  useEffect (() => {
    let year = ''
    let month = ''
    let day = ''

    for (let i = 0; i < order.deadline.length; i ++) {
      if (i <= 3) {
        year += order.deadline[i]
      } else if (i >= 5 && i <= 6) {
        month += order.deadline[i]
      } else if (i >= 8 && i <= 9) {
        day += order.deadline[i]
      }
    }

    let deadline = new Date(year, month, day)
    // console.log(date, deadline)
    let dayDeadline = (Math.abs(deadline - date) / 36e5 / 24).toFixed(0)
    setDeadline(dayDeadline)

  }, [order])


  return (
    <div id="OrderActiveCard" className="col-12">
      <div className="card shadow" style={{ height: 'auto', borderRadius: 16, border: 'none', marginTop: 8, marginBottom: 8 }}>
        <div className="row">
          <div className="col-6" style={{ borderRadius: 16, padding: 32, height: '460px' }}>
            <img src={order.refLink} className="card-img-top" style={{ borderTopRightRadius: 0, height: '100%', objectFit: 'cover', objectPosition: '50% 35%', borderRadius: 16 }} />
          </div>
          <div className="col-6" style={{ padding: 32 }}>
            <h5>{order.title}</h5>
            <p className="description">{order.description}</p>
            <small className="text-warning">{ deadline } days left</small>

            {!order.options ? <div className="mb-2 mt-2 text-muted" style={{ paddingLeft: 0 }}>
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
                <p style={{ fontWeight: 600, marginBottom: 0 }}>Rp. {order.totalPrice?.toLocaleString('id-ID')}</p>
              </div>
            </div>

            <button style={{ borderRadius: 12 }} className="btn btn-success w-100" onClick={() => handleMarkAsDone()}>Mark as Done</button>
            <div className="row">
              <div className="col align-self-center mt-4">
                <button style={{ borderRadius: 12 }} className="btn btn-outline-primary w-100 mt-1" onClick={() => handleChat()}>Chat</button>
              </div>
            </div>
          </div>
        </div>

      </div >
    </div >
  );
};

export default OrderActiveCard;
