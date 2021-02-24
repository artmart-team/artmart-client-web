import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

import SelectedOption from './SelectedOption';

const DetailProduct = _ => {
  const history = useHistory()
  const { artistId } = useParams()
  const [duration, setDuration] = useState(0)
  const [price, setPrice] = useState(Number(localStorage.getItem('selectedPicPrice')))
  const [extraPrice, setExtraPrice] = useState(Number(localStorage.getItem('totalExtraPrice')))
  const [selectedOptions, setSelectedOptions] = useState(JSON.parse(localStorage.getItem('selectedOptions')))


  useEffect(async () => {
    let { data } = await axios.get(`https://marterialize.herokuapp.com/artists/${artistId}`)

    setDuration(data.completeDuration)
  }, [])

  async function handleConfirmAndPay (event) {
    try {
      event.preventDefault()
      window.snap.show()

      const orderId = localStorage.getItem('orderId')
      const access_token = localStorage.getItem('access_token')
      const obj = {
        gross_amount: (price + extraPrice + ((price + extraPrice) * 5 / 100))
      }

      const gateway = await axios.post(`https://marterialize.herokuapp.com/users/1/requestPaymentGateway/orders/${orderId}`, obj, {  // masih hardcode order idnya 
        headers: {
          "access_token": access_token
        }
      })
      console.log(gateway.data)
      window.snap.pay(gateway.data.token, {
        onSuccess: function (result) {
          console.log('success')
          console.log(result)
          axios.patch(`https://marterialize.herokuapp.com/users/1/orders/${orderId}/paid`, null, {
            headers: {
              "access_token": access_token
            }
          })
            .then(orderPaid => {
              console.log(orderPaid)
              history.push(`/user/${localStorage.getItem('id')}/artist/${artistId}/order/${orderId}/process`)
              localStorage.setItem('orderId', '')
              const Toast = Swal.mixin({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                timer: 3000,
              });

              return Toast.fire({
                icon: 'success',
                title: 'Checkout success!'
              });
            })
            .catch(err => {
              console.log(err, 'err update db paid >> true')
            })
        },
        onPending: function (result) {
          console.log('pending')
          console.log(result)
        },
        onError: function (result) {
          console.log('error')
          console.log(result)
        },
        onClose: function () {
          console.log('customer closed the popup without finishing the payment')
        }
      })
    } catch (err) {
      console.log(err, 'err handleConfirmAndPay')
      console.log(err.message, 'err handleConfirmAndPay msg')
      window.snap.hide()
    }
  }

  return (
    <div id="DetailProduct">
      <div className="card mx-auto shadow" style={{ borderRadius: 16, border: 'none', marginTop: 32 }}>

        <div className="card-body card-header" style={{ padding: 32 }}>
          <h1>Invoice</h1>

          <hr />

          {
            selectedOptions.map((option, idx) => <SelectedOption option={option} key={idx}></SelectedOption>)
          }

        </div>


        {/* <ul className="" >
          <li className="list-group-item text-muted p-3">Enter promo code </li>
          <div className="row px-3 ">
            <div className="col text-muted p-3">Service fee </div>
            <div className="col text-end text-muted p-3 mx-0">$17.75</div>
          </div>
        </ul>


        <div className="row"  >
          <div className="col text-muted mx-1"><h5>Total</h5></div>
          <div className="col text-end text-muted p-1 mx-2"><h5>$16.75</h5></div>
        </div>
        <button type="submit" className="btn btn-success d-flex justify-content-center mx-3 p-2 mb-3">Confirm & Pay</button> */}
        <div style={{ padding: 32 }} >
          <div className="d-flex justify-content-between">
            <p style={{ fontWeight: 400, marginBottom: 8 }}>Service fee (+5%)</p>
            <p style={{ fontWeight: 400, marginBottom: 8 }}>Rp. {((price + extraPrice) * 5 / 100)?.toLocaleString('id-ID')}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p style={{ fontWeight: 600, marginBottom: 8 }}>Total</p>
            <p style={{ fontWeight: 600, marginBottom: 8 }}>Rp. {(price + extraPrice + ((price + extraPrice) * 5 / 100)).toLocaleString('id-ID')}</p>
          </div>
          <button type="submit" className="btn btn-success w-100" style={{borderRadius: 16}} onClick={(e) => handleConfirmAndPay(e)}>Confirm & Pay</button>
        </div>
      </div>


    </div>
  );
};

export default DetailProduct;
