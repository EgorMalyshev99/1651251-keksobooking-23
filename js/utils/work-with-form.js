import {
  postData
} from './requests.js';
import {
  onSentDataFail,
  onSentDataSuccess
} from './data-events.js';

const avatar = document.querySelector('#avatar');
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
const adForm = document.querySelector('.ad-form');
const adFormSubmit = document.querySelector('.ad-form__submit');
const userFormReset = document.querySelector('.ad-form__reset');

export const setValidForm = () => {
  // Логика выбора типа жилья (Задание 8.2)
  apsType.addEventListener('change', (event) => {
    switch (event.target.value) {
      case 'flat':
        appsPrice.setAttribute('min', 1000);
        appsPrice.value = '';
        appsPrice.setAttribute('placeholder', 'от 1000 ₽');
        break;
      case 'bungalow':
        appsPrice.setAttribute('min', 0);
        appsPrice.value = '';
        appsPrice.setAttribute('placeholder', 'от 0 ₽');
        break;
      case 'house':
        appsPrice.setAttribute('min', 5000);
        appsPrice.value = '';
        appsPrice.setAttribute('placeholder', 'от 5000 ₽');
        break;
      case 'palace':
        appsPrice.setAttribute('min', 10000);
        appsPrice.value = '';
        appsPrice.setAttribute('placeholder', 'от 10000 ₽');
        break;
      case 'hotel':
        appsPrice.setAttribute('min', 3000);
        appsPrice.value = '';
        appsPrice.setAttribute('placeholder', 'от 3000 ₽');
        break;
      default:
        break;
    }
  });

  // Синхронизация полей «Количество комнат» и «Количество мест» (Задание 8.1)
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

  // Синхронизация времени заезда и времени выезда (Задание 8.2)
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

  timein.addEventListener('change', (event) => {
    syncTime(event.target.value, 'in');
  });

  timeout.addEventListener('change', (event) => {
    syncTime(event.target.value, 'out');
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
  // Аватар
  avatar.value = '';

  // Заголовок
  title.value = '';

  // Координаты
  address.value = address.defaultValue;

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
