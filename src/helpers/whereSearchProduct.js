const { Op } = require("sequelize");

module.exports = ({fields = [],keyword}) => {
  const operationSearch = { [Op.substring]: keyword };
  const where = {
    /* MAPEAMOS LOS FIELDS QUE RECIBIMOS POR PARÁMETRO */
    [Op.or]: fields.map((field) => ({ [field]: operationSearch })),
  };
  return { where };
};
