// Object for caching request in local storage
const cachedRequest = JSON.parse(localStorage.getItem("cachedRequests")) || {};

export const api = async query => {
  const API_KEY = import.meta.env.VITE_API_KEY;

  if (cachedRequest[query]) {
    return cachedRequest[query];
  }

  const URL = `https://api.rawg.io/api/games${query}key=${API_KEY}`;
  try {
    const response = await fetch(URL);
    const responseData = await response.json();

    cachedRequest[query] = responseData;

    localStorage.setItem("cachedRequests", JSON.stringify(cachedRequest));

    return responseData;
  } catch (error) {
    console.log(error);
  }
};
