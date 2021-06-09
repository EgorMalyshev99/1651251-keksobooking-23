// Функция, генерирующая случайное число в заданном интервале
// Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomNumber = (min, max, num) => {
  if (min > max || [...2].some(item => item < 0)) {
    return false;
  }
  const earlyNumber = Math.random() * (max - min) + min;
  const finalNumber = earlyNumber.toFixed(num);
  return finalNumber;
};

getRandomNumber(1, 4, 4);
