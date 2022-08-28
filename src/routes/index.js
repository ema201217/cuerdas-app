const express = require('express');
const router = express.Router();

const {index, search} = require('../controllers/indexControllers')

/*  */
router
  .get('/', index)
  .get('/buscar', search)

module.exports = router;