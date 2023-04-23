const { literal } = require("sequelize");

module.exports = (field, alias) => [
  /* field = campo */
  literal(
    `CONCAT( UPPER( SUBSTRING( ${field}, 1, 1 )),LOWER( SUBSTRING( ${field}, 2 )))`
  ),
  alias,
];