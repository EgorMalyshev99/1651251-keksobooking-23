import {
  createHotel
} from './utils/create-hotel.js';
import {
  createPopup
} from './create-popup.js';

// Генерация 10 отелей и запись их в переменную
const hotels = [];

for (let index = 0; index < 10; index++) {
  hotels[index] = createHotel(index);
}

const exampleInner = document.querySelector('.map');

hotels.forEach((hotel) => {
  createPopup(exampleInner, hotel);
});

console.log(hotels);
console.log(hotels[0].offer.ckeckin); // Вывод в консоль времени заезда 1го отеля
console.log(hotels[0].offer.ckeckout); // Вывод в консоль времени выезда 1го отеля
