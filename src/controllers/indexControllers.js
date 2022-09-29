const db = require("../database/models");
const { fn, col, literal, Op } = require("sequelize");

const capitalizeQuery = (c, alias) => [
  /* c = column */
  literal(
    `CONCAT( UPPER( SUBSTRING( ${c}, 1, 1 )),LOWER( SUBSTRING( ${c}, 2 )))`
  ),
  alias,
];

/* f = function   c = column */
const newField = (f, c, alias) => [fn(f, col(c)), alias];

module.exports = {
  index: async (req, res) => {
    const optionsProduct = (where) => ({
      where,
      attributes: {
        exclude: [
          "brandId",
          "typeId",
          "colorId",
          "subcategoryId",
          "providerId",
          "deletedAt",
          "createdAt",
          "updatedAt",
        ],
      },
      include: [
        {
          association: "images",
          attributes: [
            "img",
            newField("COUNT", "images.img", "count"),
            /* newField("UCASE", "images.img", "uppercase"),
            newField("LCASE", "images.img", "lowercase"), */
          ],
        },
        {
          association: "brand",
          attributes: ["name", capitalizeQuery("brand.name", "capitalize")],
        },
        {
          association: "type",
          attributes: ["name", capitalizeQuery("type.name", "capitalize")],
        },
        {
          association: "color",
          attributes: [
            "text",
            newField("UCASE", "color.text", "uppercase"),
            "hex",
          ],
        },
      ],
    });

    const whereProductOffer = {
      [Op.and]: [{ available: true }, { showInOffer: true }, { stock: true }],
    };

    const whereOutstandingOffer = {
      [Op.and]: [{ outstanding: true }, { available: true }, { stock: true }],
    };

    try {
      
      /* FILTRAMOS LOS PRODUCTOS EN OFERTA, EN STOCK Y DISPONIBLES */
      const productsOffer = await db.Product.findAll(
        optionsProduct(whereProductOffer)
      );

      /* FILTRAMOS LOS PRODUCTOS DESTACADOS, EN STOCK Y DISPONIBLES */
      const productsOutstanding = await db.Product.findAll(
        optionsProduct(whereOutstandingOffer)
      );

      const bannerHome = await db.Banner.findOne({
        where: { view: "home" },
        include: {
          association: "images",
          attributes: ["img"],
        },
      });


      // return res.send(bannerHome)
      return res.render(
        "index",
        { productsOffer, productsOutstanding, bannerHome },
        (err, renderOld) => {
          if (err) {
            console.log(err);
          }
          res.render("partials/basic", {
            contents: renderOld,
            title: "Home",
          });
        }
      );
    } catch (err) {
      res.send(err);
    }
  },

  search: (req, res) => {
    const keyword = req.query.keyword?.toLowerCase();
    const products = readDB("products.json");
    const productsFound = products.filter((product) =>
      JSON.stringify(product).toLowerCase().includes(keyword)
    );

    console.log(productsFound);
    return res.render(
      "products/productsAll",
      {
        products: productsFound,
      },
      (err, renderOld) => {
        res.render("partials/basic", {
          title: "Productos",
          contents: renderOld,
        });
      }
    );
  },
};
