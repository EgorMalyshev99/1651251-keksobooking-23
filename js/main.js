import {
  createHotel
} from './utils/create-hotel.js';
import {
  createMap
} from './utils/create-map.js';
import {
  setDisabled
} from './utils/work-state.js';
import {
  setValidForm
} from './utils/work-with-form.js';

const hotels = [];

for (let index = 0; index < 10; index++) {
  hotels[index] = createHotel(index);
}

setDisabled();
setValidForm();
createMap(hotels);
