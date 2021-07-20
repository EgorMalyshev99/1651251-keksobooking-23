import {
  createMap
} from './utils/create-map.js';
import {
  getData
} from './utils/requests.js';
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
    console.log(err); // Здесь будет функция, вызывающая сообщение для пользователя
  },
);

setDisabled();
setValidForm();
getData();
fetchHotels();
