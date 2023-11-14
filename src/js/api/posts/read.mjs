import { API_SOCIAL_URL } from "../constants.mjs";
import { fetchWithToken } from "../fetchWithToken.mjs";

const action = "/posts";

export async function getPosts() {
  const getPostURL = `${API_SOCIAL_URL}${action}`;

  try {
    const response = await fetchWithToken(getPostURL);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getPost(id) {
  if (!id) {
    throw new Error("Get requires a postID");
  }

  const getPostURL = `${API_SOCIAL_URL}${action}/${id}`;

  try {
    const response = await fetchWithToken(getPostURL);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
