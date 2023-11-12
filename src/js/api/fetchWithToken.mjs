import { load } from "../storage/index.mjs";

export function headers() {
  const accessToken = load("accessToken");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };
}

export async function fetchWithToken(url, options) {
  return fetch(url, {
    ...options, // options is the body
    headers: headers(), // returns the everything inside headers
  });
}
