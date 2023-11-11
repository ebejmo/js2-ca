import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/auth/register";
const method = "POST";

export async function register(profile) {
  const registerURL = API_SOCIAL_URL + action;

  try {
    const response = await fetch(registerURL, {
      headers: {
        "Content-Type": "application/json",
      },
      method,
      body: JSON.stringify(profile),
    });

    const result = await response.json();
    console.log(result);

    // FIX THIS TO MAKE BETTER UX
    alert("You are now registered. Click here to log in");
    return result;
  } catch (error) {
    console.log("Error happened:", error);
  }
}
