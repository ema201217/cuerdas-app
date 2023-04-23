const { col, fn } = require("sequelize");

module.exports = ({ sqlFunction, field, alias }) => [
  fn(sqlFunction, col(field)),
  alias,
];
