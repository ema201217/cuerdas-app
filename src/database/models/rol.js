'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      /* MODEL USER */
      this.hasMany(models.User,{
        as:'users',
        foreignKey:'roleId'
      })
    }
  }
  rol.init({
    type: DataTypes.STRING,
    info: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Role',
    tableName: 'roles'
  });
  return rol;
};