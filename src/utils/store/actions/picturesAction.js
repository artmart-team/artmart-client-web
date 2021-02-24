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

export const searchCharacter = (search) => {
  return async next => {
    try {
      console.log('masuk sini')
      next({ type: "SEARCH_CHARACTER", payload : search})
    } catch (error) {
      
    }
  }
}

export const postPicture = payload => {
  return async next => {
    try {
      next({ type: 'FETCH_PICTURES_START' });

      const { data } = await axios({
        method: 'POST',
        url: `/artists/${localStorage.getItem('id')}/pictures`,
        data: payload,
        headers: { access_token: localStorage.getItem('access_token') }
      });

      return next({ type: 'POST_PICTURE', payload: data });
    } catch (err) {
      console.log(err);
    };
  };
};

export const resetPicture = _ => {
  return async next => {
    try {
      return next({ type: 'RESET_PICTURE' });
    } catch (err) {
      console.log(err);
    };
  };
};

export const categoryList = _ => {
  return async next => {
    try {
      next({ type: 'FETCH_PICTURES_START' });

      const { data } = await axios({
        method: 'GET',
        url: `/categories`
      });

      return next({ type: 'FETCH_CATEGORIES', payload: data });
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
      });
    } catch (err) {
      console.log(err, 'error currentCollection Action')
      dispatch({
        type: 'FETCH_CURRENT_COLLECTION_ERROR',
        payload: err
      })
    }
  }
}

export const artistPic = (artistId) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'FETCH_ARTIST_PIC_START'
      })

      const { data } = await axios.get(`/artists/${artistId}/pictures`)

      dispatch({
        type: 'FETCH_ARTIST_PIC_DONE',
        payload: data
      });
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
