import {
  createHotel
} from './utils/create-hotel.js';
import {
  createPopup
} from './utils/create-popup.js';

const hotels = [];

for (let index = 0; index < 10; index++) {
  hotels[index] = createHotel(index);
}

hotels.forEach((hotel) => {
  createPopup(hotel);
});
