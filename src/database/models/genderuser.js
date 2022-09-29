'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class genderUser extends Model {

    
    
    static associate(models) {
      // define association here

      /* MODEL USER */
      this.hasMany(models.User,{
        as:'users',
        foreignKey:'genderId'
      })
    }
  }
  genderUser.init({
    text: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Gender',
    tableName: 'genderUsers'
  });
  return genderUser;
};