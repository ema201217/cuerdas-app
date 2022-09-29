'use strict';

const { imgsBanners } = require("../JSONS");

const imgsMap = imgsBanners.map(img => {
  return {
    ...img,
    created_at:new Date
  }
})

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('imageBanners', imgsMap, {});  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('imageBanners', null, {});
  }
};