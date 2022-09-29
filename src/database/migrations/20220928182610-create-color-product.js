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
        type: Sequelize.JSON,
        defaultValue: "[]"
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('colorProducts');
  }
};