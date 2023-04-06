const express = require("express");
const router = express.Router();

const {
  register,
  login,
  shoppingCart,
  profile,
  processLogin,
  processRegister,
  logout,
} = require("../controllers/usersControllers");
const {
  validationUserLogin,
  validationUserRegister,
} = require("../middlewares/validations");

/* /usuario */
router
  .get("/registrar", register)
  .post("/registrar", validationUserRegister, processRegister)
  .get("/ingresar", login)
  .post("/ingresar", validationUserLogin, processLogin)
  .get("/salir", logout)
  .get("/carrito", shoppingCart)
  .get("/perfil", profile);

module.exports = router;
