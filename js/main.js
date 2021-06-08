// Функция, генерирующая случайное число в заданном интервале
// Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomNumber = (min, max, num) => {
  if (min > max) {
    return console.log('Первое число больше второго');
  } else if (min < 0 || max < 0 || num < 0) {
    return console.log('Значение меньше нуля');
  }
  const earlyNumber = (Math.floor(Math.random() * (max - min + 1)) + min);
  const finalNumber = earlyNumber.toFixed(num);
  return console.log(`Результат: + ${finalNumber}`);
};

getRandomNumber(1, 5, 4);
