import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

import image from '../../../assets/images/placeholder/pla_Card.png';
import Option from './Option'

import { acceptOrder, declineOrder, fetchOrderByArtistId } from '../../../utils/store/actions/ordersAction'

import '../styles/OrderCard.css';

const OrderCard = ({ order }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { artistId, userId } = useParams()
  const [options, setOptions] = useState(order.options ? JSON.parse(order.options) : [])

  function handleDecline () {
    dispatch(declineOrder(order.id))
  }

  function handleAccept () {
    dispatch(acceptOrder(order.id))
    dispatch(fetchOrderByArtistId())
  }

  function handleChat () {
    history.push(`/user/${order.UserId}/artist/${order.ArtistId}/order/${order.id}/process`)
  }

  return (
    <div id="OrderCard" className="col-12">
      <div className="card shadow" style={{ height: 'auto', borderRadius: 16, marginTop: 8, marginBottom: 8, border: 'none' }}>
        <div className="row">
          <div className="col-6" style={{ borderRadius: 16, padding: 32, height: '460px' }}>
            <img src={order.refLink ? order.refLink : image} className="card-img-top" style={{ borderTopRightRadius: 0, height: '100%', objectFit: 'cover', objectPosition: '50% 35%', borderRadius: 16 }} />
          </div>
          <div className="col-6" style={{ padding: 32 }}>
            <h5>{order.title}</h5>
            <p className="description">{order.description}</p>
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


            <div className="row">
              <div className="col">
                <button style={{borderRadius: 12}} className="btn btn-primary w-100" onClick={() => handleAccept()}>Accept</button>
              </div>
              <div className="col d-flex justify-content-center">
                <button style={{borderRadius: 12}} className="btn" onClick={() => handleDecline()}><p className="text-decoration-underline text-danger">Decline</p></button>
              </div>
            </div>
            <div className="row">
              <div className="col align-self-center">
                <button style={{borderRadius: 12}} className="btn btn-outline-success w-100 mt-1" onClick={() => handleChat()}>Chat</button>
              </div>
            </div>
          </div>
        </div>

      </div >
    </div >
  )

  // <div id="OrderCard" className="col-12 col-md-6">
  //   <div className="card" style={{ width: '100%', borderRadius: 8, marginTop: 8, marginBottom: 8 }}>
  //     <div className="" style={{ backdropFilter: 'blur(8px)', backgroundColor: '#353535D9', width: 'auto', position: 'absolute', bottom: 154, right: 8, borderRadius: 8 }}>
  //       <p style={{ margin: 4, fontWeight: 600, color: '#ecf0f1' }}>Rp, 200.000</p>
  //     </div>
  //     <img src={image} className="card-img-top" style={{ height: 256, objectFit: 'cover', borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
  //     <div className="card-body">
  //       <h5>Lorem Ipsum</h5>
  //       <p className="description">Est pariatur proident nisi incididunt labore velit non.</p>
  //       <div className="row">
  //         <div className="col">
  //           <button className="btn btn-primary w-100">Accept</button>
  //         </div>
  //         <div className="col">
  //           <button className="btn btn-danger w-100">Decline</button>
  //         </div>
  //       </div>
  //     </div>
  //   </div >
  // </div >
};

export default OrderCard;
