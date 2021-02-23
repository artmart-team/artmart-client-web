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

export const postOrder = (title, description, price, totalPrice, artistId, userId) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'UPDATE_ORDER_DETAILS_START',
      })

      const obj = {
        title,
        description,
        price,
        totalPrice
      }

      const orderData = await axios.post(`/users/1/artists/${artistId}/orders/`, obj, {  // masih hardcode
        headers: {
          "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJ1c2VybmFtZVRlc3RpbmdGb3JVU2VyIiwicHJvZmlsZVBpY3R1cmUiOiJsaW5rLmdvb2dsZS5jb20iLCJpYXQiOjE2MTQwMDg5OTd9.A2e2OGEsbFHlBQZHYJqX9Hya2gmXrkxsN4VG_wogZMA"
        }
      })

      dispatch({
        type: 'UPDATE_ORDER_DETAILS_DONE'
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

export const submitCommission = (payload, orderId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'LOADING' });

      const { data } = await axios({
        method: 'POST',
        url: `/artists/${localStorage.getItem('id')}/orders/${orderId}/done`
      });

      return dispatch({ type: 'SUBMIT_COMMISSION', payload: data });
    } catch (err) {
      console.log(err);
    };
  };
};

export const resetSubmit = _ => {
  return async (dispatch) => {
    try {
      return dispatch({ type: 'RESET_SUBMIT' });
    } catch (err) {
      console.log(err);
    };
  };
};