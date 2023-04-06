const { body } = require("express-validator");
const { compare } = require("bcryptjs");
const { User } = require("../../database/models");

const loginEmail = body("emailOrUsername")
  .notEmpty()
  .withMessage("Campo requerido")
  .bail()
  .isLength({ min: 5, max: 20 })
  .withMessage("Longitud minima 5 y máximo 20")
  .bail()
  .isEmail()
  .withMessage("Email invalido")
  .custom(async (value) => {
    const user = await User.findOne({ where: { email: value } });
    return !!!user;
  })
  .withMessage("El email no esta registrado");

const loginPassword = body("password")
  .notEmpty()
  .withMessage("Campo requerido")
  .bail()
  .isLength({ min: 5, max: 25 })
  .withMessage("Longitud minima 5 y máximo 25");

const loginMergeValidation = body("mergeValidation")
  .custom(async (_, { req }) => {
    const user = await User.findOne({ where: { email: req.body.emailOrUsername } });
    return await compare(req.body.password, user?.password);
  })
  .withMessage("Credenciales invalidas");

const registerEmail = body("email")
  .notEmpty()
  .withMessage("Campo requerido")
  .bail()
  .isEmail()
  .withMessage("Email invalido")
  .bail()
  .isLength({ min: 5, max: 20 })
  .withMessage("Longitud minima 5 y máximo 20")
  .bail()
  .custom(async (value) => {
    const user = await User.findOne({ where: { email: value } });
    return !!user;
  })
  .withMessage("El email ingresado ya esta registrado");

const registerUsername = body("username")
  .notEmpty()
  .withMessage("Campo requerido")
  .bail()
  .isLength({ min: 5, max: 20 })
  .withMessage("Longitud minima 5 y máximo 20")
  .bail()
  .isAlphanumeric("es-ES")
  .withMessage("El nombre de usuario debe tener letras y números")
  .bail()
  .custom(async (value) => {
    const user = await User.findOne({ where: { username: value } });
    return !!user;
  })
  .withMessage("El nombre de usuario ya esta registrado");

const registerTerms = body("checkTerms")
  .exists()
  .withMessage("Debes aceptar los términos y condiciones");

const registerPassword = body("password")
  .notEmpty()
  .withMessage("Campo requerido")
  .bail()
  .isLength({ min: 5, max: 25 })
  .withMessage("Longitud minima 5 y máximo 25")
  .bail()
  .isAlphanumeric("es-ES")
  .withMessage("La contraseña debe ser letras y números");

const registerMergeValidation = body("password2")
  .custom((value, { req }) => {
    return value === req.body.password;
  })
  .withMessage("Las contraseñas no coinciden");

const registerReCaptcha = body("recaptcha")
  .custom((_, { req }) => !!req.body["g-recaptcha-response"])
  .withMessage("Debes activar el captcha");

module.exports = {
  validationUserLogin: [loginEmail, loginPassword, loginMergeValidation],
  validationUserRegister: [
    registerEmail,
    registerPassword,
    registerUsername,
    registerTerms,
    registerMergeValidation,
    registerReCaptcha,
  ],
};
