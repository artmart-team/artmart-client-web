import React from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import image from '../../../assets/images/placeholder/pla_Card.png';

const DetailProduct = _ => {
  const history = useHistory()
  async function handleConfirmAndPay (event) {
    try {
      event.preventDefault()
      window.snap.show()

      const obj = {
        gross_amount: 110000   // masih hardcode total harga
      }
      
      const gateway = await axios.post('http://localhost:3000/users/1/requestPaymentGateway/orders/15', obj, {  // masih hardcode order idnya 
        headers: {
          "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ1c2VycXdlMyIsInByb2ZpbGVQaWN0dXJlIjoiaHR0cHM6Ly91aS1hdmF0YXJzLmNvbS9hcGkvP25hbWU9cXdlZmlyc3QzK3F3ZWxhc3QzIiwiaWF0IjoxNjEzOTA4NDc0fQ.IfsJ7e-HNFyscx-WmpFRhTS6q_43kbwwevGbOPAUxgE"  // masih hardcorde, nanti diganti dari access_token di localStorage
        }
      })
      console.log(gateway.data)
      window.snap.pay(gateway.data.token, {
        onSuccess: function(result){
          console.log('success')
          console.log(result)
          axios.patch('http://localhost:3000/users/1/orders/15/paid', null, {
            headers: {
              "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ1c2VycXdlMyIsInByb2ZpbGVQaWN0dXJlIjoiaHR0cHM6Ly91aS1hdmF0YXJzLmNvbS9hcGkvP25hbWU9cXdlZmlyc3QzK3F3ZWxhc3QzIiwiaWF0IjoxNjEzOTAyNDQ3fQ.aoGmzjzqEeHxyPBySKccrdIqMvU7Xy-HPXmVlXZ-la8"
            }
          })
            .then(orderPaid => {
              console.log(orderPaid)
              history.push('/')
            })
            .catch(err => {
              console.log(err, 'err update db paid >> true')
            })
        },
        onPending: function(result){
          console.log('pending')
          console.log(result)
        },
        onError: function(result){
          console.log('error')
          console.log(result)
        },
        onClose: function(){
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
      <div className="card mx-auto" style={{ borderRadius: 8, marginTop: 32 }}>

        <div className="card-body card-header" style={{ padding: 32 }}>
          <div className="row">

            <div className="col-4">
              <img src={image} className="card-img-top" style={{ borderRadius: 8 }} />
            </div>

            <div className="col-8 mb-3">
              <h4>Potato Style Drawing</h4>
              <p>Duration: 5 days</p>
            </div>
          </div>

          <div className="mb-2 mt-4 text-muted" style={{ paddingLeft: 0 }}>
            <div className="d-flex justify-content-between">
              <p style={{ fontWeight: 600, marginBottom: 0 }}>Basic price</p>
              <p style={{ fontWeight: 600, marginBottom: 0 }}>Rp. 100.000</p>
            </div>
          </div>

          <div className="mb-2 mt-2 text-muted" style={{ paddingLeft: 0 }}>
            <div className="d-flex justify-content-between">
              <p style={{ marginBottom: 0 }}>HD Resolution</p>
              <p style={{ marginBottom: 0 }}>+ Rp. 10.000</p>
            </div>
          </div>

          <div className="mb-2 mt-2 text-muted" style={{ paddingLeft: 0 }}>
            <div className="d-flex justify-content-between">
              <p style={{ marginBottom: 0 }}>Full Color</p>
              <p style={{ marginBottom: 0 }}>+ Rp. 10.000</p>
            </div>
          </div>

          <div className="mb-2 mt-2 text-muted" style={{ paddingLeft: 0 }}>
            <div className="d-flex justify-content-between">
              <p style={{ marginBottom: 0 }}>Full Body</p>
              <p style={{ marginBottom: 0 }}>+ Rp. 10.000</p>
            </div>
          </div>

          <div className="mb-2 mt-2 text-muted" style={{ paddingLeft: 0 }}>
            <div className="d-flex justify-content-between">
              <p style={{ marginBottom: 0 }}>Half Body</p>
              <p style={{ marginBottom: 0 }}>+ Rp. 10.000</p>
            </div>
          </div>

          <div className="mb-2 mt-2 text-muted" style={{ paddingLeft: 0 }}>
            <div className="d-flex justify-content-between">
              <p style={{ marginBottom: 0 }}>Commercial Use</p>
              <p style={{ marginBottom: 0 }}>+ Rp. 10.000</p>
            </div>
          </div>
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
            <p style={{ fontWeight: 600, marginBottom: 8 }}>Total</p>
            <p style={{ fontWeight: 600, marginBottom: 8 }}>Rp. 110.000</p>
          </div>
          <div className="d-flex justify-content-between">
            <p style={{ fontWeight: 400, marginBottom: 8 }}>Service fee</p>
            <p style={{ fontWeight: 400, marginBottom: 8 }}>Rp. 10.000</p>
          </div>
          <button type="submit" className="btn btn-success w-100" onClick={(e) => handleConfirmAndPay(e)}>Confirm & Pay</button>
        </div>
      </div>


    </div>
  );
};

export default DetailProduct;
