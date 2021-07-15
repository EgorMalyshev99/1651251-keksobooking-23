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

  // Синхронизация полей «Количество комнат» и «Количество мест»
  const guests = [...capacity.children];
  let disabledGuests;
  let activeGuests;

  window.addEventListener('load', () => { // При загрузке страницы автоматически выбирается кол-во комнат равное 1
    disabledGuests = guests.filter((guest) => guest.value !== '1');
    disabledGuests.forEach((guest) => guest.classList.add('hidden'));
    activeGuests = guests.filter((guest) => guest.value === '1');
    activeGuests.forEach((guest, index) => {
      guest.classList.remove('hidden');
      if (index === 0) {
        guest.setAttribute('selected', 'true');
      } else {
        guest.removeAttribute('selected');
      }
    });
  });

  roomNumber.addEventListener('change', (event) => {
    switch (event.target.value) {
      case '1':
        disabledGuests = guests.filter((guest) => guest.value !== '1');
        disabledGuests.forEach((guest) => guest.classList.add('hidden'));
        activeGuests = guests.filter((guest) => guest.value === '1');
        activeGuests.forEach((guest, index) => {
          guest.classList.remove('hidden');
          if (index === 0) {
            guest.setAttribute('selected', 'true');
          } else {
            guest.removeAttribute('selected');
          }
        });
        break;
      case '2':
        disabledGuests = guests.filter((guest) => guest.value !== '2' || guest.value !== '1');
        disabledGuests.forEach((guest) => guest.classList.add('hidden'));
        activeGuests = guests.filter((guest) => guest.value === '2' || guest.value === '1');
        activeGuests.forEach((guest, index) => {
          guest.classList.remove('hidden');
          if (index === 0) {
            guest.setAttribute('selected', 'true');
          } else {
            guest.removeAttribute('selected');
          }
        });
        break;
      case '3':
        disabledGuests = guests.filter((guest) => guest.value === 0);
        disabledGuests.forEach((guest) => guest.classList.add('hidden'));
        activeGuests = guests.filter((guest) => guest.value === '3' || guest.value === '2' || guest.value === '1');
        activeGuests.forEach((guest, index) => {
          guest.classList.remove('hidden');
          if (index === 0) {
            guest.setAttribute('selected', 'true');
          } else {
            guest.removeAttribute('selected');
          }
        });
        break;
      case '100':
        disabledGuests = guests.filter((guest) => guest.value !== '0');
        disabledGuests.forEach((guest) => guest.classList.add('hidden'));
        activeGuests = guests.filter((guest) => guest.value === '0');
        activeGuests.forEach((guest, index) => {
          guest.classList.remove('hidden');
          if (index === 0) {
            guest.setAttribute('selected', 'selected');
          } else {
            guest.removeAttribute('selected');
          }
        });
        break;
      default:
        break;
    }
  });
};
