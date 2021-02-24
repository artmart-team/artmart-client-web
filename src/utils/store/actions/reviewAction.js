import axios from '../../API/axios.js';

export const getReviewForArtist = artistId => {
  return async next => {
    try {
      next({ type: 'LOADING' });

      const reviewsData = await axios({
        method: 'GET',
        url: `/artists/${artistId}/reviews`
      });

      const ratingsData = await axios({
        method: 'GET',
        url: `/artists/${artistId}/ratings`
      });

      const obj = {
        reviews: reviewsData.data,
        ratings: ratingsData.data
      }


      next({ type: 'FETCH_REVIEW_FOR_ARTIST', payload: obj });
    } catch (err) {
      console.log(err);
    };
  };
};
