'use strict';

const { subcategories } = require("../JSONS");

const subcategoriesMap = subcategories.map(category => {
  return {
    ...category,
    createdAt:new Date
  }
})

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('subcategories', subcategoriesMap, {});  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('subcategories', null, {});
  }
};
