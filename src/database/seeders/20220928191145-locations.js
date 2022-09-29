'use strict';

const { locations } = require("../JSONS");

const locationsMap = locations.map(location => {
  return {
    ...location,
    created_at:new Date
  }
})

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('locations', locationsMap, {});  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('locations', null, {});
  }
};