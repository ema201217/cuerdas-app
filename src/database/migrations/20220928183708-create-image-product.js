'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('imageProducts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },

      /* Foreign Key */
      productId: {
        type: Sequelize.INTEGER,
        references: {
          model:'Product',
          key:'id'
        },
        onDelete:'CASCADE'
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
    await queryInterface.dropTable('imageProducts');
  }
};