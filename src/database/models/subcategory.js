'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subcategory extends Model {

    static associate(models) {
      // define association here

       /* MODEL PRODUCT */
       this.hasMany(models.Product,{
        as:'products',
        foreignKey:'subcategoryId'
      })

       /* MODEL CATEGORY */
       this.belongsTo(models.Category,{
        as:'category',
        foreignKey:'categoryId'
      })
    }
  }
  subcategory.init({
    name: DataTypes.STRING,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Subcategory',
    tableName: 'subcategories'
  });
  return subcategory;
};