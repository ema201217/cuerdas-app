'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue:1
      },
      total: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      /* Foreign Keys */
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:{tableName:'products'},
          key:'id'
        },
        onDelete:'CASCADE'
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:{tableName:'users'},
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
    await queryInterface.dropTable('orders');
  }
};