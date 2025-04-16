document.addEventListener("DOMContentLoaded", () => {
  const carouselItems = document.querySelector(".carousel-items");
  let index = 0;

  if (carouselItems) {
    function moveCarousel() {
      index++;
      if (index >= carouselItems.children.length) {
        index = 0;
      }
      carouselItems.style.transform = `translateX(-${index * 380}px)`;
    }
    setInterval(moveCarousel, 3000);
  }

  const body = document.body;
  const modeToggle = document.getElementById("modeToggle");
  const darkModeToggle = document.getElementById("darkModeToggle");

  const savedMode = localStorage.getItem("mode");
  if (savedMode === "light") {
    body.classList.add("light-mode");
    if (modeToggle) modeToggle.checked = true;
    if (darkModeToggle) darkModeToggle.checked = true;
  } else {
    body.classList.remove("light-mode");
    if (modeToggle) modeToggle.checked = false;
    if (darkModeToggle) darkModeToggle.checked = false;
  }

  function updateMode(isLight) {
    body.classList.toggle("light-mode", isLight);
    localStorage.setItem("mode", isLight ? "light" : "dark");
    if (modeToggle) modeToggle.checked = isLight;
    if (darkModeToggle) darkModeToggle.checked = isLight;
  }

  if (modeToggle) {
    modeToggle.addEventListener("change", () => {
      updateMode(modeToggle.checked);
    });
  }

  if (darkModeToggle) {
    darkModeToggle.addEventListener("change", () => {
      updateMode(darkModeToggle.checked);
    });
  }
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener("click", function () {
      this.classList.toggle("active");
      navLinks.classList.toggle("show");
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
  }
  const toggleMenu = document.querySelector(".mobile-menu-toggle");
  const nav = document.querySelector("nav ul");
  if (toggleMenu && nav) {
    toggleMenu.addEventListener("click", () => {
      nav.classList.toggle("show");
      toggleMenu.classList.toggle("active");
    });
  }
});
