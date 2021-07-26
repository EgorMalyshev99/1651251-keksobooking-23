import {
  GET_LINK,
  POST_LINK
} from '../data.js';

// Получение данных
export const getData = (onSuccess, onError) => {
  fetch(GET_LINK, {
    method: 'GET',
    credentials: 'same-origin',
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((hotels) => {
      onSuccess(hotels);
    })
    .catch((err) => {
      onError(err);
    });
};

// Отправка данных
export const postData = (onSuccess, onError, body) => {
  fetch(
    POST_LINK, {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        return onSuccess();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .catch(() => {
      onError();
    });
};
