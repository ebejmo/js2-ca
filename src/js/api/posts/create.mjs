import { API_SOCIAL_URL } from "../constants.mjs";
import { fetchWithToken } from "../fetchWithToken.mjs";

const action = "/posts";
const method = "POST";

export async function createPost(postData) {
  const createPostURL = API_SOCIAL_URL + action;

  try {
    const response = await fetchWithToken(createPostURL, {
      method,
      body: JSON.stringify(postData),
    });
    return await response.json();
  } catch (error) {
    console.log("THIS IS THE ERROR:", error);
  }
}
