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
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      discount: {
        type: Sequelize.INTEGER.UNSIGNED,
      },
      showInOffer: {
        type: Sequelize.BOOLEAN,
      },
      outstanding: {
        type: Sequelize.BOOLEAN,
      },
      available: {
        type: Sequelize.BOOLEAN,
      },
      stock: {
        type: Sequelize.BOOLEAN,
      },
      freeShipping: {
        type: Sequelize.BOOLEAN,
      },
      priceShipping: {
        type: Sequelize.INTEGER.UNSIGNED,
      },

      /* Foreign Keys */
      brandId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "brands",
          },
          key: "id",
        },
      },
      typeId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "typeProducts",
          },
          key: "id",
        },
      },
      colorId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "colorProducts",
          },
          key: "id",
        },
      },
      subcategoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "subcategories",
          },
          key: "id",
        },
      },
      providerId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "providers",
          },
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
      deletedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("products");
  },
};
