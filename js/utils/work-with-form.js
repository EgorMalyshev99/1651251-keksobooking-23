import {
  postData
} from './requests.js';
import {
  HOTELS,
  onSentDataSuccess,
  onSentDataFail
} from './data-events.js';
import {
  createPins,
  initMap
} from './work-with-map.js';
import {
  BUNGALOW_PRICE,
  DEFAULT_COORDINATES,
  FLAT_PRICE,
  HOTEL_PRICE,
  HOUSE_PRICE,
  PALACE_PRICE
} from '../data.js';

const avatar = document.querySelector('#avatar');
const avatarWrap = document.querySelector('.ad-form-header__preview');
const title = document.querySelector('#title');
const address = document.querySelector('#address');
const apsType = document.querySelector('#type');
const apsOptions = [...apsType];
const appsPrice = document.querySelector('#price');
const roomNumber = document.querySelector('#room_number');
const countRooms = [...roomNumber.children];
const capacity = document.querySelector('#capacity');
const guests = [...capacity.children];
const reversedGuests = guests.slice().reverse();
const timein = document.querySelector('#timein');
const timeinArr = [...timein];
const timeout = document.querySelector('#timeout');
const timeoutArr = [...timeout];
const features = document.querySelectorAll('.features__checkbox');
const description = document.querySelector('#description');
const images = document.querySelector('#images');
const imagesWrap = document.querySelector('.ad-form__photo');
const adForm = document.querySelector('.ad-form');
const adFormSubmit = document.querySelector('.ad-form__submit');
const userFormReset = document.querySelector('.ad-form__reset');
const mapFilters = document.querySelectorAll('.map__filter');
const mapCheckboxes = document.querySelectorAll('.map__checkbox');
let avatarImg;
let newImagesImg;

export const setValidForm = () => {
  // Логика выбора типа жилья
  apsType.addEventListener('change', (event) => {
    switch (event.target.value) {
      case 'flat':
        appsPrice.setAttribute('min', FLAT_PRICE);
        appsPrice.value = '';
        appsPrice.setAttribute('placeholder', `от ${FLAT_PRICE} ₽`);
        break;
      case 'bungalow':
        appsPrice.setAttribute('min', BUNGALOW_PRICE);
        appsPrice.value = '';
        appsPrice.setAttribute('placeholder', `от ${BUNGALOW_PRICE} ₽`);
        break;
      case 'house':
        appsPrice.setAttribute('min', HOUSE_PRICE);
        appsPrice.value = '';
        appsPrice.setAttribute('placeholder', `от ${HOUSE_PRICE} ₽`);
        break;
      case 'palace':
        appsPrice.setAttribute('min', PALACE_PRICE);
        appsPrice.value = '';
        appsPrice.setAttribute('placeholder', `от ${PALACE_PRICE} ₽`);
        break;
      case 'hotel':
        appsPrice.setAttribute('min', HOTEL_PRICE);
        appsPrice.value = '';
        appsPrice.setAttribute('placeholder', `от ${HOTEL_PRICE} ₽`);
        break;
      default:
        break;
    }
  });

  // Синхронизация полей «Количество комнат» и «Количество мест»
  const enableGuests = (selectedRooms) => {
    reversedGuests.forEach((guest, index) => {
      if (index <= selectedRooms && index !== 0 && selectedRooms !== '100') {
        guest.classList.remove('hidden');
        if (index === 1) {
          guest.setAttribute('selected', 'selected');
          capacity.value = index;
        }
      } else if (index === 0 && selectedRooms === '100') {
        guest.classList.remove('hidden');
        guest.setAttribute('selected', 'selected');
      } else {
        guest.classList.add('hidden');
        guest.removeAttribute('selected');
      }
    });
  };

  roomNumber.addEventListener('change', (event) => {
    enableGuests(event.target.value);
  });

  // Синхронизация времени заезда и времени выезда
  const syncTime = (val, currentSelect) => {
    let anotherSelect;
    let anotherOptions;
    if (currentSelect === 'in') {
      anotherSelect = timeout;
      anotherOptions = timeoutArr;
    } else if (currentSelect === 'out') {
      anotherSelect = timein;
      anotherOptions = timeinArr;
    }
    anotherSelect.value = val;
    anotherOptions.forEach((time) => {
      if (time.value !== val) {
        time.removeAttribute('selected');
      } else {
        time.setAttribute('selected', 'selected');
      }
    });
  };

  timein.addEventListener('change', (evt) => {
    syncTime(evt.target.value, 'in');
  });

  timeout.addEventListener('change', (evt) => {
    syncTime(evt.target.value, 'out');
  });

  avatar.addEventListener('change', () => {
    if (avatar.files && avatar.files[0]) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        avatarImg = document.querySelector('.ad-form-header__preview img');
        avatarImg.classList.add('hidden');
        const newAvatarImg = document.createElement('img');
        newAvatarImg.className = 'preview-img';
        newAvatarImg.setAttribute('src', evt.target.result);
        avatarWrap.prepend(newAvatarImg);
      };
      reader.readAsDataURL(avatar.files[0]);
    }
  });

  images.addEventListener('change', () => {
    if (images.files && images.files[0]) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        newImagesImg = document.createElement('img');
        newImagesImg.className = 'preview-img';
        newImagesImg.setAttribute('src', evt.target.result);
        imagesWrap.prepend(newImagesImg);
      };
      reader.readAsDataURL(images.files[0]);
    }
  });
};

