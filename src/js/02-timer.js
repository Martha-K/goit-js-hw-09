import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  btnStart: document.querySelector('button[data-start]'),
  timer: document.querySelector('.timer'),
  daysValue: document.querySelector('.value[data-days]'),
  hoursValue: document.querySelector('.value[data-hours]'),
  minutesValue: document.querySelector('.value[data-minutes]'),
  secondsValue: document.querySelector('.value[data-seconds]'),
};

refs.btnStart.disabled = true;
let selectedDate = null;
let differenceBetweenDates = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      window.alert('Please choose a date in the future');
      console.log(selectedDates[0]);
    } else {
      selectedDate = selectedDates[0];
      refs.btnStart.disabled = false;
      differenceBetweenDates = selectedDate - Date.now();
    }
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

refs.btnStart.addEventListener('click', setDate);

let isActive = false;
let intervalId = null;

function setDate() {
  if (isActive) {
    return;
  }
  isActive = true;
  intervalId = setInterval(() => {
    if (differenceBetweenDates <= 2000) {
      clearInterval(intervalId);
    }
    convertMs(differenceBetweenDates);

    differenceBetweenDates = differenceBetweenDates - 1000;

    const { days, hours, minutes, seconds } = convertMs(differenceBetweenDates);
    refs.daysValue.textContent = days.toString().padStart(2, 0);
    refs.hoursValue.textContent = hours.toString().padStart(2, 0);
    refs.minutesValue.textContent = minutes.toString().padStart(2, 0);
    refs.secondsValue.textContent = seconds.toString().padStart(2, 0);
  }, 1000);
}
