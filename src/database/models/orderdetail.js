'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      /* MODEL ORDER */
      this.belongsTo(models.Order,{
        as:'detail',
        foreignKey:'order_id'
      })
    }
  }
  orderDetail.init({
    price_unit: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrderDetail',
    tableName: 'orderDetails'
  });
  return orderDetail;
};