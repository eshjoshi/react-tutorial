import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:9765',
  responseType: 'json',
  requestType: 'json',
});
