'use strict';

const { typesProducts } = require("../JSONS");

const typesMap = typesProducts.map(type => {
  return {
    ...type,
    createdAt:new Date
  }
})

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('typeProducts', typesMap, {});  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('typeProducts', null, {});
  }
};
