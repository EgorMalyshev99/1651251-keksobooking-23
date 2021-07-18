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

  const enableGuests = (target) => {
    let arr = [];
    switch (target.value) {
      case '1':
        arr = ['1'];
        break;
      case '2':
        arr = ['1', '2'];
        break;
      case '3':
        arr = ['1', '2', '3'];
        break;
      case '100':
        arr = ['0'];
        break;
      default:
        break;
    }
    guests.forEach((guest, guestIndex) => {
      guest.classList.add('hidden');
      guest.removeAttribute('selected');
      arr.forEach((element, elementIndex) => {
        if (guest.value === element) {
          guest.classList.remove('hidden');
          if (guestIndex === 0) {
            guest.setAttribute('selected', 'selected');
          } else if (elementIndex === arr.length - 1 && !guests[guestIndex - 1].hasAttribute('selected')) {
            guest.setAttribute('selected', 'selected');
          }
        }
      });
    });
  };

  roomNumber.addEventListener('change', (event) => {
    enableGuests(event.target);
  });
};
