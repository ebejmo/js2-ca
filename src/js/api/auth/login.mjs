import { API_SOCIAL_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";

const action = "/auth/login";
const method = "POST";

export async function login(profile) {
  const loginURL = API_SOCIAL_URL + action;

  try {
    const response = await fetch(loginURL, {
      headers: {
        "Content-Type": "application/json",
      },
      method,
      body: JSON.stringify(profile),
    });

    const { accessToken, ...user } = await response.json();

    storage.save("accessToken", accessToken);
    storage.save("user", user);

    // FIX THIS TO MAKE BETTER UX
    alert(`${user.name} is now logged in.`);
  } catch (error) {
    console.log("Error happened:", error);
  }
}
