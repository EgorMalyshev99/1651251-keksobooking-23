// Фильтр
import {
  createMap
} from './create-map.js';

const typeSel = document.querySelector('#housing-type');
const price = document.querySelector('#housing-price');
const rooms = document.querySelector('#housing-rooms');
const guests = document.querySelector('#housing-guests');

export const activateFilter = (hotels) => {
  let filteredHotels = hotels;

  typeSel.addEventListener('change', (evt) => {
    if (evt.target.value !== 'any') {
      filteredHotels = hotels.filter((hotel) => hotel.offer.type === evt.target.value);
      createMap(filteredHotels);
    } else {
      createMap(hotels);
    }
  });

  price.addEventListener('change', (evt) => {
    if (evt.target.value !== 'any') {
      switch (evt.target.value) {
        case 'low':
          filteredHotels = hotels.filter((hotel) => Number(hotel.offer.price) <= 10000);
          break;
        case 'middle':
          filteredHotels = hotels.filter((hotel) => Number(hotel.offer.price) >= 10000 && Number(hotel.offer.price) <= 50000);
          break;
        case 'high':
          filteredHotels = hotels.filter((hotel) => Number(hotel.offer.price) >= 50000);
          break;
        default:
          break;
      }
      createMap(filteredHotels);
    } else {
      createMap(hotels);
    }
  });

  rooms.addEventListener('change', (evt) => {
    if (evt.target.value !== 'any') {
      filteredHotels = hotels.filter((hotel) => hotel.offer.rooms === Number(evt.target.value));
      createMap(filteredHotels);
    } else {
      createMap(hotels);
    }
  });

  guests.addEventListener('change', (evt) => {
    if (evt.target.value !== 'any') {
      switch (evt.target.value) {
        case '0':
          filteredHotels = hotels.filter((hotel) => hotel.offer.guests > 2);
          break;
        case '1':
          filteredHotels = hotels.filter((hotel) => hotel.offer.guests === 1);
          break;
        case '2':
          filteredHotels = hotels.filter((hotel) => hotel.offer.guests === 2);
          break;
        default:
          break;
      }
      createMap(filteredHotels);
    } else {
      createMap(hotels);
    }
  });
};
