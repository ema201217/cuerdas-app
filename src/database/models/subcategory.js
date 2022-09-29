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
        foreignKey:'subcategory_id'
      })

       /* MODEL CATEGORY */
       this.belongsTo(models.Category,{
        as:'category',
        foreignKey:'category_id'
      })
    }
  }
  subcategory.init({
    name: DataTypes.STRING,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Subcategory',
    tableName: 'subcategories',
    underscored:true
  });
  return subcategory;
};