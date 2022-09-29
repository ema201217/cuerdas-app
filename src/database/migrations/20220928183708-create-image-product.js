"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("imageProducts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      img: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      /* Foreign Key */
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: { tableName: "products" },
          key: "id",
        },
        onDelete: "CASCADE",
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
    await queryInterface.dropTable("imageProducts");
  },
};
