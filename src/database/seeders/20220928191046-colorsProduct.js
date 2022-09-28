'use strict';

const { colors } = require("../JSONS");

const colorsMap = colors.map(provider => {
  return {
    ...provider,
    hex: JSON.stringify(provider.hex),
    createdAt:new Date
  }
})

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('colorProducts', colorsMap, {});  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('colorProducts', null, {});
  }
};
