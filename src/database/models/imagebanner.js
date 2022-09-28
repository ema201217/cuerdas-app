'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class imageBanner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  imageBanner.init({
    img: DataTypes.STRING,
    bannerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ImageBanner',
  });
  return imageBanner;
};