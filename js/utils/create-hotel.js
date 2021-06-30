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

  const author = {
    avatar: `img/avatars/user${index+1}.png`,
  };

  const offer = {
    title: `Отель ${index+1}`,
    address: `${location.lat} , ${location.lng}`,
    price: getRandomPositiveInteger(1000, 1000000),
    type: BUILDINGS[getRandomPositiveInteger(0, BUILDINGS.length - 1)],
    rooms: getRandomPositiveInteger(1, 10),
    guests: getRandomPositiveInteger(1, 10),
    checkin: CHECKTIME[getRandomPositiveInteger(0, CHECKTIME.length - 1)],
    ckeckout: CHECKTIME[getRandomPositiveInteger(0, CHECKTIME.length - 1)],
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
