"use strict";

const { categories } = require("../JSONS");

const categoriesMap = categories.map((category) => {
  return {
    ...category,
    created_at:new Date
  };
});

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("categories", categoriesMap, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
