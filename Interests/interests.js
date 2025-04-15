function openPopup(title, description) {
  document.getElementById("popup-title").innerText = title;
  document.getElementById("popup-description").innerText = description;
  document.getElementById("popup").classList.add("show");
  document.getElementById("overlay").classList.add("show");
}
function closePopup() {
  document.getElementById("popup").classList.remove("show");
  document.getElementById("overlay").classList.remove("show");
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 150;

class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 1;
    this.speedX = (Math.random() - 0.5) * 2;
    this.speedY = (Math.random() - 0.5) * 2;
    this.alpha = Math.random();
    this.color = `hsla(${Math.random() * 60}, 100%, 50%, ${this.alpha})`;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x > canvas.width || this.x < 0)
      this.x = Math.random() * canvas.width;
    if (this.y > canvas.height || this.y < 0)
      this.y = Math.random() * canvas.height;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 10;
    ctx.fill();
  }
}

function initParticles() {
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of particles) {
    p.update();
    p.draw();
  }
  requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

initParticles();
animate();
