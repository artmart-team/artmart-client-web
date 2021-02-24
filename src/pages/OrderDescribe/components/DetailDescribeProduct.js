import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

import { postOrder, updateOrderDetails } from '../../../utils/store/actions/ordersAction';
import SelectedOption from './SelectedOption.js';

const DetailDescribeProduct = _ => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { artistId } = useParams();
  const [orderId, setOrderId] = useState();
  const [price, setPrice] = useState(Number(localStorage.getItem('selectedPicPrice')));
  const [extraPrice, setExtraPrice] = useState(Number(localStorage.getItem('totalExtraPrice')));
  const [selectedOptions, setSelectedOptions] = useState(JSON.parse(localStorage.getItem('selectedOptions')));
  const [orderTitle, setOrderTitle] = useState('')
  const [orderDescription, setOrderDescription] = useState('')

  const { title, description } = useSelector(state => state.orders);

  const handleOrderClick = e => {
    e.preventDefault();

    if (!orderTitle || !orderDescription) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000
      });

      return Toast.fire({
        icon: 'error',
        title: 'Please insert Title and Description!'
      });
    }

    dispatch(postOrder(orderTitle, orderDescription, price, (price + extraPrice), artistId, selectedOptions, localStorage.getItem('selectedPicId')))
    Swal.fire({
      title: 'Now Loading!',
      html: 'We are processing your order.',
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
      }
    })
    setTimeout(function () {
      setOrderId(localStorage.getItem('orderId'))
      Swal.close()
    }, 3000);
  };

  const updateTitle = e => {
    setOrderTitle(e.target.value);
  };

  const updateDescription = e => {
    setOrderDescription(e.target.value);
  };


  useEffect(() => {
    if (orderId) {
      history.push(`/order/checkout/${artistId}`);
    };
  }, [orderId]);

  return (
    <div id="ListBuy" className="shadow" style={{ border: 'none', borderRadius: 16, backgroundColor: '#fff', marginTop: 32, marginBottom: 32, padding: 32 }}>
      <div className="d-flex justify-content-between">
        <h5 style={{ marginBottom: 0 }}>{localStorage.getItem('selectedPicName')}</h5>
        <h5 style={{ marginBottom: 0 }}>Rp. {price.toLocaleString('id-ID')}</h5>
      </div>
      <hr />
      <div>
        <div style={{ overflow: 'auto', paddingLeft: 8, paddingRight: 8 }}>
          {
            selectedOptions.map((option, idx) => <SelectedOption option={option} key={idx}></SelectedOption>)
          }
        </div>

        <hr />
        <div className="d-flex justify-content-between ">
          <label className="form-check-label" htmlFor="showPass">Service fee (+5%)</label>
          <label className="form-check-label" htmlFor="showPass">+ Rp. {((price + extraPrice) * 5 / 100)?.toLocaleString('id-ID')}</label>
        </div>

        <div className="mb-2 mt-2 form-check" style={{ paddingLeft: 0 }}>
          <div className="d-flex justify-content-between">
            <label className="form-check-label" style={{ fontWeight: 600 }} htmlFor="showPass">Total</label>
            <label className="form-check-label" style={{ fontWeight: 600 }} htmlFor="showPass">Rp. {(price + extraPrice + ((price + extraPrice) * 5 / 100))?.toLocaleString('id-ID')}</label>
          </div>
        </div>

      </div>
      <div id="DescribeField" style={{ height: 'auto', borderRadius: 8 }}>

        <hr />

        <h4>What kind of request do you want?</h4>

        <form action="">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Commission Title</label>
            <input type="text" className="form-control" id="name" aria-describedby="titleHelp" style={{ borderRadius: 12 }} value={orderTitle} onChange={(e) => updateTitle(e)} />
            <div id="titleHelp" className="form-text">Keep it simple but powerful.</div>
          </div>
          <div className="form-floating">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{ borderRadius: 12, height: 100 }} value={orderDescription} onChange={(e) => updateDescription(e)}></textarea>
            <label htmlFor="floatingTextarea" style={{ color: 'gray' }}>Describe</label>
          </div>
          <button className="btn btn-primary w-100 mt-3" style={{ borderRadius: 12 }} onClick={e => handleOrderClick(e)}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default DetailDescribeProduct;
