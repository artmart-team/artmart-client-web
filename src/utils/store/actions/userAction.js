import axios from '../../API/axios.js';
import { useHistory } from 'react-router-dom';
import path from '../../../routers/index.js';

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
  return async _ => {
    try {
      const login = await axios({
        method: 'POST',
        url: '/artists/login',
        data: payload
      });

      return console.log(login)
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
  return async _ => {
    try {
      const login = await axios({
        method: 'POST',
        url: '/users/login',
        data: payload
      });

      return console.log(login)
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