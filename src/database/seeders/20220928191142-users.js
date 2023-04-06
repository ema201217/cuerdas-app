"use strict";

const { hashSync } = require("bcryptjs");
const { users } = require("../JSONS");

const usersMap = users.map((user) => {
  return {
    ...user,
    password: hashSync(user.password, 12),
    createdAt: new Date(),
  };
});

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", usersMap, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
