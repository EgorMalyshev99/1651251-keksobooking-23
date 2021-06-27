import {
  getRandomPositiveInteger
} from './get-random-positive-integer.js';

// Функия для генерации массива случайной длинны из значений передаваемого массива (элементы повторяются)
export const growArr = (arr) => {
  const NEWARR = [];

  for (let i = 0; i <= getRandomPositiveInteger(1, 10); i++) {
    NEWARR[i] = arr[getRandomPositiveInteger(0, arr.length - 1)];
  }

  return NEWARR;
};

// Функия для генерации массива случайной длинны из значений передаваемого массива (элементы НЕ повторяются)
export const shuffleArr = (arr) => {
  const NEWARR = [...arr];

  for (let i = NEWARR.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [NEWARR[i], NEWARR[j]] = [NEWARR[j], NEWARR[i]];
  }

  return NEWARR.slice(0, getRandomPositiveInteger(0, NEWARR.length - 1));
};
