'use strict';

const { brands } = require("../JSONS");

const brandsMap = brands.map(brand => {
  return {
    ...brand,
    createdAt:new Date
  }
})
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('brands', brandsMap, {});
  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('brands', null, {});
  }
};
