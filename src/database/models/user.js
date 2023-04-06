"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      // define association here

      /* MODEL LOCATION */
      this.hasMany(models.Location, {
        as: "locations",
        foreignKey: "userId",
        onDelete: "CASCADE",
      });

      /* MODEL GENDER */
      this.belongsTo(models.Gender, {
        as: "gender",
        foreignKey: "genderId",
      });

      /* MODEL ROLE */
      this.belongsTo(models.Role, {
        as: "role",
        foreignKey: "roleId",
      });
    }
  }
  user.init(
    {
      name: DataTypes.STRING,
      surname: DataTypes.STRING,
      username: DataTypes.STRING,
      avatar: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      genderId: DataTypes.INTEGER,
      roleId: { type: DataTypes.INTEGER, defaultValue: 2 },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      timestamps: true,
    }
  );
  return user;
};
