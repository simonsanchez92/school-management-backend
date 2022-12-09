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
    // await queryInterface.bulkInsert("Teacher", [
    //   {
    //     name: "profe1",
    //     surname: "Sanchez",
    //     dob: "05/26/1992",
    //     phone: "3815469128",
    //     gender: "male",
    //     address: "Calle inventada 1750",
    //     user_id: 2,
    //     status: true,
    //   },
    //   {
    //     name: "profe2",
    //     surname: "Lopez",
    //     dob: "05/26/1985",
    //     phone: "3815469128",
    //     gender: "female",
    //     address: "Calle inventada 123123",
    //     user_id: 5,
    //     status: true,
    //   },
    // ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Teacher", null, {});
  },
};
