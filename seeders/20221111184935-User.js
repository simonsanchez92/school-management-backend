"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Users", [
      {
        email: "admin@admin.com",
        password: "admin",
        role_id: 1,
        last_login: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        email: "simon@teacher.com",
        password: "123456",
        role_id: 2,
        last_login: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        email: "camilo@student.com",
        password: "123456",
        role_id: 3,
        last_login: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await ueryInterface.bulkDelete("User", null, {});
  },
};
