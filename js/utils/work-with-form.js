const apsType = document.querySelector('#type');
const appsPrice = document.querySelector('#price');
const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const guests = [...capacity.children];
const timein = document.querySelector('#timein');
const timeinArr = [...timein];
const timeout = document.querySelector('#timeout');
const timeoutArr = [...timeout];

export const setValidForm = () => {
  // Логика выбора типа жилья (Задание 8.2)
  apsType.addEventListener('change', (event) => {
    switch (event.target.value) {
      case 'flat':
        appsPrice.setAttribute('min', 1000);
        appsPrice.setAttribute('placeholder', 'от 1000 ₽');
        break;
      case 'bungalow':
        appsPrice.setAttribute('min', 0);
        appsPrice.setAttribute('placeholder', 'от 0 ₽');
        break;
      case 'house':
        appsPrice.setAttribute('min', 5000);
        appsPrice.setAttribute('placeholder', 'от 5000 ₽');
        break;
      case 'palace':
        appsPrice.setAttribute('min', 10000);
        appsPrice.setAttribute('placeholder', 'от 10000 ₽');
        break;
      case 'hotel':
        appsPrice.setAttribute('min', 3000);
        appsPrice.setAttribute('placeholder', 'от 3000 ₽');
        break;
      default:
        break;
    }
  });

  // Синхронизация полей «Количество комнат» и «Количество мест» (Задание 8.1)
  const reversedGuests = guests.slice().reverse();

  const enableGuests = (selectedRooms) => {
    reversedGuests.forEach((guest, index) => {
      if (index <= selectedRooms && index !== 0 && selectedRooms !== '100') {
        guest.classList.remove('hidden');
        if (index === 1) {
          guest.setAttribute('selected', 'selected');
          capacity.value = index;
        }
      } else if (index === 0 && selectedRooms === '100') {
        guest.classList.remove('hidden');
        guest.setAttribute('selected', 'selected');
      } else {
        guest.classList.add('hidden');
        guest.removeAttribute('selected');
      }
    });
  };

  roomNumber.addEventListener('change', (event) => {
    enableGuests(event.target.value);
  });

  // Синхронизация времени заезда и времени выезда (Задание 8.2)
  const syncTime = (val, currentSelect) => {
    let anotherSelect;
    let anotherOptions;
    if (currentSelect === 'in') {
      anotherSelect = timeout;
      anotherOptions = timeoutArr;
    } else if (currentSelect === 'out') {
      anotherSelect = timein;
      anotherOptions = timeinArr;
    }
    anotherSelect.value = val;
    anotherOptions.forEach(time => {
      if (time.value !== val) {
        time.removeAttribute('selected');
      } else {
        time.setAttribute('selected', 'selected');
      }
    });
  };

  timein.addEventListener('change', (event) => {
    syncTime(event.target.value, 'in');
  });

  timeout.addEventListener('change', (event) => {
    syncTime(event.target.value, 'out');
  });
};
