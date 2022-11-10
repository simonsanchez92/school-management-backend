"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      "roles",
      [
        {
          description: "admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "teacher",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "student",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("roles", null, {});
  },
};
