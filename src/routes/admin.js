const express = require('express');
const router = express.Router();

const {listProducts} = require('../controllers/adminControllers')

/* /products */
router
  .get('/', listProducts)
 

module.exports = router;
