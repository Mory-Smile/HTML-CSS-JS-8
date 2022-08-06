let circularProgress = document.querySelector(".circular-progress"),
  progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,
  ProgressEndValue = 90,
  speed = 50;

let progress = setInterval(() => {
  progressStartValue++;

  progressValue.textContent = `${progressStartValue}%`;

  circularProgress.style.background = `conic-gradient(#267972 ${
    progressStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (progressStartValue === ProgressEndValue) {
    clearInterval(progress);
  }
}, speed);
