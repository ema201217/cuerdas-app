"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      surname: {
        type: Sequelize.STRING,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      avatar: {
        type: Sequelize.STRING,
      },
      /* Foreign Keys */
      genderId: {
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: "genderUsers" },
          key: "id",
        },
      },
      roleId: {
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: "roles" },
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
      deletedAt: Sequelize.DATE,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
