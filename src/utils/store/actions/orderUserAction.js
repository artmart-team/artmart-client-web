import axios from '../../API/axios.js'

export const fetchOrders = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'FETCH_USER_ORDER_START'
      })

      const { data } = await axios.get('/users/52/orders')

      dispatch({
        type: 'FETCH_USER_ORDER_DONE',
        payload: data
      })
    } catch (err) {
      console.log(err, 'error fetchPictures Action')
      dispatch({
        type: 'FETCH_USER_ORDER_ERROR',
        payload: err
      })
    }
  }
}
