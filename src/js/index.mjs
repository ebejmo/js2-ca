import { setRegisterEventFormListener } from "./eventhandlers/register.mjs";
import { setLoginEventFormListener } from "./eventhandlers/login.mjs";
import { createPost } from "./api/posts/create.mjs";

const path = location.pathname;

if (path === "/profile/login/") {
  setLoginEventFormListener();
} else if (path === "/profile/register/") {
  setRegisterEventFormListener();
}

createPost({
  title: "test post",
  body: "testing stuff",
});
