import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://front-test.beta.aviasales.ru',
});
export default axiosInstance;
