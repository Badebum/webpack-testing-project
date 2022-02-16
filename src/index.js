import fetchContries from './js/fetchData.js';
import countries from './templates/countries.hbs';

const refs = {
  areaInput: document.querySelector('#areaInput'),
  card: document.querySelector('.card-container'),
};

refs.areaInput.addEventListener('change', onChange);

function onChange(e) {
  e.preventDefault();
  const country = refs.areaInput.value;

  fetchContries(country).then(cardCountriesRender);
}

function cardCountriesRender(info) {
  const markup = countries(info);

  refs.card.insertAdjacentHTML = markup;
}
