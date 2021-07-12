const adForm = document.querySelector('.ad-form');
const title = document.querySelector('#title');
const apsType = document.querySelector('#type');
const appsPrice = document.querySelector('#price');

export const setValidForm = () => {

  adForm.setAttribute('method', 'POST');
  adForm.setAttribute('action', 'https://23.javascript.pages.academy/keksobooking');
  adForm.setAttribute('enctype', 'multipart/form-data');

  apsType.addEventListener('change', () => {
    switch (apsType.options[apsType.selectedIndex].value) {
      case 'flat':
        appsPrice.setAttribute('min', 1000);
        appsPrice.setAttribute('placeholder', 1000);
        break;
      case 'bungalow':
        appsPrice.setAttribute('min', 0);
        appsPrice.setAttribute('placeholder', 0);
        break;
      case 'house':
        appsPrice.setAttribute('min', 5000);
        appsPrice.setAttribute('placeholder', 5000);
        break;
      case 'palace':
        appsPrice.setAttribute('min', 10000);
        appsPrice.setAttribute('placeholder', 10000);
        break;
      case 'hotel':
        appsPrice.setAttribute('min', 3000);
        appsPrice.setAttribute('placeholder', 3000);
        break;
      default:
        break;
    }
  });

  title.addEventListener('change', () => {
    if (title.validity.tooShort) {
      title.classList.add('error-border');
      title.setCustomValidity('Заголовок должен состоять минимум из 5-ти символов');
    } else if (title.validity.tooLong) {
      title.setCustomValidity('Заголовок не должен превышать 100 символов');
    } else if (title.validity.valueMissing) {
      title.setCustomValidity('Обязательное поле');
    } else {
      title.setCustomValidity('');
    }
  });
};
