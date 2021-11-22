const getSumForAttribute = (cart, attribute) => {
  return cart.reduce((total, item) => total + item[attribute], 0);
};

exports.getSumForAttribute = getSumForAttribute;
