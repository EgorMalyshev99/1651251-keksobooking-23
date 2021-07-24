import {
  createPins
} from './work-with-map.js';
import {
  getFilteredData
} from './filter.js';
import {
  getData
} from './requests.js';
import {
  setActiveFilter
} from './work-state.js';
import {
  resetUserForm
} from './work-with-form.js';

const errorDownloadMessage = document.querySelector('#error-downloading').content;
const errorPostMessage = document.querySelector('#error').content;
const successPostMessage = document.querySelector('#success').content;
const messageWrapper = document.querySelector('body');
const adFormSubmit = document.querySelector('.ad-form__submit');
let HOTELS;

// Успешное получение данных
export const onGetDataSuccess = (data) => {
  HOTELS = data;
  createPins(HOTELS); // Создаем карту с полученными данными
  setActiveFilter(); // Активируем фильтр
  getFilteredData(data); // Активируем настройки фильтра
};

// Ошибка получения данных
export const onGetDataFail = () => {
  // Если сообщение ранее не выводилось
  if (!document.querySelector('.error-downloading')) {
    messageWrapper.append(errorDownloadMessage);
  }

  const errDownloadContent = document.querySelector('.error-downloading');
  const downloadBtn = document.querySelector('.error-downloading__button');

  // Показываем сообщение с помощью удаления класса "hidden" (если ранее он был добавлен)
  if (errDownloadContent.classList.contains('hidden')) {
    errDownloadContent.classList.remove('hidden');
  }

  // Скрываем сообщение и пытаемся получить данные ещё раз
  downloadBtn.addEventListener('click', () => {
    errDownloadContent.classList.add('hidden');
    getData(onGetDataSuccess, onGetDataFail);
  });
};

// Успешная отправка данных
export const onSentDataSuccess = () => {
  // Если сообщение ранее не выводилось
  if (!document.querySelector('.success')) {
    messageWrapper.append(successPostMessage);
  }

  const successContent = document.querySelector('.success');

  // Bсчезновение сообщения
  if (successContent) {
    successContent.addEventListener('click', () => {
      successContent.classList.add('hidden');
    });

    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        successContent.classList.add('hidden');
      }
    });
  }

  resetUserForm(); // Значения инпутов устанавливаем по дефолту
  adFormSubmit.removeAttribute('disabled'); // Активируем кнопку "Опубликовать"
};

// Ошибка отправки данных
export const onSentDataFail = () => {
  // Если сообщение ранее не выводилось
  if (!document.querySelector('.error')) {
    messageWrapper.append(errorPostMessage);
  }

  const errContent = document.querySelector('.error');
  const errBtn = document.querySelector('.error__button');

  // Показываем сообщение с помощью удаления класса "hidden" (если ранее он был добавлен)
  if (errContent.classList.contains('hidden')) {
    errContent.classList.remove('hidden');
  }

  // Скрываем сообщение по нажатию на кнопку "Попробовать снова",
  // на область экрана и по нажатию на кнопку клавиатуры "Esc"
  errBtn.addEventListener('click', () => {
    errContent.classList.add('hidden');
  });

  errContent.addEventListener('click', () => {
    errContent.classList.add('hidden');
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      successContent.classList.add('hidden');
    }
  });
};

export {
  HOTELS
};
