'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('colorProducts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      text: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hex: {
        type: Sequelize.TEXT,
        defaultValue: "[]"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('colorProducts');
  }
};