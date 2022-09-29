'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class banner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      /* MODEL IMAGES BANNER */
      this.hasMany(models.ImageBanner,{
        as:'images',
        foreignKey:'banner_id'
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