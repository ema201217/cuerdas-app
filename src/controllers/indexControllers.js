const { readDB } = require("../data");

module.exports = {
  index: (req, res) => {
    const products = readDB("products.json");
    /* FILTRAMOS LOS PRODUCTOS EN OFERTA, EN STOCK Y DISPONIBLES */
    const productsOffer = products.filter(
      ({ available, showInOffer, stock }) => available && showInOffer && stock
    );
    /* FILTRAMOS LOS PRODUCTOS DESTACADOS, EN STOCK Y DISPONIBLES */
    const productsOutstanding = products.filter(
      ({ available, outstanding, stock }) => available && outstanding && stock
    );

    return res.render(
      "index",
      { productsOffer, productsOutstanding },
      (err, renderOld) => {
        res.render("partials/basic", {
          contents: renderOld,
          title:'Home'
        });
      }
    );
  },
  
  search: (req, res) => {
    return res.render("search");
  },
};
