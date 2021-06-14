// Задание 1

// Функция, генерирующая случайное число в заданном интервале
// Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomNumber = (min, max, num) => {
  if (min > max || min < 0 || max < 0 || num < 0) {
    return false;
    // return console.log("error");
  }
  const randomNumber = Math.random() * (max - min) + min;
  return randomNumber.toFixed(num);
  // return console.log(finalNomber);
};

// Задание 2

import { getRandomPositiveInteger } from "./utils/get-random-positive-integer.js";

const createArr = (count, ttl, building) => {
  let array = new Array; // Создаем массив для хранения JS-объектов

  if (count > 10 || count <= 0) { // Проверяем на неверно введенные значения
    // return false;
    return alert("Введено неверное число");
  } else if (String(count).length === 1) { // Добавляем "0" спереди, если число от 1 до 9
    count = ("0" + count);
  }

  if (building !== "palace" && building !== "flat" && building !== "house" && building !== "bungalow" && building !== "hotel") {
    // return false;
    return alert("Введено невеное значение");
  }

  let author = {
    avatar: `img/avatars/user${count}.png`
  }

  let location = {
    lat: getRandomNumber(1, 10, 6),
    lng: getRandomNumber(1, 10, 6)
  }

  const createFeatures = () => {
    let arr = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
    let numberOfValues = getRandomPositiveInteger(0, 5);
    return arr[numberOfValues];
  }

  let offer = {
    title: ttl,
    adress: `${location.lat}` + ', ' + `${location.lng}`, // Warn
    price: getRandomPositiveInteger(0, 1000000), // Warn
    type: building,
    rooms: getRandomPositiveInteger(0, 10), // Warn
    guests: getRandomPositiveInteger(0, 10), // Warn
    checkin: "12:00",
    ckeckout: "14:00",
    features: createFeatures
  }

  array = {
    author,
    offer
  }

  return console.log(array);
}

createArr(5, "zozozo", "flat");
