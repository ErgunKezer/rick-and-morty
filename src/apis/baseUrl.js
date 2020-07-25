import axios from 'axios';

const baseURL = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

export default baseURL;
