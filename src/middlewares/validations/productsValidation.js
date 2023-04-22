const { body } = require("express-validator");
const createFiles = require("../../helpers/createFiles");

/* CREATE VALIDATOR */
const product_title = body("title")
  .notEmpty()
  .withMessage("Campo requerido")
  .bail()
  .isLength({ min: 5, max: 40 })
  .withMessage("Longitud minima 5 y maxima 40");

const product_subtitle = body("subtitle")
  .optional({ nullable: true })
  .bail()
  .isLength({ min: 5, max: 60 })
  .withMessage("Longitud minima 5 y maxima 60");

const product_description = body("description")
  .notEmpty()
  .withMessage("Campo requerido")
  .bail()
  .isLength({ min: 15, max: 250 })
  .withMessage("Longitud minima 15 y maxima 250");

const product_model = body("model")
  .optional({ nullable: true })
  .bail()
  .isLength({ max: 15 })
  .withMessage("Longitud maxima 15");

const product_madeIn = body("madeIn").optional({ nullable: true });

const product_quantity = body("quantity")
  .notEmpty()
  .withMessage("Campo requerido")
  .bail()
  .isNumeric()
  .withMessage("Valor invalido");
const product_price = body("price")
  .notEmpty()
  .withMessage("Campo requerido")
  .bail()
  .isNumeric()
  .withMessage("Valor invalido");
const product_discount = body("discount").optional({ nullable: true });
const product_showInOffer = body("showInOffer").optional({
  nullable: true,
});
const product_outstanding = body("outstanding").optional({
  nullable: true,
});
const product_available = body("available").optional({ nullable: true });
const product_stock = body("stock").optional({ nullable: true });
const product_freeShipping = body("freeShipping").optional({
  nullable: true,
});
const product_priceShipping = body("priceShipping").optional({
  nullable: true,
});
const product_brandId = body("brandId", "Campo requerido").notEmpty();
const product_typeId = body("typeId").optional({ nullable: true });
const product_colorId = body("colorId").optional({ nullable: true });
const product_subcategoryId = body("subcategoryId")
  .notEmpty()
  .withMessage("Campo requerido")
  .bail();
const product_providerId = body("providerId").optional({
  nullable: true,
});
const product_imgText = body("imgText").optional({ nullable: true });
const product_imgsFiles = body("imgsFiles").custom((_, { req }) => {
  const files = req.files ? [req.files?.imgsFiles].flat(3) : null;
  if (files) {
    const noExistErrors = files.every(({ name }) =>
      /(.jpeg|.png|.jpeg|.webp])/i.test(name)
    );
    if (noExistErrors) {
      return createFiles({
        files,
        propToRead: "name",
        nameFunctionCreate: "mv",
      });
    }
    throw "Los formatos validos son .png, .jpg, .jpeg y .webp";
  }
  return true;
});

const validations = [
  product_title,
  product_subtitle,
  product_description,
  product_model,
  product_madeIn,
  product_quantity,
  product_price,
  product_discount,
  product_showInOffer,
  product_outstanding,
  product_available,
  product_stock,
  product_freeShipping,
  product_priceShipping,
  product_brandId,
  product_typeId,
  product_colorId,
  product_subcategoryId,
  product_providerId,
  product_imgText,
  product_imgsFiles,
];

module.exports = {
  createProductValidation: validations,
  updateProductValidation: validations,
};
