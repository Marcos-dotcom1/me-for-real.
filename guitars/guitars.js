let activeCard = null;

function flipCard(card) {
  if (activeCard && activeCard !== card) {
    activeCard.classList.remove("flipped");
  }
  card.classList.toggle("flipped");
  activeCard = card.classList.contains("flipped") ? card : null;

  const flipSound = new Audio(
    "https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-jump-coin-216.mp3"
  );
  flipSound.volume = 0.3;
  flipSound.play();
}

document.querySelectorAll(".card").forEach((card, index) => {
  const duration = 5 + Math.random() * 5;
  const delay = Math.random() * 5;
  card.style.animation = `float ${duration}s ease-in-out ${delay}s infinite ${
    index % 2 ? "alternate-reverse" : "alternate"
  }`;
});
