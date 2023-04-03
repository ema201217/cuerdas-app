const express = require('express');
const router = express.Router();

const {contact, contactStore} = require('../controllers/infoControllers')

/* /products */
router
  .get('/contacto', contact)
  .post('/contacto',contactStore)
 

module.exports = router;
