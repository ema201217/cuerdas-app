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
  edit,
  brands,
  update,
  store,
} = require("../controllers/adminControllers");
const {
  createProductValidation,
} = require("../middlewares/validations/productsValidation");

router
  /* productos */
  .get("/productos", products)
  .post("/productos", createProductValidation, store)
  .get("/productos/editar/:id", edit)
  .put("/productos/editar/:id", update)

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
