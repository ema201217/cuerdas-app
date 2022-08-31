const { readDB } = require("../data");

module.exports = {
  index: (req, res) => {
    const products = readDB("products.json");
    const productsOffer = products.filter(
      ({ available, showInOffer, stock }) => available && showInOffer && stock
    );
    const productsOutstanding = products.filter(
      ({ available, outstanding, stock }) => available && outstanding && stock
    );
    return res.render("index", { productsOffer, productsOutstanding });
  },
  search: (req, res) => {
    return res.render("search");
  },
};
