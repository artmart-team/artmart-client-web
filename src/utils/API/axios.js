import axios from 'axios';

const initAxios = axios.create({
  baseURL: 'http://localhost:4000'
});

export default initAxios;
