// import fechCantries from './counry-servis';
import contryCard from '../templeates/contryCard.hbs';
import counryList from '../templeates/country-list.hbs';
import alerts from './alert.js';
import debounce from 'lodash.debounce';

const refs = {
  input: document.querySelector('.form-control'),
  div: document.querySelector('.form-group'),
  form: document.querySelector('.form-wrapper'),
};

refs.input.addEventListener(
  'input',
  debounce(e => {
    responseHandlerInput(e.target.value);
  }, 500),
);

function fetchCountryByName(countryName) {
  refs.div.innerHTML = '';
  return fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
    .then(response => {
      return response.json();
    })
    .catch(error => console.log(error));
  // .finally(() => {
  //   form.reset();
  // });
}

function responseHandlerInput(input) {
  fetchCountryByName(input).then(array => {
    if (array.length === undefined) {
      alerts.errorNotFound();
    } else if (array.length > 10) {
      alerts.errorManyResults();
    } else if (array.length === 1) {
      refs.div.innerHTML = '';
      const countriesTemplate = contryCard(array);
      console.log(countriesTemplate);
      refs.div.innerHTML = countriesTemplate;
    } else {
      refs.div.innerHTML = '';
      const countriesTemplateList = counryList(array);
      refs.div.innerHTML = countriesTemplateList;
    }
  });
}

// refs.form.addEventListener('submit', onSerch);
// function onSerch(e) {
//   e.preventDefault();
//   refs.div.innerHTML = '';
//   const form = e.currentTarget;
//   const searchQuery = form.elements.query.value;
//   refs.div.classList.add('form-grid');
//   function allCountries() {
//     if (searchQuery.length === 3) {
//       refs.div.classList.remove('form-grid');
//     }
//   }

//   allCountries();
//   fetchCountryByName(searchQuery).then(renderCountryCard);
// }
// function renderCountryCard(country) {
//   const marcup = contryCard(country);
//   refs.div.innerHTML = marcup;
// }

// export default onSerch;
