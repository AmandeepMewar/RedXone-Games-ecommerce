export const api = async () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const URL = `https://api.rawg.io/api/games?dates=2023-01-01,2024-12-31&page_size=40&key=${API_KEY}`;
  try {
    const response = await fetch(URL);
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log(error);
  }
};
