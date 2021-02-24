import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { fetchOrdersUsers, cancelOrderUser } from '../../../utils/store/actions/orderUserAction'
import axios from 'axios'

import '../styles/UserOrderListCard.css';

const UserOrderListCard = ({ order }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [price, setPrice] = useState(Number(localStorage.getItem('selectedPicPrice')))
  const [extraPrice, setExtraPrice] = useState(Number(localStorage.getItem('totalExtraPrice')))

  console.log(order)

  function handleCancel () {
    dispatch(cancelOrderUser(order.id))
    dispatch(fetchOrdersUsers())
  }

  function handleReview () {
    history.push(`/order/finish/${order.id}`)
  }

  async function handlePay (event) {
    try {
      event.preventDefault()
      window.snap.show()


      const orderId = localStorage.getItem('orderId')
      const access_token = localStorage.getItem('access_token')
      const obj = {
        gross_amount: (price + extraPrice + ((price + extraPrice) * 5 / 100))
      }
      console.log(obj, 'obj')

      const gateway = await axios.post(`https://marterialize.herokuapp.com/users/${localStorage.getItem('id')}/requestPaymentGateway/orders/${orderId}`, obj, {
        headers: {
          "access_token": access_token
        }
      })
      console.log(gateway.data)
      window.snap.pay(gateway.data.token, {
        onSuccess: function (result) {
          console.log('success')
          console.log(result)
          axios.patch(`https://marterialize.herokuapp.com/users/${localStorage.getItem('id')}/orders/${orderId}/paid`, null, {
            headers: {
              "access_token": access_token
            }
          })
            .then(orderPaid => {
              console.log(orderPaid)
              history.push('/order/process/:orderId')
              localStorage.setItem('orderId', '')
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
    <div id="UserOrderListCard" className="col-12">
      <div className="card" style={{ width: '100%', borderRadius: 8, marginTop: 8, marginBottom: 8 }}>
        <div className="row">
          <div className="col-6" style={{ padding: 0 }}>
            <img src={order.refLink} className="card-img-top" style={{ borderTopRightRadius: 0, height: '100%', objectFit: 'cover', borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }} />
          </div>
          <div className="col-6" style={{ padding: 32 }}>
            <div className="d-flex justify-content-between" style={{ marginBottom: 12 }}>
              <h5 className="align-self-center" style={{ margin: 0 }}>{order.title}</h5>
              {!order.paid ? <span class="badge rounded-pill bg-danger align-self-center"><p style={{ margin: 0 }}>Unpaid</p></span> :
                !order.accepted ? <span class="badge rounded-pill bg-success align-self-center"><p style={{ margin: 0 }}>Paid</p></span> :
                  !order.done ? <span class="badge rounded-pill bg-secondary align-self-center"><p style={{ margin: 0 }}>Pending</p></span> :
                    <span class="badge rounded-pill bg-success align-self-center"><p style={{ margin: 0 }}>Done</p></span>
              }

              {/* <span class="badge rounded-pill bg-secondary align-self-center"><p style={{margin: 0}}>Pending</p></span> */}
              {/* <span class="badge rounded-pill bg-success align-self-center"><p style={{ margin: 0 }}>Paid</p></span> */}
            </div>
            <p className="description">{order.description}</p>

            <div className="mb-4 mt-2 text-muted" style={{ paddingLeft: 0 }}>
              <div className="d-flex justify-content-between">
                <p style={{ fontWeight: 600, marginBottom: 0 }}>Total</p>
                <p style={{ fontWeight: 600, marginBottom: 0 }}>Rp. {(price + extraPrice + ((price + extraPrice) * 5 / 100))}</p>
              </div>
            </div>

            <hr />

            <div className="d-flex" style={{ marginBottom: 32, marginTop: 28 }}>
              <div style={{ marginRight: 4, flex: 1 }}>
                <Link to={`/artist/3`}>
                  <img
                    src={order.Artist.profilePic}
                    className="rounded-circle"
                    style={{ width: 56, height: 56, objectFit: 'cover' }}
                  />
                </Link>
              </div>
              <div style={{ flex: 6, minWidth: 0 }}>
                <Link to={`/stall/3`} style={{ textDecoration: 'none' }}>
                  <h5 className="card-title" style={{ width: 'auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{order.Artist.username}</h5>
                </Link>
              </div>

            </div>


            <div className="row">
              <div className="col">
                {
                  !order.paid ? <button className="btn btn-primary w-100" onClick={(e) => handlePay(e)}>Pay</button> :
                    !order.accepted ? <p></p> :
                      !order.done ? <p></p> :
                        <p className="btn btn-main w-100">Go to Review Page to Download</p>
                }

              </div>
              {/** Kalo belom selesai ada cancelation */}
              <div className="col">
                {
                  !order.paid ? <button className="btn btn-danger w-100" onClick={() => handleCancel()}>Cancel</button> :
                    !order.accepted ? <p>Please wait for artist's response</p> :
                      !order.done ? <p>The artist is making your commission</p> :
                        <button className="btn btn-success w-100" onClick={() => handleReview()}>Review</button>
                }

              </div>
              {/** Kalo udah selesai ada bisa download filenya */}
              {/* <div className="col">
                <button className="btn btn-success w-100">Download</button>
              </div> */}
            </div>
          </div>
        </div>

      </div >
    </div >
  );
};

export default UserOrderListCard;
