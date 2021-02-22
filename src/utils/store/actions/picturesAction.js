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

export const postPicture = payload => {
  return async _ => {
    try {
      console.log(payload)
    } catch (err) {
      console.log(err);
    };
  };
};

export const currentCollection = (artistId) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'FETCH_CURRENT_COLLECTION_START'
      })

      const { data } = await axios.get(`/artists/${artistId}/pictures`)

      dispatch({
        type: 'FETCH_CURRENT_COLLECTION_DONE',
        payload: data
      })
    } catch (err) {
      console.log(err, 'error currentCollection Action')
      dispatch({
        type: 'FETCH_CURRENT_COLLECTION_ERROR',
        payload: err
      })
    }
  }
}

export const showPicture = (link, picId, picPrice, picName, picDescription, artistRating, artistId) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'SHOW_PICTURE_DONE',
        link: link,
        picId,
        picPrice,
        picName,
        picDescription,
        artistRating,
        artistId
      })
    } catch (err) {
      console.log(err, 'error showPicture Action')
      dispatch({
        type: 'SHOW_PICTURE_ERROR',
        payload: err
      })
    }
  }
}
