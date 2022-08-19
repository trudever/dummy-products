import axios from 'axios';
var env = process.env.NODE_ENV || 'development';

const getAxios = () => {
  axios.defaults.baseURL =
    env === 'development'
      ? `http://localhost:5000/api`
      : '/api';
  return axios;
};

export default getAxios;
