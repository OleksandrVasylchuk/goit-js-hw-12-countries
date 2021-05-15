import contryCard from '../templeates/contryCard.hbs';
import counryList from '../templeates/country-list.hbs';
import fetchCountries from './fetchCountries.js';
import refs from './refs.js';
import alerts from './alert.js';

function responseHandlerInput(input) {
  fetchCountries(input).then(array => {
    if (array.length === undefined) {
      alerts.errorNotFound();
    } else if (array.length > 10) {
      alerts.errorManyResults();
    } else if (array.length === 1) {
      refs.div.innerHTML = contryCard(array);
    } else {
      refs.div.innerHTML = counryList(array);
    }
  });
}
export default responseHandlerInput;
