const { readDB } = require("../data");

/* MIDDLEWARE PARA LA INFORMACIÓN Y FUNCIONES QUE SE NECESITAN EN TODA LA APLICACIÓN */
module.exports = (req, res, next) => {

  const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  const capitalize = (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()

  const products = readDB("products.json");
  const categories = readDB("categories.json");
  const brands = readDB("brands.json");
  /* Filtramos las categorias que tengan Stock, que la cantidad sea mayor a 0 y que el ID de la categoría sea igual a la categoría dentro de cada producto */
  const categoriesExisting = readDB("subcategories.json").filter(({ id }) => {
    /* el método some retorna un booleano y lo que debe retornar en filter justamente es un booleano */
    return products.some(
      ({ subcategoryId, stock, quantity }) =>
        subcategoryId == id && (stock || quantity)
    );
  });

  

  /* LOCALS */
  res.locals.categories = categories;
  res.locals.subcategories = categoriesExisting;
  res.locals.brands = brands;
  res.locals.toThousand = toThousand;
  res.locals.capitalize = capitalize;

  next();
};
