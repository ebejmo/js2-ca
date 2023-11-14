import { API_SOCIAL_URL } from "../constants.mjs";
import { fetchWithToken } from "../fetchWithToken.mjs";

const action = "/posts";
const method = "PUT";

export async function updatePost(postData) {
  if (!postData.id) {
    throw new Error("Update requires a postID");
  }

  const updatePostURL = `${API_SOCIAL_URL}${action}/${postData.id}`;

  try {
    const response = await fetchWithToken(updatePostURL, {
      method,
      body: JSON.stringify(postData),
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
