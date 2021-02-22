import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getArtistOptions } from '../../../utils/store/actions/optionsAction'

import OptionsList from './OptionsList'

const CustomOrderCard = (props) => {
  const history = useHistory();
  const dispatch = useDispatch()
  let { stallId } = useParams()
  const { options, totalExtraPrice } = useSelector(state => state.options) 
  const { showPicturePrice, showPictureName } = useSelector(state => state.pictures) 

  useEffect(() => {
    dispatch( getArtistOptions(stallId))
  }, [])

  function handleOrderNow () {
    history.push(`/order/describe/${stallId}`)
  }

  return (
    <div id="CustomOrderCard" style={{ height: '444px', border: 'thin solid rgba(0, 0, 0, 0.5)', borderRadius: 8, marginTop: 32, padding: 32 }}>
      <div className="d-flex justify-content-between">
        <h5 style={{ marginBottom: 0 }}>{ showPictureName  }</h5>
        <h5 style={{ marginBottom: 0 }}>Rp. { showPicturePrice }</h5>
      </div>
      <hr />
      <h5 style={{ marginBottom: 16 }}>Available choice</h5>
      <form>
        <div style={{ height: '170px', overflow: 'auto', paddingLeft: 8, paddingRight: 8 }}>
          {
            options.map(option => <OptionsList option={option} key={option.id}></OptionsList>)
          }
        </div>

        <hr />
        <div className="d-flex justify-content-between mb-3">
          <label className="form-check-label" style={{ fontWeight: 600 }} htmlFor="showPass">Total</label>
          <label className="form-check-label" style={{ fontWeight: 600 }} htmlFor="showPass">Rp. { showPicturePrice + totalExtraPrice}</label>
        </div>
        <button type="button" className="btn btn-primary w-100" style={{ borderRadius: 8 }} onClick={() => handleOrderNow()}>Order in This Style Now</button>
      </form>
    </div>
  );
};

export default CustomOrderCard;