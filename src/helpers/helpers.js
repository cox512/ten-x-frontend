export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const priceChangeColor = Array.from(
  document.querySelectorAll(".price-change")
);
