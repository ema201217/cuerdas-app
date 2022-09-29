'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class imageProduct extends Model {

    static associate(models) {
      // define association here
      imageProduct.belongsTo(models.Product,{
        as:'product',
        foreignKey:'product_id'
      })
    }
  }
  imageProduct.init({
    img: DataTypes.STRING,
    product_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ImageProduct',
    tableName: 'imageProducts',
    createdAt:'created_at',
    updatedAt:'updated_at',
    underscored:true
  });
  return imageProduct;
};