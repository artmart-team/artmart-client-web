import axios from '../../API/axios.js'

export const fetchOrdersUsers = () => {
  return async (dispatch) => {
    try {
      let role = localStorage.getItem('role')
      if (role === 'customer') {
        dispatch({
          type: 'FETCH_ORDER_USER_START'
        })

        let userId = localStorage.getItem('id')
        let access_token = localStorage.getItem('access_token')
  
        const { data } = await axios.get(`/users/${userId}/orders`, {
          headers: {
            "access_token": access_token
          }
        })
        dispatch({
          type: 'FETCH_ORDER_USER_DONE',
          payload: data
        })
      }
    } catch (err) {
      console.log(err, 'error fetchOrdersUsers Action')
      dispatch({
        type: 'FETCH_ORDER_USER_ERROR',
        payload: err
      })
    }
  }
}

export const cancelOrderUser = (orderId) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'CANCEL_ORDER_USER_START'
      })

      let role = localStorage.getItem('role')
      if (role === 'customer') {

        let userId = localStorage.getItem('id')
        let access_token = localStorage.getItem('access_token')
  
        const { data } = await axios.delete(`/users/${userId}/orders/${orderId}`, {
          headers: {
            "access_token": access_token
          }
        })
        dispatch({
          type: 'CANCEL_ORDER_USER_DONE'
        })
      }
    } catch (err) {
      console.log(err, 'error cancelOrderUser Action')
      dispatch({
        type: 'FETCH_ORDER_USER_ERROR',
        payload: err
      })
    }
  }
}
