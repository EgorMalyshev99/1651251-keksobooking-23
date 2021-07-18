// Создание карты

import {
  setActive
} from "./work-state.js";
import {
  createPopup
} from "./create-popup.js";

export const createMap = (hotelsList) => {
  // Инициализация карты - задание 1
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

  // Кастомный маркер - задание 3
  const mainPinIcon = L.icon({
    iconUrl: '../../img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  // Инициализация главного маркера - задание 3
  const mainPinMarker = L.marker({
    lat: 35.68950,
    lng: 139.69171,
  }, {
    draggable: true,
    icon: mainPinIcon,
  }, );

  // Добавление главного маркера на карту
  mainPinMarker.addTo(map);

  // Отображение кординат маркера в инпуте адреса
  const address = document.querySelector('#address');
  let currentAddress = {
    lat: 35.68950,
    lng: 139.69171,
  };
  mainPinMarker.on('moveend', (evt) => {
    currentAddress = {
      lat: evt.target.getLatLng().lat,
      lng: evt.target.getLatLng().lng,
    };
    address.value = `${evt.target.getLatLng().lat}, ${evt.target.getLatLng().lng}`;
  });

  // Создание объявления (Выбор адреса) - задание 4
  const addAdMarker = (point) => {
    let lat = point.lat;
    let lng = point.lng;

    const icon = L.icon({
      iconUrl: '../../img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const marker = L.marker({
      lat,
      lng,
    }, {
      icon,
    }, );

    marker
      .addTo(map)
  };
  const addAdBtn = document.querySelector('.add-marker');

  addAdBtn.addEventListener('click', () => {
    addAdMarker(currentAddress);
  });

  // Добавление на карту "обычных" меток объявлений - задание 5
  const createMarker = (hotel) => {
    const {
      lat,
      lng
    } = hotel.offer.address;

    const icon = L.icon({
      iconUrl: '../../img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const marker = L.marker({
      lat,
      lng,
    }, {
      icon,
    }, );

    marker
      .addTo(map)
      .bindPopup(
        createPopup(hotel),
      );
  };

  const createAds = (ads) => {
    ads.forEach(ad => {
      createMarker(ad);
    });
  }

  window.addEventListener('load', () => {
    createAds(hotelsList);
  });
}
