'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class brand extends Model {
 
    
    static associate(models) {
      // define association here

      /* MODEL PRODUCT */
      brand.hasMany(models.Product,{
        as:'products',
        foreignKey:'brand_id'
      })
    }
  }
  brand.init({
    name: DataTypes.STRING,
    logo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Brand',
    tableName: 'brands',
    underscored:true
  });
  return brand;
};