import {
  createMap
} from './utils/create-map.js';
import {
  getData
} from './utils/requsts.js';
import {
  setDisabled
} from './utils/work-state.js';
import {
  setValidForm
} from './utils/work-with-form.js';

const fetchHotels = getData(
  (hotels) => {
    createMap(hotels);
  },
  (err) => {
    console.log(err);
  },
);

setDisabled();
setValidForm();
getData();
fetchHotels();
