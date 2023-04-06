'use strict';

const { favorites } = require("../JSONS");

const favoritesMap = favorites.map(favorite => {
  return {
    ...favorite,
    createdAt:new Date()
  }
})

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('favorites', favoritesMap, {});  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('favorites', null, {});
  }
};