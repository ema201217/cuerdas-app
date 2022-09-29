'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
      /* MODEL LOCATION */
      this.hasMany(models.Location,{
        as:'locations',
        foreignKey:'user_id'
      })
      
      /* MODEL GENDER */
      this.belongsTo(models.Gender,{
        as:'gender',
        foreignKey:'gender_id'
      })
     
      /* MODEL ROLE */
      this.belongsTo(models.Role,{
        as:'role',
        foreignKey:'role_id'
      })
    }
  }
  user.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    gender_id: DataTypes.INTEGER,
    role_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return user;
};