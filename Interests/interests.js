function openPopup(title, description) {
  document.getElementById("popup-title").innerText = title;
  document.getElementById("popup-description").innerText = description;
  document.getElementById("popup").classList.add("show");
  document.getElementById("overlay").classList.add("show");
}

function closePopup() {
  document.getElementById("popup").classList.remove("show");
  document.getElementById("overlay").classList.remove("show");
}
