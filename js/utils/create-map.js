// Создание карты

import {
  setActive
} from './work-state.js';
import {
  createPopup
} from './create-popup.js';

const address = document.querySelector('#address');

export const createMap = (hotelsList) => {
  // Инициализация карты - (задание 9 пункт 2)
  const map = L.map('map-canvas')
    .on('load', () => {
      setActive();
    })
    .setView({
      lat: 35.68950,
      lng: 139.69171,
    }, 12);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  // Задание 9 пункт 3:
  // Кастомный маркер -
  const mainPinIcon = L.icon({
    iconUrl: './img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  // Инициализация главного маркера
  const mainPinMarker = L.marker({
    lat: 35.68950,
    lng: 139.69171,
  }, {
    draggable: true,
    icon: mainPinIcon,
  });

  // Добавление главного маркера на карту
  mainPinMarker.addTo(map);
  // Конец 3го пункта 9го задания

  // Выбор адреса - (задание 9 пункт 4)
  mainPinMarker.on('move', (event) => {
    const {
      lat,
      lng,
    } = event.target.getLatLng();

    address.value = `${lat}, ${lng}`;
  });

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
  };

  const createAds = (ads) => ads.forEach(createAdMarker);
  // console.log(hotelsList);
  createAds(hotelsList);
};
