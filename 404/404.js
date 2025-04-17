const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const startBtn = document.getElementById("startBtn");
const scoreElement = document.getElementById("score");

const catSprite = new Image();
catSprite.src = "cat.png";
let isPlaying = false;
let score = 0;
let GROUND_LEVEL;

const cat = {
  x: 100,
  y: 0,
  width: 40,
  height: 40,
  velocity: 0,
  isGrounded: false,
  frame: 0,
};

const obstacles = [];
let obstacleSpawnRate = 100;
let backgroundStars = [];
const particles = [];

const GRAVITY = canvas.height * 0.008;
const JUMP_FORCE = canvas.height * -0.2;

function resizeCanvas() {
  const isMobile = window.matchMedia("(max-width: 600px)").matches;
  canvas.width = window.innerWidth;
  canvas.height = Math.min(window.innerHeight * 0.7, 600);

  const scale = isMobile ? canvas.width / 400 : canvas.width / 800;
  cat.width = 40 * scale;
  cat.height = 40 * scale;
  cat.x = 100 * scale;
  GROUND_LEVEL = canvas.height - 60 * scale;

  if (cat.y + cat.height > GROUND_LEVEL) {
    cat.y = GROUND_LEVEL - cat.height;
    cat.velocity = 0;
    cat.isGrounded = true;
  }

  createStars();
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function createStars() {
  backgroundStars = [];
  const starCount = window.innerWidth < 600 ? 50 : 100;
  for (let i = 0; i < starCount; i++) {
    backgroundStars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3,
      alpha: Math.random(),
    });
  }
}

function handleJump() {
  if (cat.isGrounded && isPlaying) {
    cat.velocity = JUMP_FORCE;
    cat.isGrounded = false;
    createParticles(cat.x + cat.width / 2, cat.y + cat.height);
  }
}

document.addEventListener("keydown", (e) => e.code === "Space" && handleJump());
canvas.addEventListener("click", handleJump);
canvas.addEventListener("touchstart", (e) => {
  e.preventDefault();
  handleJump();
});

function createParticles(x, y) {
  for (let i = 0; i < 10; i++) {
    particles.push({
      x: x,
      y: y,
      vx: (Math.random() - 0.5) * 5,
      vy: (Math.random() - 0.5) * 5,
      life: 1,
    });
  }
}

function update() {
  if (!isPlaying) return;

  particles.forEach((p) => {
    p.x += p.vx;
    p.y += p.vy;
    p.life -= 0.03;
  });

  cat.frame = (cat.frame + 0.2) % 4;
  cat.velocity += GRAVITY;
  cat.y += cat.velocity;

  if (cat.y + cat.height > GROUND_LEVEL) {
    cat.y = GROUND_LEVEL - cat.height;
    cat.velocity = 0;
    cat.isGrounded = true;
  }

  if (Math.random() * obstacleSpawnRate < 1) {
    spawnObstacle();
  }

  obstacles.forEach((obstacle, index) => {
    obstacle.x -= 5 + score * 0.01;

    if (checkCollision(cat, obstacle)) {
      gameOver();
    }

    if (obstacle.x + obstacle.width < 0) {
      obstacles.splice(index, 1);
      score += 10;
      scoreElement.textContent = score;
    }
  });

  obstacleSpawnRate = Math.max(30, 100 - score * 0.1);
  backgroundStars.forEach((star) => (star.alpha = (star.alpha + 0.02) % 1));

  draw();
  requestAnimationFrame(update);
}

function draw() {
  ctx.fillStyle = "#0a0a12";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  backgroundStars.forEach((star) => {
    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
    ctx.fillRect(star.x, star.y, star.size, star.size);
  });

  ctx.fillStyle = "#1a1a2a";
  ctx.fillRect(0, GROUND_LEVEL, canvas.width, 10);
  ctx.shadowColor = "#00ffff";
  ctx.shadowBlur = 20;

  ctx.drawImage(catSprite, 0, 0, 160, 160, cat.x, cat.y, cat.width, cat.height);

  obstacles.forEach((obstacle) => {
    ctx.fillStyle = obstacle.color;
    ctx.shadowColor = obstacle.color;
    ctx.beginPath();
    ctx.roundRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height, 5);
    ctx.fill();
  });

  ctx.shadowBlur = 0;
  particles.forEach((p) => {
    if (p.life <= 0) return;
    ctx.fillStyle = `rgba(255, 255, 0, ${p.life})`;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 3 * p.life, 0, Math.PI * 2);
    ctx.fill();
  });
}

function spawnObstacle() {
  const scale =
    window.innerWidth < 600 ? canvas.width / 400 : canvas.width / 800;
  const types = [
    { width: 10, height: 30, color: "#ff00ff" },
    { width: 30, height: 40, color: "#00ffff" },
    { width: 20, height: 30, color: "#ffff00" },
  ];
  const type = types[Math.floor(Math.random() * types.length)];

  obstacles.push({
    x: canvas.width,
    y: GROUND_LEVEL - type.height * scale,
    width: type.width * scale,
    height: type.height * scale,
    color: type.color,
  });
}

function checkCollision(rect1, rect2) {
  return (
    rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y
  );
}

function gameOver() {
  isPlaying = false;
  document.querySelector(".message").innerHTML = `
          <h1>SYSTEM FAILURE</h1>
          <p>Final score: ${score}</p>
          <button onclick="location.reload()">Restart</button>
      `;
  document.querySelector(".message").style.display = "block";
}

startBtn.addEventListener("click", () => {
  isPlaying = true;
  document.querySelector(".message").style.display = "none";
  score = 0;
  obstacles.length = 0;
  cat.y = GROUND_LEVEL - cat.height;
  createStars();
  update();
});

setTimeout(() => !isPlaying && startBtn.click(), 10000);
