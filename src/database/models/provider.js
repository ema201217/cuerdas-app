'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class provider extends Model {

    static associate(models) {
      // define association here
      
      /* MODEL PRODUCT */
      this.hasMany(models.Product,{
        as:'products',
        foreignKey:'provider_id'
      })
    }
  }
  provider.init({
    name: DataTypes.STRING,
    cuit: DataTypes.STRING,
    address_complete: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Provider',
    tableName: 'providers',
    underscored:true
  });
  return provider;
};