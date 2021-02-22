import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'

import SelectedOption from './SelectedOption'
import image from '../../../assets/images/placeholder/pla_Card.png';

const DetailProduct = _ => {
  const history = useHistory()
  const { artistId } = useParams()
  const [duration, setDuration] = useState(0)
  const { showPicture, showPictureName, showPicturePrice} = useSelector(state => state.pictures) 
  const { selectedOptions, totalExtraPrice } = useSelector(state => state.options) 

  useEffect(async () => {
    let { data } = await axios.get('https://marterialize.herokuapp.com/artists/1')

    setDuration(data.completeDuration)
  }, [])

  async function handleConfirmAndPay (event) {
    try {
      event.preventDefault()
      window.snap.show()

      const obj = {
        gross_amount: 110000   // masih hardcode total harga
      }
      
      const gateway = await axios.post('https://marterialize.herokuapp.com/users/1/requestPaymentGateway/orders/4', obj, {  // masih hardcode order idnya 
        headers: {
          "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJ1c2VybmFtZVRlc3RpbmdGb3JVU2VyIiwicHJvZmlsZVBpY3R1cmUiOiJsaW5rLmdvb2dsZS5jb20iLCJpYXQiOjE2MTQwMDk4NTd9.QheFhBXZV1W5SV7xPsGovKtH9JTeMrWEH7E9i5oJwHU"  // masih hardcorde, nanti diganti dari access_token di localStorage
        }
      })
      console.log(gateway.data)
      window.snap.pay(gateway.data.token, {
        onSuccess: function(result){
          console.log('success')
          console.log(result)
          axios.patch('https://marterialize.herokuapp.com/users/1/orders/4/paid', null, {
            headers: {
              "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJ1c2VybmFtZVRlc3RpbmdGb3JVU2VyIiwicHJvZmlsZVBpY3R1cmUiOiJsaW5rLmdvb2dsZS5jb20iLCJpYXQiOjE2MTQwMDk4NTd9.QheFhBXZV1W5SV7xPsGovKtH9JTeMrWEH7E9i5oJwHU"
            }
          })
            .then(orderPaid => {
              console.log(orderPaid)
              history.push('/order/process/:orderId')
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
              <img src={ showPicture } className="card-img-top" style={{ borderRadius: 8 }} />
            </div>

            <div className="col-8 mb-3">
              <h4>{ showPictureName }</h4>
              <p>Duration: { duration } hours</p>
            </div>
          </div>

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
            <p style={{ fontWeight: 400, marginBottom: 8 }}>Rp. { (showPicturePrice + totalExtraPrice) * 5 / 100}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p style={{ fontWeight: 600, marginBottom: 8 }}>Total</p>
            <p style={{ fontWeight: 600, marginBottom: 8 }}>Rp. { showPicturePrice + totalExtraPrice + ((showPicturePrice + totalExtraPrice) * 5 / 100) }</p>
          </div>
          <button type="submit" className="btn btn-success w-100" onClick={(e) => handleConfirmAndPay(e)}>Confirm & Pay</button>
        </div>
      </div>


    </div>
  );
};

export default DetailProduct;
