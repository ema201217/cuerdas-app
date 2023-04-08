const { body } = require("express-validator");
const { Product } = require("../../database/models");

const create_product_title = body("title")
  .notEmpty()
  .withMessage("Campo requerido")
  .bail()
  .isLength({ min: 5, max: 30 })
  .withMessage("Longitud minima 5 y maxima 30");

const create_product_subtitle = body("subtitle")
  .optional({ nullable: true })
  .bail()
  .isLength({ min: 5, max: 30 })
  .withMessage("Longitud minima 5 y maxima 30");

const create_product_description = body("description")
  .notEmpty()
  .withMessage("Campo requerido")
  .bail()
  .isLength({ min: 15, max: 250 })
  .withMessage("Longitud minima 15 y maxima 250");

const create_product_model = body("model")
  .optional({ nullable: true })
  .bail()
  .isLength({ max: 15 })
  .withMessage("Longitud maxima 15");

const create_product_madeIn = body("madeIn").optional({ nullable: true });

const create_product_quantity = body("quantity")
  .notEmpty()
  .withMessage("Campo requerido")
  .bail()
  .isNumeric()
  .withMessage("Valor invalido");
const create_product_price = body("price")
  .notEmpty()
  .withMessage("Campo requerido")
  .bail()
  .isNumeric()
  .withMessage("Valor invalido");
const create_product_discount = body("discount").optional({ nullable: true });
const create_product_showInOffer = body("showInOffer").optional({
  nullable: true,
});
const create_product_outstanding = body("outstanding").optional({
  nullable: true,
});
const create_product_available = body("available").optional({ nullable: true });
const create_product_stock = body("stock").optional({ nullable: true });
const create_product_freeShipping = body("freeShipping").optional({
  nullable: true,
});
const create_product_priceShipping = body("priceShipping").optional({
  nullable: true,
});
const create_product_brandId = body('brandId','Campo requerido').notEmpty()
const create_product_typeId = body("typeId").optional({ nullable: true });
const create_product_colorId = body("colorId").optional({ nullable: true });
const create_product_subcategoryId = body("subcategoryId")
  .notEmpty()
  .withMessage("Campo requerido")
  .bail();
const create_product_providerId = body("providerId").optional({
  nullable: true,
});
const create_product_imgText = body("imgText")
  .optional({ nullable: true })

module.exports = {
  createProductValidation: [
    create_product_title,
    create_product_subtitle,
    create_product_description,
    create_product_model,
    create_product_madeIn,
    create_product_quantity,
    create_product_price,
    create_product_discount,
    create_product_showInOffer,
    create_product_outstanding,
    create_product_available,
    create_product_stock,
    create_product_freeShipping,
    create_product_priceShipping,
    create_product_brandId,
    create_product_typeId,
    create_product_colorId,
    create_product_subcategoryId,
    create_product_providerId,
    create_product_imgText,
  ],
  updateProductValidation: [],
};
