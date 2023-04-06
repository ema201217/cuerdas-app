'use strict';

const { providers } = require("../JSONS");

const providersMap = providers.map(provider => {
  return {
    ...provider,
    createdAt:new Date()
  }
})

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('providers', providersMap, {});  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('providers', null, {});
  }
};
