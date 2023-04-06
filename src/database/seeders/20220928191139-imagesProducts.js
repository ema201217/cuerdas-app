'use strict';

const { imgsProducts } = require("../JSONS");

const imgsMap = imgsProducts.map(img => {
  return {
    ...img,
    createdAt:new Date()
  }
})

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('imageProducts', imgsMap, {});  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('imageProducts', null, {});
  }
};