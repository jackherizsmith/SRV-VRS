const form = document.querySelector("form");
const inputs = form.querySelectorAll("form__input");

const nameInput = form.querySelector("#username");
const nameRegex = /^[a-zA-Z-.' ]{2,}$/;

const emailInput = form.querySelector("#email");
const emailRegex = (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

const passwordInput = form.querySelector("#password");
const passTime = document.querySelector("#passwordTime");

passTime.textContent = "Your password should take an experienced hacker longer than 4 months to crack."

let valid = {
  username: false, 
  email: false, 
  password: false,
}

const errorMessage = {
  username: "Check your name doesn't contain odd characters",
  email: "This needs to include an @ and domain",
  password: "Try adding an unusual word",
}

form.setAttribute("novalidate", "");

form.addEventListener("submit", event => {
  if (Object.values(valid).includes(false)) {
    event.preventDefault();
    for (key in valid) {
      if (!valid[key]) {
        input = document.getElementById(key);
        input.style.borderColor = "hsl(0, 100%, 45%)";
        input.nextElementSibling.textContent = errorMessage[key];
      }
    }
  }
});

function validate(input, test){
  input.nextElementSibling.textContent = "";
  if (test) {
    input.style.borderColor = "hsl(106, 100%, 30%)";
    return true;
  } else {
    input.style.borderColor = "transparent";
    return false;
  }
}

nameInput.addEventListener("input", () => {
  if (nameInput.value.length > 0) {
    fetch("/check-user/"+nameInput.value)
    .then (response => response.json())
    .then (isUser => {
      if (isUser.isUser) {
        valid.username = false;
        nameInput.style.borderColor = "hsl(0, 100%, 45%)";
        nameInput.nextElementSibling.textContent = "This username is already taken :(";
      } else {
        valid.username = validate(nameInput, nameRegex.test(nameInput.value));
      }
    })
  }
});

emailInput.addEventListener("input", () => {
  valid.email = validate(emailInput, emailRegex.test(emailInput.value));
});

passwordInput.addEventListener("input", () => {
  let userInputs = [], result;
  inputs.forEach(input => userInputs = userInputs.concat(input.value.split(/[^0-9a-z]/gi))) // grab other user inputs to improve password strength
  
  result = zxcvbn(passwordInput.value, user_inputs = userInputs.slice(0,-1));
  passStrength(result.guesses_log10);
  valid.password = validate(passwordInput, result.score >= 3);
  
  passTime.textContent =
  (passwordInput.value.length > 0) ? 
    "It could take " + result.crack_times_display.online_no_throttling_10_per_second + " to crack this password." :
    "Your password should take an experienced hacker longer than 4 months to crack.";
});

function passStrength(log) {
    const elem = document.querySelector(".form__password-score");
    let width = log * 10; // 10^10 is very strong 4/4 therefore maximum width is 10 * 10 = 100 
    if (width > 100) {width = 100;}
    elem.style.width = width + "%";

    elem.style.backgroundColor = 
    width < 30 ? "hsl(0, 100%, 70%)" :
    `hsl(${(width-30) * 1.5}, 100%, ${80 - (width/2)}%)`;
}
