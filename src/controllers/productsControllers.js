const { readDB } = require("../data");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
  all: (req, res) => {
    const products = readDB("products.json");
    const categoryId = +req.params.categoryId;

    const productsFilterForCategory = products.filter(
      ({ category }) => category === categoryId
    );

    const productsAll = categoryId ? productsFilterForCategory : products

    return res.render("products/productsAll", {
      products: productsAll,
      toThousand,
    });
  },

  detail: (req, res) => {
    const products = readDB("products.json");
    const productFind = products.find(({ id }) => id === +req.params.id);
    const relateds = products.filter(
      ({ category, stock, available, id }) =>
        category === +req.params.categoryId &&
        stock &&
        available &&
        productFind.id !== id
    );
    return res.render("products/productDetail", {
      ...productFind,
      relateds,
      toThousand,
    });
  },
};
