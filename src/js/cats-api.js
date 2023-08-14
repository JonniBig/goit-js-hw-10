import axios from 'axios';
export { fetchBreeds, fetchCatByBreed };

function fetchBreeds() {
  // Make a request for a user with a given ID

  return axios.get('/breeds');
}

function fetchCatByBreed(breedId) {
  // Make a request for a user with a given ID
  return axios.get(`/images/search?breed_ids=${breedId}`);
}
