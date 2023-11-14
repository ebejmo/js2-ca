import { API_SOCIAL_URL } from "../constants.mjs";
import { fetchWithToken } from "../fetchWithToken.mjs";

const action = "/posts";
const method = "DELETE";

export async function deletePost(id) {
  if (!id) {
    throw new Error("Delete requires a postID");
  }

  const deletePostURL = `${API_SOCIAL_URL}${action}/${id}`;

  try {
    const response = await fetchWithToken(deletePostURL, {
      method,
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
