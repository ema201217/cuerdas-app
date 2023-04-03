const express = require("express");
const router = express.Router();

const {
  changePassword,
  recoverPass,
  newPass
} = require("../controllers/passwordControllers");

/* /users */
router
  .get("/cambiar",changePassword)
  .get("/recuperar",recoverPass)
  .get("/",newPass)
  

module.exports = router;