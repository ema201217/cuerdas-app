'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product.init({
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    description: DataTypes.TEXT,
    model: DataTypes.STRING,
    madeIn: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    showInOffer: DataTypes.BOOLEAN,
    outstanding: DataTypes.BOOLEAN,
    available: DataTypes.BOOLEAN,
    stock: DataTypes.BOOLEAN,
    freeShipping: DataTypes.BOOLEAN,
    priceShipping: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER,
    typeId: DataTypes.INTEGER,
    colorId: DataTypes.INTEGER,
    subcategoryId: DataTypes.INTEGER,
    providerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return product;
};