import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

import { postOrder } from '../../../utils/store/actions/ordersAction'
import SelectedOption from './SelectedOption'

const ListBuy = _ => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { artistId } = useParams()
  const [orderId, setOrderId] = useState()
  const [price, setPrice] = useState(Number(localStorage.getItem('selectedPicPrice')))
  const [extraPrice, setExtraPrice] = useState(Number(localStorage.getItem('totalExtraPrice')))
  const [selectedOptions, setSelectedOptions] = useState(JSON.parse(localStorage.getItem('selectedOptions')))
  
  const { title, description } = useSelector(state => state.orders) 

  function handleOrderClick () {
    if (title && description) {
      dispatch( postOrder(title, description, price, (price + extraPrice ), artistId, selectedOptions, localStorage.getItem('selectedPicId')))
      setTimeout(function () {
         setOrderId(localStorage.getItem('orderId'))
        }, 3000);
    } else {
      console.log('title and description required')
    }
  }

  useEffect(() => {
    if (orderId) {
      history.push(`/order/checkout/${artistId}`)
    }
  }, [orderId])

  return (
    <div id="ListBuy" style={{ height: '516px', border: 'thin solid rgba(0, 0, 0, 0.5)', borderRadius: 8, marginTop: 32, padding: 32 }}>

      <div className="d-flex justify-content-between">
        <h5 style={{ marginBottom: 0 }}>{ localStorage.getItem('selectedPicName') }</h5>
        <h5 style={{ marginBottom: 0 }}>Rp. { price }</h5>
      </div>
      <hr />
      <div>
        <div style={{ height: '210px', overflow: 'auto', paddingLeft: 8, paddingRight: 8 }}>
          {
            selectedOptions.map((option, idx) => <SelectedOption option={option} key={idx}></SelectedOption>)
          }
        </div>

        <hr />
        <div className="d-flex justify-content-between ">
            <label className="form-check-label" htmlFor="showPass">Service fee (+5%)</label>
            <label className="form-check-label" htmlFor="showPass">+ Rp. { (price + extraPrice) * 5 / 100}</label>
        </div>

        <div className="mb-2 mt-2 form-check" style={{ paddingLeft: 0 }}>
          <div className="d-flex justify-content-between">
            <label className="form-check-label" style={{ fontWeight: 600 }} htmlFor="showPass">Total</label>
            <label className="form-check-label" style={{ fontWeight: 600 }} htmlFor="showPass">Rp. { price + extraPrice + ((price + extraPrice) * 5 / 100) }</label>
          </div>
        </div>

        <button className="btn btn-primary w-100" onClick={() => handleOrderClick()}>Order in This Style Now!</button>
      </div>
    </div>
  );
};

export default ListBuy;