"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("locations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      country: {
        type: Sequelize.STRING,
      },
      province: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      active: {
        type: Sequelize.BOOLEAN,
      },
      address: {
        type: Sequelize.STRING,
      },
      number: {
        type: Sequelize.INTEGER,
      },
      floor: {
        type: Sequelize.INTEGER.UNSIGNED,
      },
      apartment: {
        type: Sequelize.STRING,
      },
      pc: {
        type: Sequelize.STRING,
      },

      /* Foreign Key */
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: { tableName: "users" },
          key: "id",
        },
        onDelete: "CASCADE",
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
    await queryInterface.dropTable("locations");
  },
};
