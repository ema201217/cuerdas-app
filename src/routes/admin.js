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
  add,
  edit,
  brands,
} = require("../controllers/adminControllers");

router
  /* productos */
  .get("/productos", products)
  .get("/productos/editar/:id", edit)

  /* categorias */
  .get("/categorias", categories)

  /* usuarios */
  .get("/usuarios", users)

  /* banners */
  .get("/banners", banners)

  /* dashboard - estadisticas */
  .get("/dashboard", dashboard)

  /* código (probar) */
  .get("/code", codeEditor)

  /* empleados */
  .get("/empleados", staff)

  /* buscador */
  .get("/search", search)

  /* mensajes */
  .get("/mensajes", messages)

  /* notas de crédito */
  .get("/notas-creditos", notesCredits)

  /* ventas */
  .get("/ventas", sales)

  /* ventas */
  .get("/marcas", brands);

module.exports = router;
