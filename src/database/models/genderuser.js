'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class genderUser extends Model {

    
    
    static associate(models) {
      // define association here
    }
  }
  genderUser.init({
    text: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Gender',
  });
  return genderUser;
};