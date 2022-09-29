'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('imageBanners', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      img: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      
      /* Foreign Key */
      banner_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName:"banners"
          },
          key: "id",
        },
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
    await queryInterface.dropTable('imageBanners');
  }
};