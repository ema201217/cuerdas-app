const { readDB } = require("../data");

module.exports = (req, res, next) => {
  res.locals.accessories = readDB("accessories.json");

  const categories = readDB("categories.json");
  const products = readDB("products.json");

  /* Filtramos las categorias que tengan Stock, que la cantidad sea mayor a 0 y que el ID de la categoría sea igual a la categoría dentro de cada producto */
  const categoriesExisting = categories.filter(({ id }) =>
    /* el método some retorna un booleano y lo que debe retornar en filter justamente es un booleano */
    products.some(
      ({ stock, category, quantity }) => (stock || quantity) && id === category
    )
  );

  res.locals.categories = categoriesExisting;

  next();
};
