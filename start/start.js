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

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("modeToggle");
  const body = document.body;

  if (localStorage.getItem("mode") === "light") {
    body.classList.add("light-mode");
    toggle.checked = true;
  }

  toggle.addEventListener("change", () => {
    body.classList.toggle("light-mode");
    if (body.classList.contains("light-mode")) {
      localStorage.setItem("mode", "light");
    } else {
      localStorage.setItem("mode", "dark");
    }
  });
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
const toggle = document.querySelector(".mobile-menu-toggle");
const nav = document.querySelector("nav ul");
toggle.addEventListener("click", () => {
  nav.classList.toggle("show");
  toggle.classList.toggle("active");
});
