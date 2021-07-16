const apsType = document.querySelector('#type');
const appsPrice = document.querySelector('#price');
const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');

export const setValidForm = () => {
  // Логика выбора типа жилья
  apsType.addEventListener('change', (event) => {
    switch (event.target.value) {
      case 'flat':
        appsPrice.setAttribute('min', 1000);
        appsPrice.setAttribute('placeholder', 'от 1000 у.е.');
        break;
      case 'bungalow':
        appsPrice.setAttribute('min', 0);
        appsPrice.setAttribute('placeholder', 'от 0 у.е.');
        break;
      case 'house':
        appsPrice.setAttribute('min', 5000);
        appsPrice.setAttribute('placeholder', 'от 5000 у.е.');
        break;
      case 'palace':
        appsPrice.setAttribute('min', 10000);
        appsPrice.setAttribute('placeholder', 'от 10000 у.е.');
        break;
      case 'hotel':
        appsPrice.setAttribute('min', 3000);
        appsPrice.setAttribute('placeholder', 'от 3000 у.е.');
        break;
      default:
        break;
    }
  });

  // Синхронизация полей «Количество комнат» и «Количество мест»
  const guests = [...capacity.children];
  let disabledGuests;
  let activeGuests;

  roomNumber.addEventListener('change', (event) => {
    switch (event.target.value) {
      case '1':
        disabledGuests = guests.filter((guest) => guest.value !== '1');
        disabledGuests.forEach((guest) => {
          guest.classList.add('hidden');
          guest.removeAttribute('selected');
        });
        activeGuests = guests.filter((guest) => guest.value === '1');
        activeGuests.forEach((guest, index) => {
          guest.classList.remove('hidden');
          if (index === 0) {
            guest.setAttribute('selected', 'selected');
          }
        });
        break;
      case '2':
        disabledGuests = guests.filter((guest) => guest.value !== '2' || guest.value !== '1');
        disabledGuests.forEach((guest) => {
          guest.classList.add('hidden');
          guest.removeAttribute('selected');
        });
        activeGuests = guests.filter((guest) => guest.value === '2' || guest.value === '1');
        activeGuests.forEach((guest, index) => {
          guest.classList.remove('hidden');
          if (index === 0) {
            guest.setAttribute('selected', 'selected');
          }
        });
        break;
      case '3':
        disabledGuests = guests.filter((guest) => guest.value === '0');
        disabledGuests.forEach((guest) => {
          guest.classList.add('hidden');
          guest.removeAttribute('selected');
        });
        activeGuests = guests.filter(
          (guest) => guest.value === '3' || guest.value === '2' || guest.value === '1');
        activeGuests.forEach((guest, index) => {
          guest.classList.remove('hidden');
          if (index === 0) {
            guest.setAttribute('selected', 'selected');
          }
        });
        break;
      case '100':
        disabledGuests = guests.filter((guest) => guest.value !== '0');
        disabledGuests.forEach((guest) => {
          guest.classList.add('hidden');
          guest.removeAttribute('selected');
        });
        activeGuests = guests.filter((guest) => guest.value === '0');
        activeGuests.forEach((guest, index) => {
          guest.classList.remove('hidden');
          if (index === 0) {
            guest.setAttribute('selected', 'selected');
          }
        });
        break;
      default:
        break;
    }
  });
};
