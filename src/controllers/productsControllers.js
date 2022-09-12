const { readDB } = require("../data");

/* FUNCION PARA PAGINATION */
const paginated = (arr, offset, limit) => {
  let newArr = [];
  for (let i = offset; i < limit + offset; i++) {
    if (!arr[i]) {
      return newArr;
    }
    newArr = [...newArr, arr[i]];
  }
  return newArr;
};


module.exports = {
  all: (req, res) => {
    try {
      let productsAll;
      let pageCurrent = 0;
      /* PARAMS */
      const categoryId = +req.params.categoryId;
      const subcategoryId = +req.params.subcategoryId;

      /* DBs */
      let products = readDB("products.json");
      let total = products.length;
      const subcategories = readDB("subcategories.json");

      /* QUERIES */
      let limit = +req.query.limit;
      let offset = +req.query.offset;

      /* si no existe ninguna query */
      if (!limit && !offset) {
        limit = 12;
        offset = 0;
      }

      /* si existe un offset */
      if (offset) {
        pageCurrent = offset;
      }

      let page = 1;
      /* mientras total sea mayor al limite */
      while (total > limit) {
        /* aumenta page de a uno */
        page += 1;
        /* por cada iteracion sacale el valor que tiene limite */
        total -= limit;
      }

      /* FILTERS */
      if (categoryId) {
        const productsFilterForCategory = products.filter((product) =>
          subcategories.some(
            (subcategory) =>
              categoryId === subcategory.categoryId &&
              product.subcategoryId === subcategory.id
          )
        );
        productsAll = productsFilterForCategory;
      } else if (subcategoryId) {
        const productsFilterForSubcategory = products.filter(
          (product) => product.subcategoryId === subcategoryId
        );
        productsAll = productsFilterForSubcategory;
      } else {
        productsAll = products;
      }

      /* PAGINACIÓN */
      products = paginated(products, offset, limit);

      /* INTERPRETACIONES ENVIADAS A LA VISTA */
      return res.render(
        "products/productsAll",
        {
          products: productsAll,
          limit,
          offset,
          page,
          pageCurrent,
        },
        (err, renderOld) => {
          if (err) {
            console.log(err);
          }
          res.render("partials/basic", {
            title: "Productos",
            contents: renderOld,
          });
        }
      );
    } catch (error) {
      console.log(error);
    }
  },

  detail: (req, res) => {
    const products = readDB("products.json");
    const productFind = products.find(({ id }) => id === +req.params.id);
    const relateds = products.filter(
      ({ subcategoryId, stock, available, id }) =>
        subcategoryId === +req.params.subcategoryId &&
        stock &&
        available &&
        productFind.id !== id
    );
    return res.render(
      "products/productDetail",
      {
        ...productFind,
        relateds,
      },
      (err, renderOld) => {
        res.render("partials/basic", {
          title: "Detalle de producto",
          contents: renderOld,
        });
      }
    );
  },
};
