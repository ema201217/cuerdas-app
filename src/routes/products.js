const express = require("express");
const router = express.Router();

const { detail, all } = require("../controllers/productsControllers");

/* /products */
router
.get("/", all)
.get("/detalle/:id/:subcategoryId?", detail)

module.exports = router;
