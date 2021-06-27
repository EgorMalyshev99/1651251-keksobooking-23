import {
  createHotel
} from './utils/create-hotel.js';

// Генерация 10 отелей и запись их в переменную
const HOTELS = [];

for (let i = 0; i < 10; i++) {
  HOTELS[i] = createHotel(i);
}
