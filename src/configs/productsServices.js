const { Op } = require("sequelize");
const { newFieldQuery } = require("../helpers");
const capitalizeQuery = require("../helpers/capitalizeQuery");

module.exports = {
  getProducts: {
    include: [
      "images",
      "color",
      "type",
      "brand",
      "provider",
      { association: "subcategory", include: ["category"] },
    ],
  },
  getProductById: {
    include: ["images", "color", "brand", "type"],
  },
  getProductsOffer: {
    where: {
      [Op.and]: [{ available: true }, { showInOffer: true }, { stock: true }],
    },
    include: [
      {
        association: "images",
        attributes: [
          "img",
          newFieldQuery({
            sqlFunction: "COUNT",
            field: "images.img",
            alias: "count",
          }),
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
          "hex",
          newFieldQuery({
            sqlFunction: "UCASE",
            field: "color.text",
            alias: "uppercase",
          }),
        ],
      },
    ],
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
  getProductsOutstanding: {
    where: {
      [Op.and]: [{ outstanding: true }, { available: true }, { stock: true }],
    },
    include: [
      {
        association: "images",
        attributes: [
          "img",
          newFieldQuery({
            sqlFunction: "COUNT",
            field: "images.img",
            alias: "count",
          }),
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
          "hex",
          newFieldQuery({
            sqlFunction: "UCASE",
            field: "color.text",
            alias: "uppercase",
          }),
        ],
      },
    ],
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
};
