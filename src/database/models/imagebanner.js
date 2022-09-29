'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class imageBanner extends Model {

    static associate(models) {
      // define association here
      this.belongsTo(models.Banner,{
        as:'images',
        foreignKey:'bannerId'
      })
    }
  }
  imageBanner.init({
    img: DataTypes.STRING,
    banner_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ImageBanner',
    tableName: 'imageBanners'
  });
  return imageBanner;
};