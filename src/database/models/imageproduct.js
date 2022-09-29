'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class imageProduct extends Model {

    static associate(models) {
      // define association here
      this.belongsTo(models.Product,{
        as:'product',
        foreignKey:'productId'
      })
    }
  }
  imageProduct.init({
    img: DataTypes.STRING,
    productId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ImageProduct',
    tableName: 'imageProducts',
    underscored:false
  });
  return imageProduct;
};