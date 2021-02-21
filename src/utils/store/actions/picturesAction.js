import axios from '../../API/axios.js'

export const fetchPictures = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'FETCH_PICTURES_START'
      })

      const { data } = await axios.get('/pictures')

      dispatch({
        type: 'FETCH_PICTURES_DONE',
        payload: data
      })
    } catch (err) {
      console.log(err, 'error fetchPictures Action')
      dispatch({
        type: 'FETCH_PICTURES_ERROR',
        payload: err
      })
    }
  }
}
