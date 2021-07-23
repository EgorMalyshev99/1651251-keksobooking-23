import {
  setActiveAdForm
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

// Инициализация карты
export const initMap = () => {
  const {
    defaultLat,
    defaultLng,
  } = DEFAULTCOORDINATES;

  address.value = `${defaultLat}, ${defaultLng}`;

  map = L.map('map-canvas')
    .on('load', () => {
      setActiveAdForm();
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

  // Выбор адреса
  mainPinMarker.on('move', (event) => {
    const {
      lat,
      lng,
    } = event.target.getLatLng();

    address.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
  });
};

export const createPins = (hotels) => {
  if (map === undefined) {
    initMap();
  }

  if (markers) {
    markers.forEach((item) => {
      map.removeLayer(item);
    });
  }

  markers = [];

  // Добавление на карту 'обычных' меток объявлений
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

  const createAds = (ads) => {
    ads.forEach(createAdMarker);
  };
  createAds(hotels);
  console.log(hotels);
};
