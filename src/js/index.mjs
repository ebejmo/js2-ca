import { setRegisterEventFormListener } from "./eventhandlers/register.mjs";
import { setLoginEventFormListener } from "./eventhandlers/login.mjs";
import { createPost } from "./api/posts/create.mjs";
import { updatePost } from "./api/posts/update.mjs";
import { deletePost } from "./api/posts/delete.mjs";
import * as post from "./api/posts/index.mjs";

const path = location.pathname;

if (path === "/profile/login/") {
  setLoginEventFormListener();
} else if (path === "/profile/register/") {
  setRegisterEventFormListener();
}

// createPost({
//   title: "testing",
//   body: "what is my id",
// });

// updatePost({
//   id: 8732,
//   title: "UPDATED testing again",
//   body: "UPDATED, I know my id again",
// });

// deletePost(8728);
// post.createPost();
// post.updatePost();
// post.deletePost();
// post.getPost();
// post.getPosts().then(console.log);
post.getPost(8726).then(console.log);
