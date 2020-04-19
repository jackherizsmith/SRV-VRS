const form = document.querySelector("form");
const inputs = form.querySelectorAll("form__input");

const nameInput = form.querySelector("#username");
const nameRegex = /^[^-\s][a-zA-Z0-9-_. ]{2,}$/;

const emailInput = form.querySelector("#email");
const emailRegex = (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

const passwordInput = form.querySelector("#password");
const passTime = document.querySelector("#passwordTime");

const passwordCheckInput = form.querySelector("#passwordCheck");

passTime.textContent = "Your password should take an experienced hacker longer than 4 months to crack."

let valid = {
  username: false, 
  email: false, 
  password: false,
  passwordCheck: false,
}

const errorMessage = {
  username: "Check your name doesn't contain odd characters",
  email: "This needs to include an @ and domain",
  password: "Try adding an unusual word",
  passwordCheck: "Your passwords need to match"
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
  if (test) {
    return true;
  } else {
    return false;
  }
}

function checkUser(userData, input, regex){
  if (input.value.length > 0 && regex.test(input.value)) {
    fetch("/check-"+userData+"/"+input.value.trimLeft().trimRight())
    .then (response => response.json())
    .then (user => {
      if (user.isUser) {
        valid[userData] = false;
        input.style.borderColor = "hsl(0, 100%, 45%)";
        input.nextElementSibling.textContent = "This " + userData + " is already taken :(";
      } else {
        valid[userData] = true;
        input.style.borderColor = "hsl(106, 100%, 30%)";
      }
    })
  } else {
      valid[userData] = false;
      reset(input);
  }
}

function reset(input){
  input.nextElementSibling.textContent = "";
  input.style.borderColor = "inherit";
}

nameInput.addEventListener("input", () => {
    checkUser("username", nameInput, nameRegex);
});

emailInput.addEventListener("input", () => {
  if (emailInput.value.length > 0) {
    checkUser("email", emailInput, emailRegex);
  }
});

passwordInput.addEventListener("input", () => {
  reset(passwordInput);
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

passwordCheckInput.addEventListener("input", () => {
  reset(passwordCheckInput);
  if (valid.password) {
    valid.passwordCheck = validate(passwordCheckInput, passwordCheck.value === passwordInput.value);
  }
});

function passStrength(log) {
    const elem = document.querySelector(".form__password-score");
    let width = log * 10; // 10^10 is very strong 4/4 therefore maximum width is 10 * 10 = 100 
    if (width > 100) {width = 100;}
    
    elem.style.width = width + "%";
    elem.style.backgroundColor = width < 30 ? "hsl(0, 100%, 70%)" :
    "hsl(" + (width-30) * 1.5 + ", 100%, " + 80 - (width/2) +"%)";
}
