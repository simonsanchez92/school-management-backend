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
    await queryInterface.bulkInsert("Admin", [
      {
        name: "Administrator",
        surname: "Sanchez",
        user_id: 1,
        status: true,
        join_date: new Date(),
      },
      {
        name: "Administrator2",
        surname: "Lopez",
        user_id: 4,
        status: true,
        join_date: new Date(),
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
    await queryInterface.bulkDelete("Admin", null, {});
  },
};
