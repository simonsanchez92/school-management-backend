"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Student", [
      {
        name: "Simon",
        surname: "Sanchez",
        dob: "05/26/1992",
        phone: "3815469128",
        gender: "male",
        address: "Calle inventada 1750",
        user_id: 3,
        status: true,
      },
      {
        name: "Lucila",
        surname: "Lopez",
        dob: "05/26/1985",
        phone: "3815469128",
        gender: "female",
        address: "Calle inventada 123123",
        user_id: 6,
        status: true,
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
    await queryInterface.bulkDelete("Student", null, {});
  },
};
