import { setRegisterEventFormListener } from "./eventhandlers/register.mjs";
import { setLoginEventFormListener } from "./eventhandlers/login.mjs";

const path = location.pathname;

if (path === "/profile/login/") {
  setLoginEventFormListener();
} else if (path === "/profile/register/") {
  setRegisterEventFormListener();
}
