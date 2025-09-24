# gani

# Simple Countdown Timer
A clean and intuitive web-based countdown timer application. This project is a foundational exercise for demonstrating core front-end development skills, including manipulating the DOM in real-time and handling user interaction without relying on any external libraries or frameworks. It's a great example of a simple, standalone web utility.

# Technologies Used
HTML: For the basic structure and content of the web page.
CSS: For styling the user interface, including button layouts and text formatting.
Vanilla JavaScript: For implementing the core logic of the timer, including the countdown, button functionality, and real-time display updates.

# Features
Start Button: Begins the countdown from the initial set time.
Pause Button: Temporarily stops the timer, allowing the user to resume from the same point.
Reset Button: Stops the timer and resets the display to its initial value.
Basic UI: A user-friendly interface with clear, visible controls.

# Setup Instructions
#Anda adalah seorang pengembang front-end ahli yang sangat terstruktur.
#Tugas Anda adalah membuat kode lengkap untuk aplikasi web timer sederhana.
#Kode harus menggunakan Vanilla JavaScript, HTML, dan CSS.
#Tidak ada backend atau routing yang terlibat.
#Semua kode harus dalam satu file HTML untuk kemudahan penggunaan.
#Instruksi Utama
Buatkan saya kode lengkap untuk sebuah aplikasi timer sederhana.
Aplikasi ini memiliki:
- Sebuah judul (h1).
- Tampilan waktu mundur (dimulai dari nilai tertentu, misalnya 60 detik).
- Tombol "Mulai", "Jeda", dan "Reset".
- Logika JavaScript untuk:
    - Memulai hitungan mundur.
    - Menjeda hitungan mundur.
    - Mereset hitungan mundur ke nilai awal.
    - Menampilkan waktu yang tersisa secara real-time.
- Tampilan CSS dasar agar rapi dan mudah dibaca.

# AI Support Explanation
This project's code was generated with the support of a Generative AI model IBM Granite Playground. The AI was given a clear and structured prompt that acted as a guide, specifying the project's title, features, and technological constraints. The AI leveraged its knowledge of front-end development to generate a complete, single-file solution that met all the project's requirements.

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
