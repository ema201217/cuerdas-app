'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class typeProduct extends Model {
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
        foreignKey:'typeId'
      })
      
    }
  }
  typeProduct.init({
    name: DataTypes.STRING,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Type',
    tableName: 'typeProducts'
  });
  return typeProduct;
};