const express = require("express");
const router = express.Router();

const {
  register,
  login,
  shoppingCart,
} = require("../controllers/usersControllers");

/* /users */
router
  .get("/registrar", register)
  .get("/ingresar", login)
  .get("/carrito", shoppingCart);

module.exports = router;
