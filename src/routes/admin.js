const express = require("express");
const router = express.Router();

const {
  categories,
  users,
  products,
  banners,
  dashboard,
  codeEditor,
  staff,
  messages,
  notesCredits,
  sales,
  search,
} = require("../controllers/adminControllers");

/* /products */
router
  .get("/categorias", categories)
  .get("/usuarios", users)
  .get("/productos", products)
  .get("/banners", banners)
  .get("/dashboard", dashboard)
  .get("/code", codeEditor)
  .get("/empleados", staff)
  .get("/search", search)
  .get("/mensajes", messages)
  .get("/notas-creditos", notesCredits)
  .get("/ventas", sales);

module.exports = router;
