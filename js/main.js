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

import {
  getRandomPositiveInteger
} from "./utils/get-random-positive-integer.js";

const createHotels = (count) => {

  // *****Data*****

  let location = {
    lat: getRandomNumber(35.65, 35.7, 5),
    lng: getRandomNumber(139.7, 139.8, 5)
  };
  let buildings = ["palace", "flat", "house", "bungalow", "hotel"];
  let checkTime = ["12:00", "13:00", "14:00"];
  let typeOfRoom = ["standart", "comfort", "luxe", "president"];
  let facilities = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
  let photoExamples = [
    "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg",
    "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg",
    "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg"
  ]

  // *****Functions*****

  // Вывод случайных элементов массива
  const createRandomItems = (arr) => {
    let newArr = [];
    let rand = getRandomPositiveInteger(1, 6);

    for (let i = 0;
      (i < rand) && (i < arr.length); i++) {
      let r = Math.floor(Math.random() * (arr.length - i)) + i;
      newArr[i] = arr[r];
      arr[r] = arr[i];
      arr[i] = newArr[i];
    }

    return newArr;
  }

  // Возврат случайного элемента из массива
  const getOneOfArr = (arr) => {
    let items;
    return items = arr[getRandomPositiveInteger(0, arr.length - 1)];
  }

  // Функия для генерации массива случайной длинны из значений передаваемого массива
  const createPhotos = (arr) => {
    let newArr = [];
    let randomLength = getRandomPositiveInteger(1, 10);

    for (let i = 0; i <= randomLength; i++) {
      newArr[i] = arr[getRandomPositiveInteger(0, arr.length - 1)]
    }

    return newArr;
  }

  // *****Элементы итогового объекта*****

  let author = {
    avatar: `img/avatars/user${count}.png`
  };

  let offer = {
    title: `Отель ${count+1}`,
    adress: `${location.lat}` + ', ' + `${location.lng}`,
    price: getRandomPositiveInteger(1000, 1000000), // !Warn!
    type: getOneOfArr(buildings),
    rooms: getRandomPositiveInteger(1, 10), // !Warn!
    guests: getRandomPositiveInteger(1, 10), // !Warn!
    checkin: getOneOfArr(checkTime),
    ckeckout: getOneOfArr(checkTime),
    features: createRandomItems(facilities),
    description: getOneOfArr(typeOfRoom),
    photos: createPhotos(photoExamples)
  }

  let hotel = {
    author,
    offer
  }

  return console.log(hotel); // Вывод объекта в консоль
}

// Генерация отелей
for (let i = 0; i < 10; i++) {
  createHotels(i);
}
