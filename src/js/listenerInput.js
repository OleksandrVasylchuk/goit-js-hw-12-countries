import refs from './refs'
import debounce from 'lodash.debounce';
import responseHandlerInput from './responseHandler'



refs.input.addEventListener(
  'input',
  debounce(e => {
    responseHandlerInput(e.target.value);
  }, 500),
)


// import axios from 'axios';

// // axios.defaults.baseURL = 'https://restcountries.eu/rest/v2';

// export const fechCantries = () => {
// //   return exios.get('/name/{name}').then(response => response.data.results);
//   // return exios.get('/name/{Colombia}').then(response => console.log(response)).cetch(eror => console.log(eror));
//  return axios
//   .get('https://restcountries.eu/rest/v2/name/Colombia')
//   .then(response => (this.info = response.data.bpi))
//   .catch(error => console.log(error));
// };