const setCurrentOption = (arr, index) => {
  arr.forEach((option, itemIndex) => {
    if (option.hasAttribute('selected')) {
      option.removeAttribute('selected');
    }
    if (itemIndex === index) {
      option.setAttribute('selected', 'selected');
    }
  });
};

// Функция сброса формы создания объявления
export const resetUserForm = () => {
  const {
    defaultLat,
    defaultLng,
  } = DEFAULT_COORDINATES;
  // Аватар
  avatar.value = '';
  avatarImg.classList.remove('hidden');
  avatarImg.setAttribute('src', 'img/muffin-grey.svg');

  // Заголовок
  title.value = '';

  // Координаты
  initMap();
  address.value = `${defaultLat}, ${defaultLng}`;

  // Тип жилья
  setCurrentOption(apsOptions, 0);

  // Цена за ночь
  appsPrice.value = appsPrice.defaultValue;
  appsPrice.setAttribute('placeholder', 'от 0 ₽');

  // Количество комнат
  setCurrentOption(countRooms, 0);

  // Количество гостей
  setCurrentOption(guests, 2);
  capacity.value = '1';

  // Время заезда
  setCurrentOption(timeinArr, 0);
  timein.value = '12:00';

  // Время выезда
  setCurrentOption(timeoutArr, 0);
  timeout.value = '12:00';

  // Удобства
  features.forEach((feature) => {
    feature.checked = false;
  });

  // Описание
  description.value = '';

  // Фото жилья
  images.value = '';
  if (document.querySelector('.preview-img')) {
    document.querySelectorAll('.preview-img').forEach((img) => {
      img.remove();
    });
  }

  // Сброс селектов фильтра
  mapFilters.forEach((filter) => {
    filter.value = 'any';
  });

  // Сброс чекбоксов фильтра
  mapCheckboxes.forEach((checkbox) => {
    if (checkbox.checked === true) {
      checkbox.checked = false;
    }
  });

  createPins(HOTELS);
};

// Функция переопределения логики кнопки "Опубликовать"
export const setUserFormSubmit = () => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    adFormSubmit.setAttribute('disabled', '');

    postData(
      onSentDataSuccess,
      onSentDataFail,
      new FormData(evt.target),
    );
  });
};

// Функция переопределение логики кнопки "очистить"
export const setUserFormReset = () => {
  userFormReset.addEventListener('click', (evt) => {
    evt.preventDefault();
    resetUserForm();
  });
};
