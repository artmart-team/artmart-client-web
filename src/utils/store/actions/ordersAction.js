import axios from '../../API/axios.js'

export const updateOrderDetails = (title, description) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'UPDATE_ORDER_DETAILS_DONE',
        title,
        description
      })
    } catch (err) {
      console.log(err, 'error updateOrderDetails Action')
      dispatch({
        type: 'UPDATE_ORDER_DETAILS_ERROR',
        payload: err
      })
    }
  }
}

export const postOrder = (title, description, price, totalPrice, artistId, options, refPictureId) => {
  return async (dispatch) => {
    try {
      let userId = localStorage.getItem('id')
      let access_token = localStorage.getItem('access_token')

      dispatch({
        type: 'UPDATE_ORDER_DETAILS_START',
      })
      
      options = JSON.stringify(options)
      
      const obj = {
        title,
        description,
        price,
        totalPrice,
        options,
        refPictureId
      }
      
      const orderData = await axios.post(`/users/${userId}/artists/${artistId}/orders/`, obj, { 
        headers: {
          "access_token": access_token
        }
      })
      
      const latestOrder = await axios.get(`/users/${userId}/order/latest`, {
        headers: {
          "access_token": access_token
        }
      })
      localStorage.setItem('orderId', latestOrder.data.id)
      console.log(latestOrder.data.id, '<< latest order')
      
      dispatch({
        type: 'UPDATE_ORDER_DETAILS_DONE',
        payload: latestOrder.id
      })


    } catch (err) {
      console.log(err, 'error postOrder Action')
      dispatch({
        type: 'UPDATE_ORDER_DETAILS_ERROR',
        payload: err
      })
    }
  }
}


//////////////////////////////////////////////////////////////////////

export const fetchOrderByArtistId = _ => {
  return async (dispatch) => {
    try {
      let role = localStorage.getItem('role')
      if (role === 'artist') {
        dispatch({
          type: 'FETCH_ORDER_BY_ARTIST_START'
        })
  
        let artistId = localStorage.getItem('id')
        let access_token = localStorage.getItem('access_token')
  
  
        const { data } = await axios.get(`/artists/${artistId}/orders/`, {
          headers: {
            "access_token": access_token
          }
        })

        dispatch({
          type: 'FETCH_ORDER_BY_ARTIST_DONE',
          payload: data
        })

      }
    } catch (err) {
      console.log(err, 'error fetchOrderByArtistId Action')
      dispatch({
        type: 'FETCH_ORDER_BY_ARTIST_DONE',
        payload: err
      })
    }
  }
}

export const declineOrder = (orderId) => {
  return async (dispatch) => {
    try {
      let role = localStorage.getItem('role')
      if (role === 'artist') {
        dispatch({
          type: 'DECLINE_ORDER_START',
        })

        let artistId = localStorage.getItem('id')
        let access_token = localStorage.getItem('access_token')
  
        const data = await axios.delete(`/artists/${artistId}/orders/${orderId}`, {
          headers: {
            "access_token": access_token
          }
        })

        dispatch({
          type: 'DECLINE_ORDER_DONE',
        })

      }
    } catch (err) {
      console.log(err, 'error declineOrder Action')
      dispatch({
        type: 'DECLINE_ORDER_ERROR',
        payload: err
      })
    }
  }
}



export const acceptOrder = (orderId) => {
  return async (dispatch) => {
    try {      
      let role = localStorage.getItem('role')
      if (role === 'artist') {
        dispatch({
          type: 'ACCEPT_ORDER_START',
        })

        let artistId = localStorage.getItem('id')
        let access_token = localStorage.getItem('access_token')
  
        const data = await axios.patch(`/artists/${artistId}/orders/${orderId}/accepted`, {}, {
          headers: {
            "access_token": access_token
          }
        })

        dispatch({
          type: 'ACCEPT_ORDER_DONE',
        })

      }
    } catch (err) {
      console.log(err, 'error acceptOrder Action')
      dispatch({
        type: 'ACCEPT_ORDER_DONE',
        payload: err
      })
    }
  }
}