const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const timerDisplay = document.getElementById('timer');
const alarmSound = document.getElementById('alarm');

let timerInterval;
let remainingTime;

function formatTime(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
  const hours = parseInt(hoursInput.value) || 0;
  const minutes = parseInt(minutesInput.value) || 0;
  const seconds = parseInt(secondsInput.value) || 0;
  remainingTime = hours * 3600 + minutes * 60 + seconds;

  if (remainingTime <= 0) {
    alert('請設定時間');
    return;
  }

  timerInterval = setInterval(() => {
    remainingTime--;
    timerDisplay.textContent = formatTime(remainingTime);
    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      alarmSound.play();
      alert('時間到!');
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  remainingTime = 0;
  timerDisplay.textContent = formatTime(remainingTime);
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
