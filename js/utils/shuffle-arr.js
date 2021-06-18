import {
  getRandomPositiveInteger
} from "./get-random-positive-integer.js";

// Функия для генерации массива случайной длинны из значений передаваемого массива (элементы НЕ повторяются)
export const shuffleArr = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) { // https://learn.javascript.ru/task/shuffle
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  let newArr = [];

  for (let i = 0; i < getRandomPositiveInteger(1, arr.length - 1); i++) {
    newArr[i] = arr[i];
  }

  return newArr;
}
