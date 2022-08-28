const express = require('express');
const router = express.Router();

const { categories, users, products, banners, dashboard,codeEditor,staff} = require('../controllers/adminControllers')

/* /products */
router
  .get('/categorias', categories)
  .get('/usuarios', users)
  .get('/productos', products)
  .get('/banners', banners)
  .get('/dashboard', dashboard)
  .get('/code', codeEditor)
  .get('/empleados', staff)
 

module.exports = router;
