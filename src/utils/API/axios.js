import axios from 'axios';

const initAxios = axios.create({
  baseURL: 'https://marterialize.herokuapp.com/'
});

export default initAxios;
