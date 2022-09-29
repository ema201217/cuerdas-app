'use strict';

const { orders } = require("../JSONS");

const ordersMap = orders.map(order => {
  return {
    ...order,
    created_at:new Date
  }
})

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('orders', ordersMap, {});  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('orders', null, {});
  }
};
