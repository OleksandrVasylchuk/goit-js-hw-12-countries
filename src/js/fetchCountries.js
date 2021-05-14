// import fechCantries from './counry-servis';
import contryCard from '../templeates/creating-country-markings.hbs';
import alerts from './alert.js';

const refs = {
  input: document.querySelector('.form-control'),
  div: document.querySelector('.form-group'),
  form: document.querySelector('.form-wrapper'),
};

refs.form.addEventListener('submit', onSerch);

function onSerch(e) {
  e.preventDefault();
  //   refs.div.innerHTML = '';
  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;
  fetchCountryByName(searchQuery)
    .then(renderCountryCard)
    .catch(() => {
      if (refs.input.value.length === 0) {
        alerts.errorEmptyQueryInput();
      } else {
        alerts.errorQuery();
      }
    })
    .finally(() => {
      form.reset();
    });
}

function fetchCountryByName(countryName) {
  return fetch(`https://restcountries.eu/rest/v2/name/${countryName}`).then(
    response => {
      return response.json();
    },
  );
}

function renderCountryCard(country) {
  const marcup = contryCard(country);
  refs.div.innerHTML = marcup;
}

export default onSerch;
