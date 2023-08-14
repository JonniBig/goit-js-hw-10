import axios from 'axios';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');

breedSelect.addEventListener('change', onSelect);
const catInfo = document.querySelector('.cat-info');

function onSelect(e) {
  catInfo.innerHTML = '';
  fetchCatByBreed(e.currentTarget.value)
    .then(response => {
      catInfo.innerHTML = createMarkupCatCard(response.data);
    })
    .catch(function (error) {
      onError();

      console.log(error);
    })
    .finally(function () {
      loader.style.display = 'none';
    });
}

fetchBreeds()
  .then(response => {
    const storedBreeds = response.data;
    breedSelect.innerHTML = createMarkupSelect(storedBreeds);
    slim();
  })
  .catch(function (error) {
    onError();
  })
  .finally(function () {
    loader.style.display = 'none';
  });

function createMarkupSelect(array) {
  return array
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
}

function createMarkupCatCard(array) {
  const url = array[0].url;
  const description = array[0].breeds[0].description;
  return `<img
        src="${url}"
        alt=""
        width="100%"
      />
      <p>
        ${description}
      </p>`;
}
function slim() {
  new SlimSelect({
    select: '.breed-select',
  });
}

function onError() {
  Report.failure('Oops', 'Something went wrong! Try reloading the page!', 'OK');
}
