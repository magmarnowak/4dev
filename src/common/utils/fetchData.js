import { baseUrl } from "."

const handleError = res => {
  if (!res.ok) {
    throw new Error(res.statusText)
  }
  return res
}

export const delay = time => new Promise(resolve => setTimeout(resolve, time))

export const fetchData = endpoint =>
  fetch(baseUrl(endpoint))
    .then(handleError)
    .then(res => res.json())
