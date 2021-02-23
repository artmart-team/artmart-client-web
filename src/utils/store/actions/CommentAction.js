import axios from '../../API/axios.js'

export const commentSubmit = (payload, UserId, ArtistId) => {
  return async next => {
    try {
      // console.log(payload, '<<<< DI ACTION');

      const submit = await axios({
        method: 'POST',
        url: `/users/${UserId}/artists/${ArtistId}/comments`,
        data: payload,
        headers: { access_token: localStorage.getItem('access_token') }
      });

      const { data } = await axios({
        method: 'GET',
        url: `/artists/${ArtistId}/comments`,
      });

      next({ type: 'COMMENT_SUBMIT', payload: submit.data, comments: data });
    } catch (err) {
      console.log(err);
    };
  };
};

export const commentFetch = ArtistId => {
  return async next => {
    try {
      next({ type: 'LOADING' });

      const { data } = await axios({
        method: 'GET',
        url: `/artists/${ArtistId}/comments`,
      });

      next({ type: 'COMMENT_FETCH', payload: data });
    } catch (err) {
      console.log(err);
    };
  };
};

export const commentDelete = (CommentId, ArtistId) => {
  return async next => {
    try {

      const message = await axios({
        method: 'DELETE',
        url: `/users/${Number(localStorage.getItem('id'))}/artists/${Number(ArtistId)}/comments/${CommentId}`,
        headers: {access_token: localStorage.getItem('access_token')}
      });

      console.log(message.data);

      next({ type: 'COMMENT_DELETE', payload: Number(CommentId) });
    } catch (err) {
      console.log(err)
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