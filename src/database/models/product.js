'use strict';
const {
  Model
} = require('sequelize');
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
      this.hasMany(models.ImageProduct,{
        as:'images',
        foreignKey:'product_id'
      })

      /* MODEL BRAND */
      this.belongsTo(models.Brand,{
        as:'brand',
        foreignKey:'brand_id'
      })

      /* MODEL TYPE */
      this.belongsTo(models.Type,{
        as:'type',
        foreignKey:'type_id'
      })

      /* MODEL COLOR */
      this.belongsTo(models.Color,{
        as:'color',
        foreignKey:'color_id'
      })

      /* MODEL SUBCATEGORY */
      this.belongsTo(models.Subcategory,{
        as:'subcategory',
        foreignKey:'subcategory_id'
      })
     
      /* MODEL PROVIDER */
      this.belongsTo(models.Provider,{
        as:'provider',
        foreignKey:'provider_id'
      })

    }
  }
  product.init({
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    description: DataTypes.TEXT,
    model: DataTypes.STRING,
    made_in: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    show_in_offer: DataTypes.BOOLEAN,
    outstanding: DataTypes.BOOLEAN,
    available: DataTypes.BOOLEAN,
    stock: DataTypes.BOOLEAN,
    free_shipping: DataTypes.BOOLEAN,
    price_shipping: DataTypes.INTEGER,

    /* Foreign Key */
    brand_id: DataTypes.INTEGER,
    type_id: DataTypes.INTEGER,
    color_id: DataTypes.INTEGER,
    subcategory_id: DataTypes.INTEGER,
    provider_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
    createdAt:'created_at',
    updatedAt:'updated_at',
    underscored:true
  });
  return product;
};