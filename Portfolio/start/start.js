const carouselItems = document.querySelector(".carousel-items");
let index = 0;

function moveCarousel() {
  index++;
  if (index >= carouselItems.children.length) {
    index = 0;
  }
  carouselItems.style.transform = `translateX(-${index * 380}px)`;
}
setInterval(moveCarousel, 3000);

const toggleSwitch = document.getElementById("darkModeToggle");
const body = document.body;
const switchSound = new Audio("https://www.fesliyanstudios.com/play-mp3/4382");

if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("light-mode");
  toggleSwitch.checked = true;
}

toggleSwitch.addEventListener("change", function () {
  switchSound.play();
  if (this.checked) {
    body.classList.add("light-mode");
    localStorage.setItem("darkMode", "enabled");
  } else {
    body.classList.remove("light-mode");
    localStorage.setItem("darkMode", "disabled");
  }
});
