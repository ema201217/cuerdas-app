const db = require("../database/models");
const { Op } = require("sequelize");
const { getLabelFilter } = require("../helpers");

module.exports = {
  all: async (req, res) => {
    try {
      const reqQuery = req.query;
      const pageSelected = +reqQuery.page || 1;
      const limit = +reqQuery.countElements || 3;
      const subcategoryId = +reqQuery.subcategoryId || null;
      const categoryId = +reqQuery.categoryId || null;

      let options = {
        page: pageSelected,
        paginate: limit,
        include: ["images"],
      };

      if (subcategoryId) {
        options = {
          ...options,
          where: {
            subcategoryId,
          },
        };
      } else if (categoryId) {
        options = {
          ...options,
          include: [
            "images",
            {
              model: db.Subcategory,
              as: "subcategory",
              where: {
                categoryId,
              },
            },
          ],
        };
      }

      const {
        docs: products,
        pages,
        total,
      } = await db.Product.paginate(options);

      // RUTA QUE FIGURA EN LA VISTA DE LISTA DE PRODUCTOS
      const { capitalize, categories, subcategories } = res.locals;
      const labelFilter = getLabelFilter(
        [
          { key: categoryId, elementsFilter: categories },
          { key: subcategoryId, elementsFilter: subcategories },
        ],
        "name"
      );

      const showPaginator = total > limit && products.length;
      /* INTERPRETACIONES ENVIADAS A LA VISTA */
      return res.render(
        "products/productsAll",
        {
          products,
          pages,
          pageCurrent: pageSelected,
          subcategoryId,
          categoryId,
          labelFilter: capitalize(labelFilter) || labelFilter,
          showPaginator,
        },
        (err, renderOld) => {
          if (err) {
            return console.log(err);
          }
          res.render("partials/basic", {
            title: "Productos",
            contents: renderOld,
          });
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  },

  detail: async (req, res) => {
    const idProduct = req.params.id;
    const product = await db.Product.findByPk(idProduct, {
      include: ["images"],
    });

    const configRelateds = {
      paginate: 15,
      page: 1,
      include: ["images"],
      where: {
        [Op.and]: [
          {
            stock: true,
          },
          {
            available: true,
          },
          {
            id: { [Op.ne]: product.id },
          },
          {
            subcategoryId: product.subcategoryId,
          },
        ],
      },
    };
    const { docs: relateds } = await db.Product.paginate(configRelateds);

    return res.render(
      "products/productDetail",
      {
        p: product,
        relateds,
      },
      (err, renderOld) => {
        if (err) {
          return console.log(err);
        }
        res.render("partials/basic", {
          title: "Detalle de producto",
          contents: renderOld,
        });
      }
    );
  },
};
