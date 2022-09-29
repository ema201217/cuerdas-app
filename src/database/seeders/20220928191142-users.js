'use strict';

const { users } = require("../JSONS");

const usersMap = users.map(user => {
  return {
    ...user,
    created_at:new Date
  }
})

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('users', usersMap, {});  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('users', null, {});
  }
};
