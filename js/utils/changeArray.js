import {
  getRandomPositiveInteger
} from "./get-random-positive-integer.js";

// Функия для генерации массива случайной длинны из значений передаваемого массива (элементы повторяются)
export const growArr = (arr) => {
  let newArr = [];

  for (let i = 0; i <= getRandomPositiveInteger(1, 10); i++) {
    newArr[i] = arr[getRandomPositiveInteger(0, arr.length - 1)]
  }

  return newArr;
}

// Функия для генерации массива случайной длинны из значений передаваемого массива (элементы НЕ повторяются)
export const shuffleArr = (arr) => {
  const newArr = [...arr];

  for (let i = newArr.length - 1; i > 0; i--) { // https://learn.javascript.ru/task/shuffle
    let j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }

  let result = [];

  for (let i = 0; i < getRandomPositiveInteger(1, arr.length - 1); i++) {
    result[i] = newArr[i];
  }

  return result;
}
