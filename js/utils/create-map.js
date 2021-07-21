// Создание карты

import {
  setActive
} from './work-state.js';
import {
  createPopup
} from './create-popup.js';
import {
  DEFAULTCOORDINATES
} from '../data.js';

const address = document.querySelector('#address');
let map;
let mainPinIcon;
let mainPinMarker;
let markers;

export const createMap = (hotelsList) => {
  const {
    defaultLat,
    defaultLng,
  } = DEFAULTCOORDINATES;

  address.value = `${defaultLat}, ${defaultLng}`;

  const initMap = () => {
    // Инициализация карты - (задание 9 пункт 2)
    map = L.map('map-canvas')
      .on('load', () => {
        setActive();
      })
      .setView({
        lat: defaultLat,
        lng: defaultLng,
      }, 12);

    L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      },
    ).addTo(map);

    /* Задание 9 пункт 3: */
    // Кастомный маркер -
    mainPinIcon = L.icon({
      iconUrl: './img/main-pin.svg',
      iconSize: [52, 52],
      iconAnchor: [26, 52],
    });
    // Инициализация главного маркера
    mainPinMarker = L.marker({
      lat: defaultLat,
      lng: defaultLng,
    }, {
      draggable: true,
      icon: mainPinIcon,
    });
    // Добавление главного маркера на карту
    mainPinMarker.addTo(map);

    // Выбор адреса - (задание 9 пункт 4)
    mainPinMarker.on('move', (event) => {
      const {
        lat,
        lng,
      } = event.target.getLatLng();

      address.value = `${lat}, ${lng}`;
    });
  }

  if (map == undefined) {
    initMap();
  }

  if (markers) {
    markers.forEach(item => {
      map.removeLayer(item);
    });
  }

  markers = [];

  // Добавление на карту 'обычных' меток объявлений - (задание 9 пункт 5)
  const createAdMarker = (hotel) => {
    const {
      lat,
      lng,
    } = hotel.location;

    const icon = L.icon({
      iconUrl: './img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const marker = L.marker({
      lat,
      lng,
    }, {
      icon,
    });

    marker
      .addTo(map)
      .bindPopup(
        createPopup(hotel),
      );

    markers.push(marker);
  };

  console.log(hotelsList);
  const createAds = (ads) => {
    ads.forEach(createAdMarker);
  };
  createAds(hotelsList);
};
