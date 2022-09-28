"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      subtitle: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      model: {
        type: Sequelize.STRING,
      },
      madeIn: {
        type: Sequelize.STRING,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      discount: {
        type: Sequelize.INTEGER,
      },
      showInOffer: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      outstanding: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      available: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      stock: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      freeShipping: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      priceShipping: {
        type: Sequelize.INTEGER,
      },

      /* Foreign Keys */
      brandId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Brand",
          key: "id",
        },
      },
      typeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Type",
          key: "id",
        },
      },
      colorId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Color",
          key: "id",
        },
      },
      subcategoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Subcategory",
          key: "id",
        },
      },
      providerId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Provider",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("products");
  },
};
