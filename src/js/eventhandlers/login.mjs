import { login } from "../api/auth/login.mjs";

export function setLoginEventFormListener() {
  const form = document.querySelector("#loginForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      // creates an object
      // entries gives keys and values
      const profile = Object.fromEntries(formData.entries());

      // api send
      login(profile);
    });
  }
}
