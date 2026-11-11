let Dropdown = document.getElementById("mobile-drop");
let Realdown = document.getElementById("mobile-popup");
let closeBtn = document.getElementById("x_btn");

Dropdown.onclick = function () {
  Realdown.style.display = "block";
};

closeBtn.onclick = function () {
  Realdown.style.display = "none";
};
