import {
  getData
} from './utils/requests.js';
import {
  onGetDataFail,
  onGetDataSuccess
} from './utils/data-events.js';
import {
  setDisabled
} from './utils/work-state.js';
import {
  setUserFormReset,
  setUserFormSubmit,
  setValidForm
} from './utils/work-with-form.js';
import {
  initMap
} from './utils/create-map.js';

setDisabled(); // Дизейблим форму
initMap(); // Инициализируем карту
getData(onGetDataSuccess, onGetDataFail); // Получаем данные отелей с сервера
setValidForm(); // Подключаем валидацию формы
setUserFormSubmit(); // Установка новой логики отправки формы объявления
setUserFormReset(); // Установка новой логики сброса формы объявления
