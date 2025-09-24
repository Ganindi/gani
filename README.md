# gani

**Simple Countdown Timer**

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Simple Timer</title>
<style>
  body {
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 20px;
  }
  #timer {
    font-size: 3em;
  }
  button {
    margin: 10px;
    padding: 10px 20px;
    font-size: 1em;
  }
</style>
</head>
<body>

<h1>Simple Timer</h1>
<div id="timer">60</div>
<button id="start">Start</button>
<button id="pause">Pause</button>
<button id="reset">Reset</button>

<script>
let timeLeft = 60;
let intervalId;

function updateTimer() {
  document.getElementById('timer').textContent = timeLeft;
  if (timeLeft > 0) {
    intervalId = setInterval(() => {
      timeLeft--;
      updateTimer();
    }, 1000);
  }
}

function startTimer() {
  if (timeLeft <= 0) return;
  updateTimer();
}

function pauseTimer() {
  clearInterval(intervalId);
}

function resetTimer() {
  timeLeft = 60;
  document.getElementById('timer').textContent = timeLeft;
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
</script>

</body>
</html>
