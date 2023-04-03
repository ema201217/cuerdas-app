const db = require("../database/models");
const { fn, col, literal, Op } = require("sequelize");

const capitalizeQuery = (field, alias) => [
  /* field = campo */
  literal(
    `CONCAT( UPPER( SUBSTRING( ${field}, 1, 1 )),LOWER( SUBSTRING( ${field}, 2 )))`
  ),
  alias,
];

/* f = function   c = column */
const newField = (sqlFunction, field, alias) => [
  fn(sqlFunction, col(field)),
  alias,
];

/* Función con las opciones configuradas que recibe where,exclude e include */
const optionsTable = (
  where = {},
  exclude = [],
  include = []
) => {
  return {
    where,
    attributes: {
      exclude,
    },
    include,
  };
};

/* Función que renderiza la vista con express-partials */
const renderView = (res, path, properties = {}, titleView = "") =>
  res.render(path, { ...properties }, (err, renderOld) => {
    if (err) {
      return res.send(err);
    }
    res.render("partials/basic", {
      contents: renderOld,
      title: titleView,
    });
  });
/* EXCLUDE PRODUCT */
const excludeFieldsProduct = [
    "brandId",
    "typeId",
    "colorId",
    "subcategoryId",
    "providerId",
    "deletedAt",
    "createdAt",
    "updatedAt",
  ];

  /* INCLUDE PRODUCT */
const includeFieldsProduct = [
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
      attributes: ["text", newField("UCASE", "color.text", "uppercase"), "hex"],
    },
  ];
  
module.exports = {
  index: async (req, res) => {

    /* WHERE VIEW INDEX --> PRODUCT OFFER */
    const whereProductOffer = {
      [Op.and]: [{ available: true }, { showInOffer: true }, { stock: true }],
    };

    /* WHERE VIEW INDEX --> PRODUCT OUTSTANDING */
    const whereProductOutstanding = {
      [Op.and]: [{ outstanding: true }, { available: true }, { stock: true }],
    };

    try {
      /* REGISTROS FILTRADOS --> LOS PRODUCTOS EN OFERTA */
      const productsOffer = await db.Product.findAll(
        optionsTable(whereProductOffer,excludeFieldsProduct,includeFieldsProduct)
      );

      /* REGISTROS FILTRADOS --> LOS PRODUCTOS DESTACADOS */
      const productsOutstanding = await db.Product.findAll(
        optionsTable(whereProductOutstanding,excludeFieldsProduct,includeFieldsProduct)
      );

      /* Traemos el banner correspondiente a la vista que vamos a renderizar */
      const {where,exclude,include} = {
        where: { view: "home" },
        exclude: [],
        include: [{
          association: "images",
          attributes: ["img"],
        }],
      };

      /* REGISTRO BANNER */
      const bannerHome = await db.Banner.findOne(optionsTable(where,exclude,include));

      // RENDER VIEW
      return renderView(
        res,
        "index",
        { productsOffer, productsOutstanding, bannerHome },
        "Home"
      );
    } catch (err) {
      res.send(err);
    }
  },

  search: async (req, res) => {
    
    const whereSearchProduct = (fields = []) => {
      const keyword = req.query.keyword?.toLowerCase();
      const operationSearch = { [Op.substring]: keyword };
      const where = {
        /* MAPEAMOS LOS FIELDS QUE RECIBIMOS POR PARÁMETRO */
        [Op.or]: fields.map((field) => ({ [field]: operationSearch })),
      };
      return optionsTable(where,excludeFieldsProduct,includeFieldsProduct);
    };

    try {
      /* $fiel$  encerrar con el signo $ es acceder a información desde las asociaciones hechas */
      const fieldsToSearch = [
        "title",
        "subtitle",
        "description",
        "model",
        "$brand.name$",
        "$type.name$",
        "$color.text$",
      ];

      let productsFound = await db.Product.findAll(
        whereSearchProduct(fieldsToSearch)
      );

      /* Si existe un ID en el producto guardo los productos sino un array vació */
      productsFound = productsFound[0].id ? productsFound : [];

      // return view
      return renderView(
        res,
        "products/productsAll",
        { products: productsFound },
        "Productos"
      );
    } catch (err) {
      res.send(err);
    }
  },
};
