import axios from 'axios';
export { fetchBreeds, fetchCatByBreed };

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] =
  'live_32QuEtSUa4B1mBDYZcQ5jGz3DaJl5LlsKHCv42KCYUzXQiHOoAVCQBpMPmosGqYV';

function fetchBreeds() {
  return axios.get('/breeds');
}

function fetchCatByBreed(breedId) {
  return axios.get(`/images/search?breed_ids=${breedId}`);
}
