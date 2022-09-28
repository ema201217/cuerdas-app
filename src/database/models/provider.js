'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class provider extends Model {

    static associate(models) {
      // define association here
      
    }
  }
  provider.init({
    name: DataTypes.STRING,
    cuit: DataTypes.STRING,
    addressComplete: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Provider',
  });
  return provider;
};