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
    await queryInterface.bulkInsert("User", [
      {
        id: 1,
        email: "admin@admin.com",
        password: "admin",
        role_id: 1,
        last_login: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        email: "simon@teacher.com",
        password: "123456",
        role_id: 2,
        last_login: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        email: "camilo@student.com",
        password: "123456",
        role_id: 3,
        last_login: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        email: "admin2@admin.com",
        password: "admin",
        role_id: 1,
        last_login: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        email: "simon2@teacher.com",
        password: "123456",
        role_id: 2,
        last_login: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 6,
        email: "camilo2@student.com",
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
    await queryInterface.bulkDelete("User", null, {});
  },
};
