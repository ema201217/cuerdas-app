'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class brand extends Model {
 
    
    static associate(models) {
      // define association here

      /* MODEL PRODUCT */
      this.hasMany(models.Product,{
        as:'products',
        foreignKey:'brandId'
      })
    }
  }
  brand.init({
    name: DataTypes.STRING,
    logo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Brand',
    tableName: 'brands'
  });
  return brand;
};