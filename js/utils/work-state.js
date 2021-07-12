const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');

export const setDisabled = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');

  for (const elem of adForm.children) {
    if (elem.matches('fieldset')) {
      elem.setAttribute('disabled', 'true');
    }
  }

  for (const elem of mapFilters.children) {
    if (elem.matches('fieldset')) {
      elem.setAttribute('disabled', 'true');
    }
  }
};

export const setActive = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');

  for (const elem of adForm.children) {
    if (elem.matches('fieldset')) {
      elem.removeAttribute('disabled', 'false');
    }
  }

  for (const elem of mapFilters.children) {
    if (elem.matches('fieldset')) {
      elem.removeAttribute('disabled', 'false');
    }
  }
};
