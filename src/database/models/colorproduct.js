'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class colorProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      /* MODEL PRODUCT */
      this.hasMany(models.Product,{
        as:'products',
        foreignKey:'colorId'
      })
    }
  }
  colorProduct.init({
    text: DataTypes.STRING,
    hex: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Color',
    tableName:'colorProducts'
  });
  return colorProduct;
};