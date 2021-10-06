let signInForm = document.querySelector(".sign-in-form");
let registerForm = document.querySelector(".register-form");
let registerEmail = document.querySelector("#register-email");
let registerPassword = document.querySelector("#register-password");

signInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.querySelector("#sign-in-email").value;
  let password = document.querySelector("#sign-in-password").value;
  fetch("https://good-omens-coffee.herokuapp.com/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((resp) => resp.json())
    .then((data) => (window.location.href = data.redirectURL));
});

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.querySelector("#register-email").value;
  let password = document.querySelector("#register-password").value;
  fetch("https://good-omens-coffee.herokuapp.com/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((resp) => resp.json())
    .then((data) => (window.location.href = data.redirectURL));
});
