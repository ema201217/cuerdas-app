const express = require("express");
const router = express.Router();

const {
  register,
  login,
  shoppingCart,
  profile,
} = require("../controllers/usersControllers");

/* /users */
router
  .get("/registrar", register)
  .get("/ingresar", login)
  .get("/carrito", shoppingCart)
  .get("/perfil", profile)

module.exports = router;
