// Получение данных - (задание 11 пункт 1)
export const getData = (onSuccess, onError) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data', {
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

// Отправка данных - (задание 11 пункт 3)
export const postData = (onSuccess, onError, body) => {
  fetch(
      'https://23.javascript.pages.academy/keksobooklng', {
        method: 'POST',
        body,
      },
    )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError();
        throw new Error(`${response.status} ${response.statusText}`);
      }
    })
    .catch(() => {
      onError();
    });
};
