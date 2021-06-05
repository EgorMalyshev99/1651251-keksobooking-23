// Функция, генерирующая случайное число в заданном интервале
// Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getCoordinates = (a, b) => {
  let result = Math.random() * (b - a) + a;
  if (result >= 0) {
    return result;
  }
  return alert("Введено неверное значение");
}
