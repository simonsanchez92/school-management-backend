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
    await queryInterface.bulkInsert("Classroom", [
      {
        year: 2022,
        school_year_id: 1,
        division_id: 1,
        shift_id: 1,
      },
      {
        year: 2022,
        school_year_id: 2,
        division_id: 1,
        shift_id: 1,
      },
      {
        year: 2022,
        school_year_id: 3,
        division_id: 1,
        shift_id: 1,
      },
      {
        year: 2022,
        school_year_id: 4,
        division_id: 1,
        shift_id: 1,
      },
      {
        year: 2022,
        school_year_id: 5,
        division_id: 1,
        shift_id: 1,
      },

      {
        year: 2022,
        school_year_id: 1,
        division_id: 2,
        shift_id: 1,
      },
      {
        year: 2022,
        school_year_id: 2,
        division_id: 2,
        shift_id: 1,
      },
      {
        year: 2022,
        school_year_id: 3,
        division_id: 2,
        shift_id: 1,
      },
      {
        year: 2022,
        school_year_id: 4,
        division_id: 2,
        shift_id: 1,
      },
      {
        year: 2022,
        school_year_id: 5,
        division_id: 2,
        shift_id: 1,
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
    await queryInterface.bulkDelete("Classroom", null, {});
  },
};
