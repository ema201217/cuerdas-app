const express = require("express");
const router = express.Router();

const { detail, all } = require("../controllers/productsControllers");

/* /products */
router
.get("/:categoryId?", all)
.get("/detalle/:id/:categoryId?", detail)

module.exports = router;
