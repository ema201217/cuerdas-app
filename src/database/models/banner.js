'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class banner extends Model {

    static associate(models) {
      // define association here

      /* MODEL IMAGES BANNER */
      this.hasMany(models.ImageBanner,{
        as:'images',
        foreignKey:'bannerId'
      })
    }
  }
  banner.init({
    view: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Banner',
    tableName: 'banners'
  });
  return banner;
};