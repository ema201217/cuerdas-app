'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User,{
        as:'user',
        foreignKey:'user_id'
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
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Location',
    tableName: 'locations'
  });
  return location;
};