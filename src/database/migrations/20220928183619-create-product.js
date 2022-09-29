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
      made_in: {
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
      show_in_offer: {
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
      free_shipping: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      price_shipping: {
        type: Sequelize.INTEGER.UNSIGNED
      },

      /* Foreign Keys */
      brand_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName:"brands"
          },
          key: "id",
        },
      },
      type_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName:"typeProducts"
          },
          key: "id",
        },
      },
      color_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName:"colorProducts"
          },
          key: "id",
        },
      },
      subcategory_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName:"subcategories"
          },
          key: "id",
        },
      },
      provider_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName:"providers"
          },
          key: "id",
        },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("products");
  },
};
