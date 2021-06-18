import {
  getRandomPositiveInteger
} from './get-random-positive-integer.js';
import {
  shuffleArr
} from './shuffle-arr.js';
import {
  growArr
} from './grow-arr.js';
import * as data from '../data.js';

export const createHotel = (i) => {
  let author = {
    avatar: `img/avatars/user${i+1}.png`
  };

  let offer = {
    title: `Отель ${i+1}`,
    address: `${data.LOCATION.lat}` + ', ' + `${data.LOCATION.lng}`,
    price: getRandomPositiveInteger(1000, 1000000),
    type: data.BUILDINGS[getRandomPositiveInteger(0, data.BUILDINGS.length - 1)],
    rooms: getRandomPositiveInteger(1, 10),
    guests: getRandomPositiveInteger(1, 10),
    checkin: data.CHECKTIME[getRandomPositiveInteger(0, data.CHECKTIME.length - 1)],
    ckeckout: data.CHECKTIME[getRandomPositiveInteger(0, data.CHECKTIME.length - 1)],
    features: shuffleArr(data.FACILITIES),
    description: data.TYPEOFROOM[getRandomPositiveInteger(0, data.TYPEOFROOM.length - 1)],
    photos: growArr(data.PHOTOEXAMPLES)
  }

  let hotel = {
    author,
    offer
  }

  return hotel;
}
