const express = require('express');
const router = express.Router();

const {index,carrito} = require('../controllers/indexController')

/* / */
router
  .get('/', index)
  .get('/carrito',carrito)

module.exports = router;
