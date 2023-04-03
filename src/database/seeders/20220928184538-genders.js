'use strict';

const { genders } = require("../JSONS");

const gendersMap = genders.map(gender => {
  return {
    ...gender,
    createdAt:new Date
  }
})

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('genderUsers', gendersMap, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('genderUsers', null, {});
  }
};
