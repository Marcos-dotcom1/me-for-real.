(() => {
  const catContainer = document.querySelector(".cat-container");
  const eyes = document.querySelector(".eyes");
  let animationFrame;

  function updateEyes(e) {
    const rect = catContainer.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 3;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    const angle = Math.atan2(mouseY, mouseX);
    const distance = Math.min(3, Math.hypot(mouseX, mouseY) / 80);

    cancelAnimationFrame(animationFrame);
    animationFrame = requestAnimationFrame(() => {
      eyes.style.transform = `translate(
          ${Math.cos(angle) * distance}px,
          ${Math.sin(angle) * distance}px
        )`;
    });
  }

  document.addEventListener("mousemove", (e) => {
    updateEyes(e);
  });

  window.addEventListener("blur", () => {
    cancelAnimationFrame(animationFrame);
  });
})();

function createBinaryRain() {
  const container = document.getElementById("binaryRain");
  const characters = ["0", "1", "0", "1", "0", "1"];

  for (let i = 0; i < 100; i++) {
    const digit = document.createElement("div");
    digit.className = "binary-digit";
    digit.textContent =
      characters[Math.floor(Math.random() * characters.length)];
    digit.style.left = `${Math.random() * 100}%`;
    digit.style.animationDelay = `${Math.random() * 10}s`;
    container.appendChild(digit);
  }
}

createBinaryRain();

document.addEventListener("mousemove", (e) => {
  const cursorGlow = document.createElement("div");
  cursorGlow.className = "cursor-glow";
  cursorGlow.style.left = `${e.clientX}px`;
  cursorGlow.style.top = `${e.clientY}px`;
  document.body.appendChild(cursorGlow);

  setTimeout(() => {
    cursorGlow.remove();
  }, 1);
});
