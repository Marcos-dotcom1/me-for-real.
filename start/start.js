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
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  mobileMenuToggle.addEventListener("click", function () {
    this.classList.toggle("active");
    navLinks.classList.toggle("show");
  });

  const darkModeToggle = document.getElementById("darkModeToggle");
  darkModeToggle.addEventListener("change", function () {
    document.body.classList.toggle("light-mode");
  });

  const navItems = document.querySelectorAll(".nav-links a");
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        mobileMenuToggle.classList.remove("active");
        navLinks.classList.remove("show");
      }
    });
  });
});
