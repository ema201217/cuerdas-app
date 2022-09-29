'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      /* MODEL ORDER DETAIL */
      this.belongsTo(models.Order,{
        as:'detail',
        foreignKey:'orderId'
      })
    }
  }
  order.init({
    status: DataTypes.STRING,
    total: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'orders'
  });
  return order;
};