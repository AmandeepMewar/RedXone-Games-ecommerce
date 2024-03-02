export const api = async query => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const URL = `https://api.rawg.io/api/games${query}key=${API_KEY}`;
  try {
    const response = await fetch(URL);
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log(error);
  }
};
