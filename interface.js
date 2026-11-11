let hero = document.getElementById("hero");

// let fstBg = document.getElementById("firstBackground");
// let sndBg = document.getElementById("secondBackground");
let leftBtn = document.getElementById("left-btn");
let rightBtn = document.getElementById("right-btn");

let images = [
  "./newImg/celebration.jpg",
  "./newImg/children-party.jpg",
  "./Candy.png",
  "./newImg/party-1.jpg",
];

let currentImage = 0;

// Left btn
leftBtn.onclick = function () {
  currentImage--;

  if (currentImage < 0) {
    currentImage = images.length - 1;
  }

  hero.style.backgroundImage = `url("${images[currentImage]}")`;
};

// Right btn
rightBtn.onclick = function () {
  currentImage++;

  if (currentImage >= images.length) {
    currentImage = 0;
  }

  hero.style.backgroundImage = `url("${images[currentImage]}")`;
};

let Dropdown = document.getElementById("mobile-drop");
let Realdown = document.getElementById("mobile-popup");
let closeBtn = document.getElementById("x_btn");

Dropdown.onclick = function () {
  Realdown.style.display = "block";
};

closeBtn.onclick = function () {
  Realdown.style.display = "none";
};
