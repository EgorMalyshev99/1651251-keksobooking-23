import {
  getRandomPositiveInteger
} from './get-random-positive-integer.js';
import {
  getRandomPositiveFloat
} from './get-random-positive-float.js';
import {
  shuffleArr,
  growArr
} from './changeArray.js';
import {
  BUILDINGS,
  CHECKTIME,
  FACILITIES,
  TYPEOFROOM,
  PHOTOEXAMPLES
} from '../data.js';

export const createHotel = (index) => {
  const location = {
    lat: getRandomPositiveFloat(35.65, 35.7, 5),
    lng: getRandomPositiveFloat(139.7, 139.8, 5),
  };

  const checkNumeral = (number) => {
    if (number === 0) {
      number++;
    }
    if (number < 10) {
      number = `0${number}`;
    }
    return number;
  };

  const author = {
    avatar: `img/avatars/user${checkNumeral(index)}.png`,
  };

  const offer = {
    title: `Отель ${index+1}`,
    address: {
      lat: location.lat,
      lng: location.lng
    },
    price: getRandomPositiveInteger(0, 10000),
    type: BUILDINGS[getRandomPositiveInteger(0, BUILDINGS.length - 1)],
    rooms: getRandomPositiveInteger(1, 3),
    guests: getRandomPositiveInteger(1, 3),
    checkin: CHECKTIME[getRandomPositiveInteger(0, CHECKTIME.length - 1)],
    checkout: CHECKTIME[getRandomPositiveInteger(0, CHECKTIME.length - 1)],
    features: shuffleArr(FACILITIES),
    description: TYPEOFROOM[getRandomPositiveInteger(0, TYPEOFROOM.length - 1)],
    photos: growArr(PHOTOEXAMPLES),
  };

  const hotel = {
    author,
    offer,
  };

  return hotel;
};
