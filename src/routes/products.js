const express = require("express");
const router = express.Router();

const { detail, all } = require("../controllers/productsControllers");

/* /products */
router
.get("/detalle/:id/:subcategoryId?", detail)
.get("/:categoryId?/:subcategoryId?", all)

module.exports = router;
