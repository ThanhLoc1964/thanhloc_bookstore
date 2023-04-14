var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirm-password");
var form = document.querySelector("main form");

console.log(username);
function showError(input, message) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  console.log(small);
  input.classList.add("error");
  small.innerText = message;
}

function showSuccess(input) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  input.classList.remove("error");
  small.innerText = "";
}

function checkEmptyError(listInput) {
  let isEmptyError = false;
  listInput.forEach((input) => {
    input.value = input.value.trim();

    if (!input.value) {
      isEmptyError = true;
      showError(input, "Không được để trống");
    } else {
      showSuccess(input);
    }
  });

  return isEmptyError;
}

function checkEmail(input) {
  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  input.value = input.value.trim();
  let isEmailError = !regexEmail.test(input.value);
  if (regexEmail.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, "Email không đúng");
  }
  return isEmailError;
}

function checkLengthError(input, min, max) {
  input.value = input.value.trim();

  console.log(input.value.length);
  if (input.value.length < min) {
    showError(input, `Phải có ích nhất ${min} ký tự`);
    return true;
  }

  if (input.value.length > max) {
    showError(input, `Không được vượt quá ${max} ký tự`);
    return true;
  }
  showSuccess(input);
  return false;
}

function checkMathPasswordErorr(passwordInput, cfPasswordInput) {
  if (passwordInput.value !== cfPasswordInput.value) {
    showError(cfPasswordInput, "Mật khẩu không trùng khớp");
    return true;
  }
  return false;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isEmptyError = checkEmptyError([
    username,
    email,
    password,
    confirmPassword,
  ]);

  let isEmailError = checkEmail(email);
  let isUsernameLenghtError = checkLengthError(username, 5, 30);
  let isPasswordLengthError = checkLengthError(password, 5, 15);
  let isMathErorr = checkMathPasswordErorr(password, confirmPassword);
});
