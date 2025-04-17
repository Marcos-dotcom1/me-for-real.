const titleText = "HEY, I'M MARCOS";
const introText =
  "I'm someone who creates, explores, and rewrites the rules as I go. I've never been one to color inside the lines—or even use the same coloring book. I know what I want, and I go after it with everything I've got. Whether it's design, music, or whatever weird idea I'm obsessed with this week, I dive in headfirst. I don't follow trends—I make my own lane, preferably one with glowing lights and zero traffic. Honesty, creativity, and a healthy dose of boldness fuel everything I do. Half-measures? Never heard of them.";

const titleEl = document.getElementById("title");
const introEl = document.getElementById("intro");

function createParticles() {
  const particlesContainer = document.getElementById("particles");
  const particleCount = 30;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    const size = Math.random() * 4 + 1;
    const posX = Math.random() * 100;
    const duration = Math.random() * 10 + 10;
    const delay = Math.random() * 15;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;

    particlesContainer.appendChild(particle);
  }
}

let i = 0;
function typeTitle() {
  if (i < titleText.length) {
    titleEl.innerHTML =
      titleText.slice(0, i + 1) + '<span class="cursor">|</span>';
    i++;
    setTimeout(typeTitle, 100);
  } else {
    titleEl.innerHTML = titleText;
    setTimeout(typeIntro, 500);
  }
}

let j = 0;
function typeIntro() {
  if (j < introText.length) {
    introEl.innerHTML =
      introText.slice(0, j + 1) + '<span class="cursor">|</span>';
    j++;
    setTimeout(typeIntro, 25);
  } else {
    introEl.innerHTML = introText;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  createParticles();
  typeTitle();

  setInterval(() => {
    if (Math.random() > 0.9) {
      document.body.classList.add("glitch");
      setTimeout(() => {
        document.body.classList.remove("glitch");
      }, 200);
    }
  }, 5000);
});
const isMobile = window.innerWidth < 768;
const particleCount = isMobile ? 0 : 0;
