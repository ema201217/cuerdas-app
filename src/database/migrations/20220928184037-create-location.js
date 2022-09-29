'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('locations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false
      },
      province: {
        type: Sequelize.STRING,
        allowNull: false
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      number: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      floor: {
        type: Sequelize.INTEGER
      },
      apartment: {
        type: Sequelize.STRING
      },
      pc: {
        type: Sequelize.STRING
      },

      /* Foreign Key */
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:{tableName:'users'},
          key:'id'
        },
        onDelete:"CASCADE"
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
    await queryInterface.dropTable('locations');
  }
};