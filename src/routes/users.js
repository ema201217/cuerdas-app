const express = require('express');
const router = express.Router();

const {register,login} = require('../controllers/usersControllers')

/* /users */
router
  .get('/registrar', register)
  .get('/ingresar',login)
 

module.exports = router;
