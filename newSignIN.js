let btn = document.getElementById("button");

btn.addEventListener("click", function () {
  let userInput = document.getElementById("input");

  if (userInput.type === "text") {
    userInput.type = "password";
    btn.innerText = "Show";
  } else {
    userInput.type = "text";
    btn.innerText = "Hide";
  }
});