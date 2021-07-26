import {
  setActiveAdForm
} from './work-state.js';
import {
  createPopup
} from './create-popup.js';
import {
  DEFAULT_COORDINATES,
  MAIN_ICON_PATH,
  MAIN_MARKER_ANCHOR,
  MAIN_MARKER_SIZE,
  MAP_ZOOM,
  MARKERS_COUNT,
  PIN_ANCHOR,
  PIN_SIZE,
  TITLE_LAYER_ATTRIBUTION,
  TITLE_LAYER_URL
} from '../data.js';
import {
  getData
} from './requests.js';
import {
  onGetDataFail,
  onGetDataSuccess
} from './data-events.js';

const address = document.querySelector('#address');
let map;
let mainPinIcon;
let mainPinMarker;
let markers;

export const initMainMarker = () => {
  if (mainPinMarker) {
    mainPinMarker.remove();
  }
  const {
    defaultLat,
    defaultLng,
  } = DEFAULT_COORDINATES;
  // Кастомный маркер -
  mainPinIcon = L.icon({
    iconUrl: MAIN_ICON_PATH,
    iconSize: MAIN_MARKER_SIZE,
    iconAnchor: MAIN_MARKER_ANCHOR,
  });
  // Инициализация главного маркера
  const mainMarker = L.marker({
    lat: defaultLat,
    lng: defaultLng,
  }, {
    draggable: true,
    icon: mainPinIcon,
  });

  // Выбор адреса
  mainMarker.on('move', (event) => {
    const {
      lat,
      lng,
    } = event.target.getLatLng();

    address.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
  });

  return mainMarker;
};

// Инициализация карты
export const initMap = () => {
  const {
    defaultLat,
    defaultLng,
  } = DEFAULT_COORDINATES;

  address.value = `${defaultLat}, ${defaultLng}`;

  if (map === undefined) {
    map = L.map('map-canvas')
      .on('load', () => {
        setActiveAdForm();
        getData(onGetDataSuccess, onGetDataFail); // Получаем данные отелей с сервера
      })
      .setView({
        lat: defaultLat,
        lng: defaultLng,
      }, MAP_ZOOM);
    L.tileLayer(
      TITLE_LAYER_URL, {
        attribution: TITLE_LAYER_ATTRIBUTION,
      },
    ).addTo(map);
  }

  mainPinMarker = initMainMarker();

  // Добавление главного маркера на карту
  mainPinMarker.addTo(map);
};

export const createPins = (hotels) => {
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
      iconSize: PIN_SIZE,
      iconAnchor: PIN_ANCHOR,
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
    if (ads.length > MARKERS_COUNT) {
      for (let index = 0; index < MARKERS_COUNT; index++) {
        createAdMarker(ads[index]);
      }
    } else {
      ads.forEach(createAdMarker);
    }
  };
  createAds(hotels);
};

export {
  mainPinMarker,
  mainPinIcon
};
