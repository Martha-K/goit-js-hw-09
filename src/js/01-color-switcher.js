import '../css/common.css';

const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};
refs.btnStart.addEventListener('click', changeBackgroundColor);
refs.btnStop.addEventListener('click', btnStopRandomColor);
let interval = null;
let isActive = false;

function changeBackgroundColor() {
  if (isActive) {
    return;
  }

  isActive = true;
  interval = setInterval(getRandomHexColor, 1000);
}

function btnStopRandomColor() {
  isActive = false;
  clearInterval(interval);
}

function getRandomHexColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  refs.body.style.backgroundColor = randomColor;
}
