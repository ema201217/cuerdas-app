'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class brand extends Model {
 
    
    static associate(models) {
      // define association here
    }
  }
  brand.init({
    name: DataTypes.STRING,
    logo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Brand',
  });
  return brand;
};