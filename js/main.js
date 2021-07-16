import { createHotel } from './utils/create-hotel.js';
import { createPopup } from './utils/create-popup.js';
import { setActive, setDisabled } from './utils/work-state.js';
import { setValidForm } from './utils/work-with-form.js';

const hotels = [];

setDisabled();
setTimeout(setActive, 3000);

for (let index = 0; index < 10; index++) {
  hotels[index] = createHotel(index);
}

hotels.forEach((hotel) => {
  createPopup(hotel);
});

setValidForm();
