import axios from '../../API/axios.js';

export const getReviewForArtist = artistId => {
  return async next => {
    try {
      next({ type: 'LOADING' });

      const { data } = await axios({
        method: 'GET',
        url: `/artists/${artistId}/reviews`
      });

      next({ type: 'FETCH_REVIEW_FOR_ARTIST', payload: data });
    } catch (err) {
      console.log(err);
    };
  };
};
