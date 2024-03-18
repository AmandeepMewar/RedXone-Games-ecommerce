export const calculateGamePrice = (averageRating, topRating, releaseDate) => {
  const basePrice = 10;

  const releaseDiff =
    new Date().getFullYear() - new Date(releaseDate).getFullYear();

  const ratingDiff = Math.abs(averageRating - topRating);
  const maxAge = 30;
  const price = parseInt((maxAge - releaseDiff) * ratingDiff + basePrice);
  const finalPrice = price + 0.99;
  return finalPrice;
};

export const formatCurrency = price => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  return formatter.format(price);
};
