const { getSumForAttribute } = require("./helpers");

const getShippingCost = (cart) => {
  const totalCartPrice = getSumForAttribute(cart, "price");
  const totalPriceForToys = getSumForAttribute(
    cart.filter((item) => item.category === "Toys"),
    "price"
  );

  if (totalCartPrice >= 100 || totalPriceForToys >= 60) {
    return 0;
  }

  return getSumForAttribute(cart, "unitShippingCost");
};

module.exports = { getShippingCost };
