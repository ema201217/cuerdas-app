'use strict';

const { products } = require("../JSONS");

const productsMap = products.map(product => {
  return {
    ...product,
    createdAt:new Date
  }
})

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('products', productsMap, {});  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('products', null, {});
  }
};
