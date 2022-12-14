import fetch from "isomorphic-fetch";

export function fetchAPI() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => data);
}

export function fetchAPI2() {
  return fetch(`https://jsonplaceholder.typicode.com/posts/1`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

export function fetchPost(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.json())
    .then((data) => data);
}
