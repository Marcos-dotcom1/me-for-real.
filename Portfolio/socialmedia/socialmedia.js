for (let i = 0; i < 40; i++) {
  const span = document.createElement("span");
  span.style.left = Math.random() * 100 + "%";
  span.style.animationDelay = Math.random() * 8 + "s";
  span.style.animationDuration = 5 + Math.random() * 5 + "s";
  document.querySelector(".particles").appendChild(span);
}
