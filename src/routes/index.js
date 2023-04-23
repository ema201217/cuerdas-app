const express = require('express');
const router = express.Router();

const {search, home} = require('../controllers/indexControllers')

/*  */
router
  .get('/', home)
  .get('/buscar', search)

module.exports = router;