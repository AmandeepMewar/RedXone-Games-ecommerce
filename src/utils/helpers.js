export const calculateGamePrice = (averageRating, topRating, releaseDate) => {
  const basePrice = 10;

  const releaseDiff =
    new Date().getFullYear() - new Date(releaseDate).getFullYear();

  const ratingDiff = Math.abs(averageRating - topRating);
  const maxAge = 30;
  const price = ((maxAge - releaseDiff) * ratingDiff + basePrice).toFixed(2);
  const finalPrice = Number(price);
  return finalPrice;
};
