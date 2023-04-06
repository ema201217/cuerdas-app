const db = require("../database/models");

/* MIDDLEWARE PARA LA INFORMACIÓN Y FUNCIONES QUE SE NECESITAN EN TODA LA APLICACIÓN */
module.exports = async (req, res, next) => {
  try {
    const toThousand = (n) =>
      n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    const capitalize = (text) =>
      text && text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();

    const products = await db.Product.findAll({
      attributes: ["subcategoryId", "stock", "quantity"],
    });
    const categories = await db.Category.findAll({
      attributes: ["id", "name"],
    });

    const brands = (
      await db.Brand.findAll({ attributes: ["id", "name"] })
    ).filter((b) => b.name);

    const types = (
      await db.Type.findAll({ attributes: ["id", "name"] })
    ).filter((t) => t.name);

    const genders = (
      await db.Gender.findAll()
    ).filter((g) => g.text);

    const colors = (
      await db.Color.findAll({ attributes: ["id", "text", "hex"] })
    ).filter((c) => c.text);

    const providers = (
      await db.Provider.findAll({ attributes: ["id", "name"] })
    ).filter((p) => p.name);

    let subcategoriesExisting = await db.Subcategory.findAll({
      attributes: ["id", "name"],
    });
    
    subcategoriesExisting = subcategoriesExisting.filter(({ id }) =>
      products.some(
        ({ subcategoryId, stock, quantity }) =>
          subcategoryId == id && (stock || quantity)
      )
    );

    /* LOCALS */
    res.locals.categories = categories;
    res.locals.subcategories = subcategoriesExisting;
    res.locals.brands = brands;
    res.locals.colors = colors;
    res.locals.providers = providers;
    res.locals.genders = genders;
    res.locals.toThousand = toThousand;
    res.locals.capitalize = capitalize;
    res.locals.types = types;
  } catch (error) {
    console.log(error);
  }
  next();
};
