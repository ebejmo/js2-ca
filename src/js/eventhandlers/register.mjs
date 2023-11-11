import { register } from "../api/auth/register.mjs";

export function setRegisterEventFormListener() {
  const form = document.querySelector("#registerForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      // creates an object
      // entries gives keys and values
      const profile = Object.fromEntries(formData.entries());

      // api send
      register(profile);
    });
  }
}
