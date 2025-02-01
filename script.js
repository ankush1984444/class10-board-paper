// Dynamic greeting based on time
const greetingElement = document.getElementById("greeting");
const hours = new Date().getHours();

if (hours < 12) {
    greetingElement.textContent = "Good Morning Friends! 🌅";
} else if (hours < 18) {
    greetingElement.textContent = "Good Afternoon Friends! ☀️";
} else {
    greetingElement.textContent = "Good Evening Friends! 🌙";
}

// Typewriter Effect
const typewriterText = "Here is the CBSE Class 10 2024 Board Paper. Check it out and score well! 🎯";
const typewriterElement = document.getElementById("typewriter");
let index = 0;

function typeWriterEffect() {
    if (index < typewriterText.length) {
        typewriterElement.innerHTML += typewriterText.charAt(index);
        index++;
        setTimeout(typeWriterEffect, 50);
    }
}
typeWriterEffect();

// Live Clock
function updateClock() {
    const now = new Date();
    document.getElementById("clock").textContent =
        now.getHours().toString().padStart(2, '0') + ":" +
        now.getMinutes().toString().padStart(2, '0') + ":" +
        now.getSeconds().toString().padStart(2, '0');
}
setInterval(updateClock, 1000);

// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Background Music
const music = new Audio('https://www.bensound.com/bensound-music/bensound-dreams.mp3');
const musicToggle = document.getElementById("musicToggle");
musicToggle.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicToggle.textContent = "🔇";
    } else {
        music.pause();
        musicToggle.textContent = "🎵";
    }
});

// Confetti Celebration
setTimeout(() => {
    confetti();
}, 2000);

// Background Particles Effect
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 100 },
        "size": { "value": 3 },
        "move": { "speed": 2 }
    }
});
