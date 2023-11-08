import { register } from "../api/auth/register.mjs";

export function setRegisterEventFormListener() {
  const form = document.querySelector("#registerForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    // creates an object
    // entries gives keys and values
    const profile = Object.fromEntries(formData.entries());
    const action = form.action;
    const method = form.method;

    // api send
    register(profile);
  });
}
