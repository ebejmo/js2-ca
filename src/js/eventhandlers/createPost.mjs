import { createPost } from "../api/posts/index.mjs";

export function setCreatePostEventFormListener() {
  const form = document.querySelector("#createPost");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      // creates an object
      // entries gives keys and values
      const post = Object.fromEntries(formData.entries());

      // api send
      createPost(post);
    });
  }
}
