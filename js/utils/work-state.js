const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');

export const setDisabled = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');

  [...adForm.children].forEach((element) => {
    if (element.matches('fieldset')) {
      element.setAttribute('disabled', 'true');
    }
  });

  [...mapFilters.children].forEach((element) => {
    if (element.matches('fieldset')) {
      element.setAttribute('disabled', 'true');
    }
  });
};

export const setActive = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');

  [...adForm.children].forEach((element) => {
    if (element.matches('fieldset')) {
      element.removeAttribute('disabled', 'true');
    }
  });

  [...mapFilters.children].forEach((element) => {
    if (element.matches('fieldset')) {
      element.removeAttribute('disabled', 'true');
    }
  });


};
