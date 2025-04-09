function createBinaryRain() {
  const container = document.getElementById("binaryRain");
  const characters = ["0", "1", "#", "%", "&", "*"];

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
  }, 1000);
});
