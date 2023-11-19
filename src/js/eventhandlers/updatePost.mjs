import { updatePost } from "../api/posts/index.mjs";

export function setUpdatePostEventFormListener() {
  const form = document.querySelector("#updatePost");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    const button = form.querySelector("button");
    button.disabled = true;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      // creates an object
      // entries gives keys and values
      const post = Object.fromEntries(formData.entries());
      post.id = id;

      // api send
      updatePost(post);
    });
  }
}
