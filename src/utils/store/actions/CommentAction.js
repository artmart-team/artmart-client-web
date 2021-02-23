import axios from '../../API/axios.js'
import { artistPic } from './picturesAction.js';

export const commentSubmit = (payload, UserId, ArtistId) => {
  return async next => {
    try {
      // console.log(payload, '<<<< DI ACTION');

      const { data } = await axios({
        method: 'POST',
        url: `/users/${UserId}/artists/${ArtistId}/comments`,
        data: payload,
        headers: { access_token: localStorage.getItem('access_token') }
      });

      next({ type: 'COMMENT_SUBMIT', payload: data });
    } catch (err) {
      console.log(err);
    };
  };
};

export const commentFetch = ArtistId => {
  return async next => {
    try {
      console.log(ArtistId, 'FETCHING')
    } catch (err) {
      console.log(err);
    };
  };
};

export const commentReset = _ => {
  return async next => {
    try {
      next({ type: 'RESET_COMMENT' });
    } catch (err) {
      console.log(err);
    };
  };
};