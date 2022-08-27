const express = require('express');
const router = express.Router();

const {contact} = require('../controllers/infoControllers')

/* /products */
router
  .get('/contacto', contact)
 

module.exports = router;
