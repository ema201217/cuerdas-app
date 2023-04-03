'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class favorite extends Model {

    static associate(models) {
      // define association here
    }
  }
  favorite.init({
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return favorite;
};