import axios from '../../API/axios.js';

export const registerArtist = payload => {
  return async next => {
    try {
      next({ type: 'LOADING' });

      const { data } = await axios({
        method: 'POST',
        url: '/artists/register',
        data: payload
      });

      return next({ type: 'REGISTER', payload: data });
    } catch (err) {
      console.log(err)
    };
  };
};

export const loginArtist = payload => {
  return async next => {
    try {
      next({ type: 'LOADING' });

      const { data } = await axios({
        method: 'POST',
        url: '/artists/login',
        data: payload
      });

      return next({ type: 'LOGIN', payload: data.access_token, role: 'artist', id: data.id });
    } catch (err) {
      console.log(err);
    };
  };
};

export const registerCustomer = payload => {
  return async next => {
    try {
      next({ type: 'LOADING' });

      const { data } = await axios({
        method: 'POST',
        url: '/users/register',
        data: payload
      });

      return next({ type: 'REGISTER', payload: data });
    } catch (err) {
      console.log(err);
    };
  };
};

export const loginCustomer = payload => {
  return async next => {
    try {
      next({ type: 'LOADING' });

      const { data } = await axios({
        method: 'POST',
        url: '/users/login',
        data: payload
      });

      return next({ type: 'LOGIN', payload: data.access_token, role: 'customer', id: data.id });
    } catch (err) {
      console.log(err);
    };
  };
};

export const logout = _ => {
  return async next => {
    try {
      return next({ type: 'LOGOUT' });
    } catch (err) {
      console.log(err);
    };
  };
};

export const reset = _ => {
  return async next => {
    try {
      return next({ type: 'RESET_USER' });
    } catch (err) {
      console.log(err);
    };
  };
};

export const authenticated = _ => {
  return async next => {
    try {
      return next({ type: 'AUTHENTICATED' });
    } catch (err) {
      console.log(err);
    };
  };
};


export const getUserByID = id => {
  return async next => {
    try {
      next({ type: 'RESET_USER' });

      const { data } =
        localStorage.getItem('role') === 'artist' ? (await axios({
          method: 'GET',
          url: `/artists/${id}`
        })) : (await axios({
          method: 'GET',
          url: `/users/${id}`
        }))

      return next({ type: 'GET_USER_ID', payload: data });
    } catch (err) {
      console.log(err)
    };
  };
};

export const getOtherUserId = (role, id) => {
  return async next => {
    try {
      next({ type: 'RESET_OTHER_USER' });

      const { data } =
        role === 'artist' ? (await axios({
          method: 'GET',
          url: `/artists/${id}`
        })) : (await axios({
          method: 'GET',
          url: `/users/${id}`
        }))

      return next({ type: 'GET_OTHER_USER', payload: data });
    } catch (err) {
      console.log(err)
    };
  };
};