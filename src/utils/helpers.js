export const priceCalc = rate => {
  const cost = Math.floor(((rate * rate * (rate - 1)) / (rate + 1)) * rate);
  const price = cost + ".99";
  return price;
};

export const formatCurrency = () => {};
