const apsType = document.querySelector('#type');
const appsPrice = document.querySelector('#price');
const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const timein = document.querySelector('#timein');
const timeout = document.querySelector('#timeout');

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
  const guests = [...capacity.children];
  const reversedGuests = guests.reverse();

  const enableGuests = (selectedRooms) => {
    reversedGuests.forEach((guest, index) => {
      if (index <= selectedRooms && index !== 0 && selectedRooms !== '100') {
        guest.classList.remove('hidden');
        if (index === 1) {
          guest.setAttribute('selected', 'selected');
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
  const timeinArr = [...timein.children];
  const timeoutArr = [...timeout.children];
  const syncTime = (sel, arr1, arr2, val) => {
    arr1.forEach((item, index) => {
      if (item.value !== val) {
        arr2[index].removeAttribute('selected');
      } else {
        arr2[index].setAttribute('selected', 'selected');
        sel.value = val;
      }
    });
  };

  timein.addEventListener('change', (event) => {
    syncTime(timeout, timeinArr, timeoutArr, event.target.value);
  });

  timeout.addEventListener('change', (event) => {
    syncTime(timein, timeoutArr, timeinArr, event.target.value);
  });
};
