import axios from '../../API/axios.js';
import { useHistory } from 'react-router-dom';
import path from '../../../routers/index.js';

export const registerArtist = payload => {
  return async _ => {
    // const history = useHistory();
    try {
      await axios({
        method: 'POST',
        url: '/artists/register',
        data: payload
      });

      console.log('Register Success')
      // return history.push(path.loginArtist);
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
  return async _ => {
    try {
      await axios({
        method: 'POST',
        url: '/users/register',
        data: payload
      });

      console.log('Register Success')
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
