import baseUrl from './baseUrl';

const characterApi = () => {
  return baseUrl.get('/character');
};

export default characterApi;
