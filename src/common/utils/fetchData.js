import { baseUrl } from ".";

const handleError = (res) => {
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res;
};

export const delay = (time) =>
  new Promise((resolve) => setTimeout(resolve, time));

export const fetchData = (endpoint) =>
  fetch(baseUrl(endpoint))
    .then(handleError)
    .then((res) => res.json());

export const postData = (endpoint, values) =>
  fetch(baseUrl(endpoint), {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(handleError)
    .then((res) => res.json());
