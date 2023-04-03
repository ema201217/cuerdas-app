'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class location extends Model {

    static associate(models) {
      // define association here
      this.belongsTo(models.User,{
        as:'user',
        foreignKey:'userId'
      })
    }
  }
  location.init({
    country: DataTypes.STRING,
    province: DataTypes.STRING,
    city: DataTypes.STRING,
    address: DataTypes.STRING,
    number: DataTypes.INTEGER,
    floor: DataTypes.INTEGER,
    apartment: DataTypes.STRING,
    pc: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Location',
    tableName: 'locations'
  });
  return location;
};