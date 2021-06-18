import {
  createHotel
} from './utils/create-hotels.js';

// Функция, генерирующая случайное число в заданном интервале
// Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// const getRandomNumber = (min, max, num) => {
//   if (min > max || min < 0 || max < 0 || num < 0) {
//     return false;
//     // return console.log("error");
//   }
//   const randomNumber = Math.random() * (max - min) + min;
//   return randomNumber.toFixed(num);
//   // return console.log(finalNomber);
// };

// Генерация 10 отелей и запись их в переменную
let hotels = [];

for (let i = 0; i < 10; i++) {
  hotels[i] = createHotel(i);
}

console.log(hotels);
