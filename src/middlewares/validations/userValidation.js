const { body } = require("express-validator");
const { compare } = require("bcryptjs");
const { User } = require("../../database/models");

const login_email = body("emailOrUsername")
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

const login_password = body("password")
  .notEmpty()
  .withMessage("Campo requerido")
  .bail()
  .isLength({ min: 5, max: 25 })
  .withMessage("Longitud minima 5 y máximo 25");

const login_merge_validation = body("mergeValidation")
  .custom(async (_, { req }) => {
    const user = await User.findOne({
      where: { email: req.body.emailOrUsername },
    });
    return await compare(req.body.password, user?.password);
  })
  .withMessage("Credenciales invalidas");

const register_email = body("email")
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

const register_username = body("username")
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

const register_terms = body("checkTerms")
  .exists()
  .withMessage("Debes aceptar los términos y condiciones");

const register_password = body("password")
  .notEmpty()
  .withMessage("Campo requerido")
  .bail()
  .isLength({ min: 5, max: 25 })
  .withMessage("Longitud minima 5 y máximo 25")
  .bail()
  .isAlphanumeric("es-ES")
  .withMessage("La contraseña debe ser letras y números");

const register_merge_validation = body("password2")
  .custom((value, { req }) => {
    return value === req.body.password;
  })
  .withMessage("Las contraseñas no coinciden");

const register_re_captcha = body("recaptcha")
  .custom((_, { req }) => !!req.body["g-recaptcha-response"])
  .withMessage("Debes activar el captcha");

module.exports = {
  validationUserLogin: [login_email, login_password, login_merge_validation],
  validationUserRegister: [
    register_email,
    register_password,
    register_username,
    register_terms,
    register_merge_validation,
    register_re_captcha,
  ],
};
