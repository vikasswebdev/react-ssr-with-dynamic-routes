import fetch from "isomorphic-fetch";

export function fetchAPI() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => data);
}
