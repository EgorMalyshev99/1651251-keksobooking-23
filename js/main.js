import {
  getData
} from './utils/requests.js';
import {
  getDataFail,
  getDataSuccess
} from './utils/data-events.js';
import {
  setDisabled
} from './utils/work-state.js';
import {
  setUserFormReset,
  setUserFormSubmit,
  setValidForm
} from './utils/work-with-form.js';

setDisabled(); // Дизейблим форму
setValidForm(); // Подключаем валидацию формы
getData(getDataSuccess, getDataFail); // Получаем данные отелей с сервера
setUserFormSubmit(); // Установка новой логики отправки формы объявления
setUserFormReset(); // Установка новой логики сброса формы объявления
