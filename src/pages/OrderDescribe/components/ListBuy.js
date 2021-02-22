import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

import { postOrder } from '../../../utils/store/actions/ordersAction'
import SelectedOption from './SelectedOption'

const ListBuy = _ => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { artistId } = useParams()
  const { showPictureName, showPicturePrice } = useSelector(state => state.pictures) 
  const { totalExtraPrice, selectedOptions } = useSelector(state => state.options) 
  const { title, description } = useSelector(state => state.orders) 

  function handleOrderClick () {
    if (title && description) {
      dispatch( postOrder(title, description, showPicturePrice, (showPicturePrice + totalExtraPrice ), artistId))
      history.push(`/order/checkout/${artistId}`)
    } else {
      console.log('title and description required')
    }
  }

  return (
    <div id="ListBuy" style={{ height: '516px', border: 'thin solid rgba(0, 0, 0, 0.5)', borderRadius: 8, marginTop: 32, padding: 32 }}>

      <div className="d-flex justify-content-between">
        <h5 style={{ marginBottom: 0 }}>{ showPictureName }</h5>
        <h5 style={{ marginBottom: 0 }}>Rp. { showPicturePrice }</h5>
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
            <label className="form-check-label" htmlFor="showPass">+ Rp. { (showPicturePrice + totalExtraPrice) * 5 / 100}</label>
        </div>

        <div className="mb-2 mt-2 form-check" style={{ paddingLeft: 0 }}>
          <div className="d-flex justify-content-between">
            <label className="form-check-label" style={{ fontWeight: 600 }} htmlFor="showPass">Total</label>
            <label className="form-check-label" style={{ fontWeight: 600 }} htmlFor="showPass">Rp. { showPicturePrice + totalExtraPrice + ((showPicturePrice + totalExtraPrice) * 5 / 100) }</label>
          </div>
        </div>

        <button className="btn btn-primary w-100" onClick={() => handleOrderClick()}>Order in This Style Now!</button>
      </div>
    </div>
  );
};

export default ListBuy;