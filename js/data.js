import {
  getRandomPositiveFloat
} from './utils/get-random-positive-float.js';

const LOCATION = {
  lat: getRandomPositiveFloat(35.65, 35.7, 5),
  lng: getRandomPositiveFloat(139.7, 139.8, 5),
};
const BUILDINGS = ["palace", "flat", "house", "bungalow", "hotel"];
const CHECKTIME = ["12:00", "13:00", "14:00"];
const TYPEOFROOM = ["standart", "comfort", "luxe", "president"];
const FACILITIES = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
const PHOTOEXAMPLES = [
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg",
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg",
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg"
];

export {
  LOCATION,
  BUILDINGS,
  CHECKTIME,
  TYPEOFROOM,
  FACILITIES,
  PHOTOEXAMPLES
}
