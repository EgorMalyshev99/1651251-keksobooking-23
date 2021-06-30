import {
  createHotel
} from './utils/create-hotel.js';

// Генерация 10 отелей и запись их в переменную
const hotels = [];

for (let index = 0; index < 10; index++) {
  hotels[index] = createHotel(index);
}
