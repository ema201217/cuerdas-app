"use strict";
const sequelizePaginate = require('sequelize-paginate')
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      /* MODEL IMAGE PRODUCT */
      this.hasMany(models.ImageProduct, {
        as: "images",
        foreignKey: "productId",
        onDelete: 'CASCADE'
      });

      /* MODEL BRAND */
      this.belongsTo(models.Brand, {
        as: "brand",
        foreignKey: "brandId",
      });

      /* MODEL TYPE */
      this.belongsTo(models.Type, {
        as: "type",
        foreignKey: "typeId",
      });

      /* MODEL COLOR */
      this.belongsTo(models.Color, {
        as: "color",
        foreignKey: "colorId",
      });

      /* MODEL SUBCATEGORY */
      this.belongsTo(models.Subcategory, {
        as: "subcategory",
        foreignKey: "subcategoryId",
      });

      /* MODEL PROVIDER */
      this.belongsTo(models.Provider, {
        as: "provider",
        foreignKey: "providerId",
      });
    }
  }
  product.init(
    {
      title: DataTypes.STRING,
      subtitle: DataTypes.STRING,
      description: DataTypes.TEXT,
      model: DataTypes.STRING,
      madeIn: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      discount: DataTypes.INTEGER,
      showInOffer: DataTypes.BOOLEAN,
      outstanding: DataTypes.BOOLEAN,
      available: DataTypes.BOOLEAN,
      stock: DataTypes.BOOLEAN,
      freeShipping: DataTypes.BOOLEAN,
      priceShipping: DataTypes.INTEGER,

      /* Foreign Keys */
      brandId: DataTypes.INTEGER,
      typeId: DataTypes.INTEGER,
      colorId: DataTypes.INTEGER,
      subcategoryId: DataTypes.INTEGER,
      providerId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
      tableName: "products",
      paranoid: true
    }
  );

  sequelizePaginate.paginate(product)
  return product;
};
