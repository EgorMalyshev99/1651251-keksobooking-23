import {
  createHotel
} from './utils/create-hotel.js';

// Генерация 10 отелей и запись их в переменную
const HOTELS = [];

for (let index = 0; index < 10; index++) {
  HOTELS[index] = createHotel(index);
}
