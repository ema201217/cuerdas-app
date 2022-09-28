'use strict';

const { banners } = require("../JSONS");

const bannersMap = banners.map(provider => {
  return {
    ...provider,
    createdAt:new Date
  }
})

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('banners', bannersMap, {});  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('banners', null, {});
  }
};