const express = require("express");
const router = express.Router();

const { detail, all } = require("../controllers/productsControllers");

/* /products */
router
.get("/detalle/:id/:category?", detail)
.get("/:categoryId/:accessoryId?", all);

module.exports = router;
