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

  const toggle = document.getElementById("modeToggle");
  const body = document.body;

  if (toggle) {
    if (localStorage.getItem("mode") === "light") {
      body.classList.add("light-mode");
      toggle.checked = true;
    }

    toggle.addEventListener("change", () => {
      body.classList.toggle("light-mode");
      localStorage.setItem(
        "mode",
        body.classList.contains("light-mode") ? "light" : "dark"
      );
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

  const darkModeToggle = document.getElementById("darkModeToggle");
  if (darkModeToggle) {
    darkModeToggle.addEventListener("change", function () {
      document.body.classList.toggle("light-mode");
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
