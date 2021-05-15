// import fechCantries from './counry-servis';
import refs from './refs.js'





function fetchCountries(countryName) {
  refs.div.innerHTML = '';
  return fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
    .then(response => {
      return response.json();
    })
    .catch(error => console.log(error));
}

export default fetchCountries;
;

// import contryCard from '../templeates/contryCard.hbs';
// refs.form.addEventListener('submit', onSerch);
// function onSerch(e) {
//   e.preventDefault();
//   refs.div.innerHTML = '';
//   const form = e.currentTarget;
//   const searchQuery = form.elements.query.value;
//   refs.div.classList.add('form-grid');
//   function allCountries() {
//     if (refs.input.value.length > 1) {
//       refs.div.classList.remove('form-grid');

//     }
//   }

//   allCountries();
//   fetchCountries(searchQuery).then(renderCountryCard);
// }
// function renderCountryCard(country) {
//   const marcup = contryCard(country);
//   refs.div.innerHTML = marcup;
// }


