import axios from '../../API/axios.js'

export const getArtistOptions = (artistId) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'FETCH_ARTIST_OPTION_START'
      })

      const { data } = await axios.get(`/artists/${artistId}/options`)

      dispatch({
        type: 'FETCH_ARTIST_OPTION_DONE',
        payload: data
      })
    } catch (err) {
      console.log(err, 'error getArtistOptions Action')
      dispatch({
        type: 'FETCH_ARTIST_OPTION_ERROR',
        payload: err
      })
    }
  }
}

export const updateExtraPrice = (price) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'UPDATE_EXTRA_PRICE_DONE',
        payload: price
      })
    } catch (err) {
      console.log(err, 'error updateExtraPrice Action')
      dispatch({
        type: 'UPDATE_EXTRA_PRICE_ERROR',
        payload: err
      })
    }
  }
}

export const updateSelectedOptions = (options) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'SELECTED_OPTIONS_DONE',
        payload: options
      })
    } catch (err) {
      console.log(err, 'error updateSelectedOptions Action')
      dispatch({
        type: 'SELECTED_OPTIONS_ERROR',
        payload: err
      })
    }
  }
}

export const addOption = (payload, artistId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: 'POST',
        url: `/artists/${artistId}/options`,
        data: payload,
        headers: { access_token: localStorage.getItem('access_token') }
      });

      console.log(data, '<<<ACT')

      dispatch({
        type: 'ADD_OPTION',
        payload: data
      })
    } catch (err) {
      console.log(err.response);
    }
  }
}

export const fetchSelfOption = (artistId) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'LOADING'
      })

      const { data } = await axios({
        method: 'GET',
        url: `/artists/${artistId}/options`,
        headers: { access_token: localStorage.getItem('access_token') }
      });

      dispatch({
        type: 'FETCH_SELF_OPTION',
        payload: data
      })
    } catch (err) {
      console.log(err.response)
    }
  }
}

export const deleteSelfOption = (artistId, optionId) => {
  return async (dispatch) => {
    try {
      const message = await axios({
        method: 'DELETE',
        url: `/artists/${artistId}/options/${optionId}`,
        headers: { access_token: localStorage.getItem('access_token') }
      });

      console.log(message.data);

      dispatch({ type: 'DELETE_SELF_OPTION', payload: Number(optionId) });
    } catch (err) {
      console.log(err)
    };
  };
};