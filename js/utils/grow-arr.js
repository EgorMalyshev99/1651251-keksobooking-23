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
