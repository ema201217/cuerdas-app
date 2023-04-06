'use strict';

const { ordersDetails } = require("../JSONS");

const detailsMap = ordersDetails.map(detail => {
  return {
    ...detail,
    createdAt:new Date()
  }
})

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('orderDetails', detailsMap, {});  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('orderDetails', null, {});
  }
};

