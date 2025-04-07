// script.js

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Portfolio Assistant Toggle
const assistant = document.getElementById('assistant');
const toggle = document.getElementById('assistant-toggle');

if (assistant && toggle) {
  toggle.addEventListener('click', () => {
    assistant.classList.toggle('active');
  });
}

// Assistant Interactive Buttons
const message = document.getElementById('assistant-message');

function showProjects() {
  message.textContent = "Olumide has built a Weather App and a To-Do List App using HTML, CSS, and JavaScript. Check the Projects section for more!";
}

function showSkills() {
  message.textContent = "Olumide is skilled in HTML, CSS, JavaScript, Git, Python, React (beginner), and Figma. He’s learning through Coursera, FreeCodeCamp, and more.";
}

function showContact() {
  message.innerHTML = "You can reach Olumide at <a href='mailto:olumide@example.com'>olumide@example.com</a>, or connect on <a href='https://github.com/olumide' target='_blank'>GitHub</a> or <a href='https://linkedin.com/in/olumide' target='_blank'>LinkedIn</a>.";
}

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Show/Hide Back to Top button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Hide loading spinner when page fully loads
window.addEventListener('load', () => {
  const loader = document.getElementById('loader-wrapper');
  const body = document.body;

  loader.style.display = 'none';
  body.classList.remove('fade-in');
  body.classList.add('visible');
});

// particles.js config (spider web style)
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": { "enable": true, "value_area": 800 }
    },
    "color": { "value": "#000000" },
    "shape": { "type": "circle" },
    "opacity": {
      "value": 0.5,
      "random": false
    },
    "size": {
      "value": 3,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#000000",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "out_mode": "out"
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "grab" },
      "onclick": { "enable": true, "mode": "push" }
    },
    "modes": {
      "grab": { "distance": 140, "line_linked": { "opacity": 1 } },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});