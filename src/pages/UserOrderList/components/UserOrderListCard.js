import React, { useState, useEffect } from 'react';
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
  const [date, setDate] = useState(new Date())
  const [deadline, setDeadline] = useState('')

  // console.log(order)

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
              history.push(`/user/${order.UserId}/artist/${order.ArtistId}/order/${order.id}/process`)
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

  function handleChat () {
    history.push(`/user/${order.UserId}/artist/${order.ArtistId}/order/${order.id}/process`)
  }

  useEffect (() => {
    let year = ''
    let month = ''
    let day = ''

    if (order.length > 0) {
      for (let i = 0; i < order.deadline.length; i ++) {
        if (i <= 3) {
          year += order.deadline[i]
        } else if (i >= 5 && i <= 6) {
          month += order.deadline[i]
        } else if (i >= 8 && i <= 9) {
          day += order.deadline[i]
        }
      }
    }
    day = Number(day) + 1
    month = Number(month) - 1

    let deadline = new Date(year, month, day)
    // console.log(date, deadline)
    let dayDeadline = (Math.abs(deadline - date) / 36e5 / 24).toFixed(0)
    setDeadline(dayDeadline)

  }, [order])

  return (
    <div id="UserOrderListCard" className="col-12">
      <div className="card shadow" style={{ width: '100%', border: 'none', borderRadius: 16, marginTop: 8, marginBottom: 8, height: 'auto' }}>
        <div className="row">
          <div className="col-6" style={{ borderRadius: 16, padding: 32, height: '460px' }}>
            <img src={order.refLink} className="card-img-top" style={{ height: '100%', objectFit: 'cover', objectPosition: '50% 25%', borderRadius: 16 }} />
          </div>
          <div className="col-6" style={{ padding: 32 }}>
            <div className="d-flex justify-content-between" style={{ marginBottom: 12 }}>
              <h5 className="align-self-center" style={{ margin: 0 }}>{order.title}</h5>
              {!order.paid ? <span className="badge rounded-pill bg-danger align-self-center"><p style={{ margin: 0 }}>Unpaid</p></span> :
                !order.accepted ? <span className="badge rounded-pill bg-success align-self-center"><p style={{ margin: 0 }}>Paid</p></span> :
                  !order.done ? <span className="badge rounded-pill bg-secondary align-self-center"><p style={{ margin: 0 }}>Pending</p></span> :
                    <span className="badge rounded-pill bg-success align-self-center"><p style={{ margin: 0 }}>Done</p></span>
              }

              {/* <span className="badge rounded-pill bg-secondary align-self-center"><p style={{margin: 0}}>Pending</p></span> */}
              {/* <span className="badge rounded-pill bg-success align-self-center"><p style={{ margin: 0 }}>Paid</p></span> */}
            </div>
            <p className="description">{order.description}</p>
            <p className="text-warning">{ deadline } days left</p>

            <div className="mb-4 mt-2 text-muted" style={{ paddingLeft: 0 }}>
              <div className="d-flex justify-content-between">
                <p style={{ fontWeight: 600, marginBottom: 0 }}>Total</p>
                <p style={{ fontWeight: 600, marginBottom: 0 }}>Rp. { order.totalPrice ? order.totalPrice :  (price + extraPrice + ((price + extraPrice) * 5 / 100)).toLocaleString('id-ID')}</p>
              </div>
            </div>

            <hr />

            <div className="d-flex" style={{ marginBottom: 32, marginTop: 28 }}>
              <div style={{ marginRight: 4, flex: 1 }}>
                <Link to={`/artist/${order?.Artist?.id}`}>
                  <img
                    src={order?.Artist?.profilePicture}
                    className="rounded-circle"
                    style={{ width: 56, height: 56, objectFit: 'cover' }}
                  />
                </Link>
              </div>
              <div style={{ flex: 6, minWidth: 0, display: 'flex' }}>
                <Link to={`/artist/${order?.Artist?.id}`} style={{ textDecoration: 'none' }} className="align-self-center">
                  <h5 className="card-title " style={{ width: 'auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{order.Artist.username}</h5>
                </Link>
              </div>

            </div>


            <div className="row">
              <div className="col">
                {
                  !order.paid ? <button style={{ borderRadius: 16 }} className="btn btn-primary w-100" onClick={(e) => handlePay(e)}>Pay</button> :
                    !order.accepted ? <button style={{ borderRadius: 16 }} className="btn btn-primary w-100" onClick={(e) => handleChat(e)}>Chat</button> :
                      !order.done ? <button style={{ borderRadius: 16 }} className="btn btn-primary w-100" onClick={(e) => handleChat(e)}>Chat</button> :
                        <p className="btn align-self-center">Go to Review Page to Download</p>
                }

              </div>
              {/** Kalo belom selesai ada cancelation */}
              <div className="col d-flex justify-content-center">
                {
                  !order.paid ? <button style={{ borderRadius: 16 }} className="btn" onClick={() => handleCancel()}><p className="text-decoration-underline text-danger">Cancel</p></button> :
                    !order.accepted ? <p className="btn align-self-center">Please wait for artist's response</p> :
                      !order.done ? <p className="btn align-self-center text-center w-100">Work in Progress</p> :
                        order.ReviewId ? <button style={{ borderRadius: 16 }} className="btn btn-success w-100" onClick={() => handleReview()}>Edit Review</button> :
                          <button style={{ borderRadius: 16 }} className="btn btn-success w-100" onClick={() => handleReview()}>Review</button>
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
