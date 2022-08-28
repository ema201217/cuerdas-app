module.exports = (req, res, next) => {
  res.locals.categories = require("../data/categories.json");
  res.locals.accessories = require("../data/accessories.json");
  next();
};
