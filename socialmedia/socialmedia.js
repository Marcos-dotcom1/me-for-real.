for (let i = 0; i < 40; i++) {
  const span = document.createElement("span");
  span.style.left = Math.random() * 100 + "%";
  span.style.animationDelay = Math.random() * 8 + "s";
  span.style.animationDuration = 5 + Math.random() * 5 + "s";
  document.querySelector(".particles").appendChild(span);
}
const messages = [
  "because yelling into the void is more fun with Company",
  "or don't, but then you'll never know what happened to the ducks",
  "I post things. Sometimes they're good. Sometimes they're questionable",
];

document.addEventListener("DOMContentLoaded", () => {
  const followText = document.getElementById("follow-text");
  if (followText) {
    const randomIndex = Math.floor(Math.random() * messages.length);
    followText.textContent = messages[randomIndex];
  }
});
