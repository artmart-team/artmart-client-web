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