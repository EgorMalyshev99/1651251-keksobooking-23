const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');

export const setDisabled = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');

  [...adForm.children].forEach((element) => {
    element.setAttribute('disabled', 'true');
  });

  [...mapFilters.children].forEach((element) => {
    element.setAttribute('disabled', 'true');
  });
};

export const setActiveAdForm = () => {
  adForm.classList.remove('ad-form--disabled');

  [...adForm.children].forEach((element) => {
    element.removeAttribute('disabled');
  });
};

export const setActiveFilter = () => {
  mapFilters.classList.remove('map__filters--disabled');

  [...mapFilters.children].forEach((element) => {
    element.removeAttribute('disabled');
  });
};
