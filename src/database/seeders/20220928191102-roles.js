'use strict';

const { roles } = require("../JSONS");

const rolesMap = roles.map(rol => {
  return {
    ...rol,
    created_at:new Date
  }
})

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('roles', rolesMap, {});  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('roles', null, {});
  }
};
