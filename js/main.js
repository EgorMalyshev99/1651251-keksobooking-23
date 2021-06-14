// Функция, генерирующая случайное число в заданном интервале
// Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomNumber = (min, max, num) => {
  if (min > max || [...arguments].some(item => item < 0)) {
    return false;
    // return console.log("error");
  }
  const randomNumber = Math.random() * (max - min) + min;
  return randomNumber.toFixed(num);
  // return console.log(finalNomber);
};

getRandomNumber(1, -1, 4);
