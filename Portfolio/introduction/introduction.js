const titleText = "HEY, I'M MARCOS";
const introText =
  "I'm someone who enjoys creating, learning, and doing things differently. I've always had a strong sense of direction and a clear idea of what I want, and I'm not afraid to go after it. I like things that stand out, whether it's in design, music, or ideas. If something interests me, I dive into it fully. I'm not the type to follow the crowd—I'd rather build my own path. I value honesty, creativity, and a bit of boldness in everything I do. I don't believe in doing things halfway.";

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
