import * as listeners from "./eventhandlers/index.mjs";
import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";
// import { renderPostTemplate } from "./templates/index.mjs";

const path = location.pathname;

if (path === "/profile/login/") {
  listeners.setLoginEventFormListener();
} else if (path === "/profile/register/") {
  listeners.setRegisterEventFormListener();
} else if (path === "/post/create") {
  listeners.setCreatePostEventFormListener();
} else if (path === "/post/edit/") {
  listeners.setUpdatePostEventFormListener();
}

// async function testTemplate() {
//   const posts = await postMethods.getPosts();
//   const post = posts[1];
//   const container = document.querySelector("#post");
//   renderPostTemplate(post, container);
// }

// async function testTemplate() {
//   const posts = await postMethods.getPosts();
//   const container = document.querySelector("#posts");
//   templates.renderPostTemplates(posts, container);
// }

// testTemplate();

//   createPost({
//     title: "testing",
//     body: "what is my id",
//   });

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
// post.getPost(8726).then(console.log);

// my post
// postMethods.createPost({
//   title: "new but old title",
//   body: "What is my id",
// });

// deleting my latest post
// postMethods.deletePost(8802);

// postMethods.createPost();
