const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const body = document.querySelector('body');
const startBtnRef = document.querySelector('[ data-action="start"]');
const stoptBtnRef = document.querySelector('[ data-action="stop"]');

let timeId = null;

const onRandomBgColor = () => {
  timeId = window.setInterval(
    () =>
      (body.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length - 1)]),
    1000,
  );
  startBtnRef.setAttribute('disabled', 'disabled');
};

startBtnRef.addEventListener('click', onRandomBgColor);

const onStopChangeBgColor = () => {
  window.clearInterval(timeId);
  startBtnRef.removeAttribute('disabled', 'disabled');
};

stoptBtnRef.addEventListener('click', onStopChangeBgColor);
