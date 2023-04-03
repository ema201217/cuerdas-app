'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('brands', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      logo: {
        type: Sequelize.TEXT,
        defaultValue:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMxWNmN8rTxddxZp4G4KY82VMh9Qdo2kh0vHt_LQ0lww&s"
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
    await queryInterface.dropTable('brands');
  }
};