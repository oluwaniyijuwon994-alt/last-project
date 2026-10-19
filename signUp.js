let btn = document.getElementById("button");

btn.addEventListener("click", function () {
  let userinput = document.getElementById("input");

  if (userinput.type === "text") {
    userinput.type = "password";
    btn.innerText = "show";
  } else {
    userinput.type = "text";
    btn.innerText = "Hide";
  }
});

// if (confirmPassword.value.length < 8) {
//   let passError = (document.getElementById("passwordError").textContent =
//     "password must be 8 characters upward ");
// }
