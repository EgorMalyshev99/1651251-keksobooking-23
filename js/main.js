import {
  createHotel
} from './utils/create-hotel.js';
import {
  createPopup
} from './create-layout.js';

// Генерация 10 отелей и запись их в переменную
const hotels = [];

for (let index = 0; index < 10; index++) {
  hotels[index] = createHotel(index);
}

console.log(hotels);
console.log(hotels[0].offer.ckeckout);

const exampleInner = document.querySelector('.map');

hotels.forEach(hotel => {
  createPopup(exampleInner, hotel);
})
