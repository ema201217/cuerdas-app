'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('favorites', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      /* Foreign Keys */
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:{tableName:'users'},
          key:'id'
        },
        onDelete:'CASCADE'
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:{tableName:'products'},
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
    await queryInterface.dropTable('favorites');
  }
};